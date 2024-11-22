import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { headers } from "next/headers";
import Head from "next/head";
import TermlyScript from "@/components/cookies/TermlyScript";

const montserrat = Montserrat({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export function generateMetadata(): Metadata {
  let host = headers().get("host");
  if (host?.includes("localhost")) {
    host = "http://" + host;
  } else {
    host = "https://" + host;
  }
  return {
    metadataBase: new URL(host!),
    authors: [
      {
        name: "Consulting Firm | IURIS",
        url: host!,
      },
    ],
    title: {
      default: "Consulting Firm | IURIS",
      template: "%s - Consulting Firm | IURIS",
    },
    description:
      "Platform that uses human and AI consultants to help you with any consultation task quickly.",
    manifest: "/site.webmanifest",
    icons: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      title: "Consulting Firm | IURIS",
      description:
        "Platform that uses human and AI consultants to help you with any consultation task quickly.",
      locale: "en",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "Consulting Firm | IURIS",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`montserrat.className bg-black`}>
        <TermlyScript />
        <Navbar />
        {children}
        <Footer />
        <a
          href="https://wa.me/62895327505299"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <img
            src="/icons/wa.png"
            alt="WhatsApp"
            style={{ width: "45px", height: "45px" }}
          />
        </a>
      </body>
    </html>
  );
}
