import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://iybots.com"),
  title: {
    default: "Iybots Technologies — AI Automation Agency in Lagos, Nigeria",
    template: "%s | Iybots Technologies",
  },
  description:
    "We design and deploy custom AI automation systems — intelligent agents, workflow orchestration, and document intelligence — that eliminate manual work and compound operational efficiency. Based in Lagos, serving businesses worldwide.",
  keywords: [
    "AI automation agency",
    "AI automation Lagos",
    "AI agents",
    "workflow automation",
    "document intelligence",
    "CRM automation",
    "business automation Nigeria",
    "AI workflow orchestration",
    "custom AI systems",
    "Iybots Technologies",
  ],
  authors: [{ name: "Iybots Technologies", url: "https://iybots.com" }],
  creator: "Iybots Technologies",
  publisher: "Iybots Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iybots.com",
    siteName: "Iybots Technologies",
    title: "Iybots Technologies — AI Automation Agency",
    description:
      "Custom AI automation systems: intelligent agents, workflow orchestration, and document intelligence. 847+ workflows deployed. 63% average time saved.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iybots Technologies — AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iybots Technologies — AI Automation Agency",
    description:
      "Custom AI automation systems that eliminate manual work and compound operational efficiency. Based in Lagos, serving globally.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
};

/* JSON-LD structured data — Organization + WebSite */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://iybots.com/#organization",
  name: "Iybots Technologies",
  url: "https://iybots.com",
  logo: "https://iybots.com/iybots-logo.svg",
  description:
    "AI automation agency that designs and deploys custom AI systems — intelligent agents, workflow orchestration, document intelligence, and CRM automation.",
  email: "ibrahim@iybots.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Place", name: "Worldwide" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "ibrahim@iybots.com",
    contactType: "sales",
    availableLanguage: "English",
  },
  sameAs: [],
  knowsAbout: [
    "Artificial Intelligence",
    "Workflow Automation",
    "AI Agents",
    "Document Intelligence",
    "CRM Automation",
    "Data Pipelines",
    "API Integration",
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://iybots.com/#website",
  url: "https://iybots.com",
  name: "Iybots Technologies",
  publisher: { "@id": "https://iybots.com/#organization" },
  description:
    "AI automation agency specializing in custom AI systems, workflow orchestration, and document intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full">
        {children}
        <Script id="cal-com-init" strategy="lazyOnload">
          {`
            (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "15min", {origin:"https://app.cal.com"});
            Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
          `}
        </Script>
      </body>
    </html>
  );
}
