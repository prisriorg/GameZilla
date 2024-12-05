import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import config from "@/lib/config";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(config.SiteUrl),

  openGraph: {
    title: config.SiteName,
    description: config.Description,
    type: "website",
    url: config.SiteUrl,
    siteName: config.SiteName,
    locale: "hi_IN",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    types: {
      "application/rss+xml": config.rss,
    },
  },
  applicationName: config.SiteName,
  verification: {
    google: config.Google,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Script src='//niphaumeenses.net/vignette.min.js' data-zone='8569082' data-sdk='show_8569082'></Script>*/}
      <body className={inter.className}>
        <NextTopLoader height={3} color="#000000" showSpinner={false} />{" "}
        {children}
      </body>
    </html>
  );
}
