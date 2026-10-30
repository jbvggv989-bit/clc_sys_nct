// src/config/client.ts
// Edit this file when forking the repository for a new client.

export const CLIENT = {
  name: "clc-sys Clinics",
  nameShort: "clc-sys",
  nameAr: "clc-sys",
  nameShortAr: "clc-sys",

  // Used in page <head> metadata
  tagline: "Multi-Specialty Medical Center",
  metaDescription: "Comprehensive multi-specialty healthcare polyclinic: internal medicine, advanced diagnostics, outpatient specialties, and wellness.",

  // Contact Information
  phoneDisplay: "",
  phoneTel: "",
  whatsappNumber: "201021609546",
  whatsappGreeting: "Hello clc-sys, I'd love to schedule a consultation. Please let me know your earliest availability. Thank you.",
  whatsappBookingGreeting: (serviceName: string) =>
    `Hello clc-sys, I'm interested in booking "${serviceName}". Please let me know your availability. Thank you.`,
  whatsappDepositReceipt: ({
    patientName,
    phone,
    whatsappNumber,
    serviceName,
    date,
    time,
    depositAmount,
    paymentMethod,
    sender,
  }: {
    patientName: string;
    phone: string;
    whatsappNumber?: string;
    serviceName: string;
    date: string;
    time: string | null;
    depositAmount: number;
    paymentMethod: string;
    sender: string;
  }) => `Hello clc-sys Clinics,

I have paid the reservation deposit for my booking:
• Patient: ${patientName}
• Phone: ${phone}${whatsappNumber ? ` (WhatsApp: ${whatsappNumber})` : ""}
• Service: ${serviceName}
• Date: ${date} at ${time}
• Deposit Amount: EGP ${depositAmount}
• Payment Method: ${paymentMethod}
• Sent From: ${sender}

Attached is my payment transaction receipt photo.`, 

  // Public web presence (used by the ad landing pages: canonical URLs, footer links, review badge)
  siteUrl: "https://www.clc-sys.com",
  googleMapsUrl:
    "",
  // Google Maps embed + turn-by-turn link for the branch (coordinates are from the Maps listing above)
  googleMapsEmbedUrl:
    "",
  googleMapsDirectionsUrl: "",
  instagramUrl: "#",
  addressAr: "",
  // Google Tag Manager container for the ad landing pages (public id; NEXT_PUBLIC_GTM_ID overrides it)
  gtmId: "GTM-5ZXBL7LR",
  // Laser device named on the ad landing pages (the pages promise "know the device before you book")
  laserDevice: "Candela GentleMax Pro",
  // Google Business Profile snapshot shown on the landing pages. Update by hand when it moves —
  // it is a marketing claim, so it must match what a visitor sees on the Maps listing.
  googleRating: { score: "4.9", count: 31 },

  // Brand Assets
  logoPath: "/images/main_logo.png",
  logoMarkPath: "/images/landing/revera-mark.png",
  faviconPath: "/icon.png",

  // localStorage Key Prefix (prevents collisions between forks on the same domain)
  storagePrefix: "clcsys",
} as const;

export const clientConfig = CLIENT;

