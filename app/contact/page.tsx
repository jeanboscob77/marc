import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Marc SENTWALI - Get in Touch",
  description:
    "Reach out to Marc SENTWALI for collaborations, inquiries, or feedback. Get in touch via email or through the contact form.",
  keywords:
    "contact Marc SENTWALI, get in touch, collaborate, inquiries, feedback, contact form, professional contact",
  openGraph: {
    type: "website",
    title: "Contact Marc SENTWALI - Get in Touch",
    description:
      "Reach out to Marc SENTWALI for collaborations, inquiries, or feedback. Get in touch via email or through the contact form.",
    url: "https://www.yourwebsite.com/contact",
    siteName: "Marc SENTWALI's Website",
    images: [
      {
        url: "https://www.yourwebsite.com/path-to-your-image.jpg",
        width: 800,
        height: 600,
        alt: "Contact Marc SENTWALI - Get in Touch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Marc SENTWALI - Get in Touch",
    description:
      "Reach out to Marc SENTWALI for collaborations, inquiries, or feedback. Get in touch via email or through the contact form.",
    // image: "https://www.yourwebsite.com/path-to-your-image.jpg",
    site: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
