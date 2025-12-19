// lib/api/formSubmissions.ts

export interface FormSubmissionData {
  formType?: "contact" | "newsletter" | "quote" | "service";
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  additionalFields?: Record<string, any>;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  doc?: any;
  errors?: any[];
}

/**
 * Submit a form to Payload CMS
 */

const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
  "https://carbackend-delta.vercel.app/api";
  

export async function submitForm(
  data: FormSubmissionData
): Promise<FormSubmissionResponse> {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}/form-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: data.formType || "contact",
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        additionalFields: data.additionalFields,
        status: "new",
        // Capture metadata
        ipAddress: "", // Will be captured on server-side
        userAgent:
          typeof window !== "undefined" ? window.navigator.userAgent : "",
        referrer: typeof window !== "undefined" ? document.referrer : "",
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to submit form",
        errors: result.errors,
      };
    }

    return {
      success: true,
      message: "Form submitted successfully!",
      doc: result.doc,
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: "An error occurred while submitting the form. Please try again.",
      errors: [error],
    };
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone format (basic validation)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

/**
 * Sanitize input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}
