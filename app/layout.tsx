import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Durable Product Review API",
  description: "API for buy-it-for-life product recommendations. Durability scores and longevity data for ecommerce platforms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2d9b2023-08e4-4858-8016-b99ff4ece103"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
