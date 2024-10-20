import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "ACodeReview.com",
  description: "ACodeReview.com",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
