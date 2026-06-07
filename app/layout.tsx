import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CCPA Data Request Automator – Automate CCPA Compliance",
  description: "Automate CCPA data deletion and export requests. Generate compliant responses with full audit trails for California-serving businesses."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="53ae83b0-2e2b-4654-99de-d25c1ed9f616"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
