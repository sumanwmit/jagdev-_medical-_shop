import { WhatsAppOrderFormData } from '../types';

export const WHATSAPP_PHONE = '916200828784';
export const DISPLAY_PHONE = '+91 6200828784';
export const BUSINESS_ADDRESS = '05, Shakurabad, Bihar 804425';

export function createWhatsAppOrderUrl(data: WhatsAppOrderFormData): string {
  const message = `Hello Jagdev Medical Shop,
Medicine Order Request

Customer Name: ${data.customerName}
Phone: ${data.phone}${data.email ? `\nEmail: ${data.email}` : ''}
Medicine Required:
${data.medicineRequired}

Delivery Address: ${data.address}
Prescription Attached: ${data.hasPrescription ? 'Yes (Will share picture)' : 'No'}
Preferred Delivery/Pickup Time: ${data.preferredTime}
${data.message ? `Notes: ${data.message}` : ''}`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createQuickInquiryUrl(subject: string, details?: string): string {
  const text = `Hello Jagdev Medical Shop,\nI have an inquiry regarding: *${subject}*\n${details ? `Details: ${details}` : 'Please let me know availability and pricing.'}`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function createGeneralWhatsAppUrl(): string {
  const text = `Hello Jagdev Medical Shop,\nI want to inquire about medicines and healthcare products.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
