import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/features/Header/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACodeReview.com",
  description:
    "ACodeReview.com is your go-to platform for expert code reviews, insightful programming tutorials, and practical advice for developers. Join us as we break down popular coding courses, identify bad habits, and offer best practices for cleaner, more efficient code. Whether you’re a beginner looking to level up your skills or an experienced developer seeking refined techniques, ACodeReview.com provides valuable content to boost your coding expertise. Explore our YouTube channel @ACodeReview for real-world code critiques and stay tuned for premium courses, guides, and resources to accelerate your coding journey.",
  // icons: {
  //   icon: [
  //     {
  //       rel: "icon",
  //       type: "image/png",
  //       media: "(prefers-color-scheme: dark)",
  //       url: "/favicon-dark.png",
  //     },
  //     {
  //       rel: "icon",
  //       type: "image/png",
  //       media: "(prefers-color-scheme: light)",
  //       url: "/favicon-light.png",
  //     },
  //   ],
  // },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body
      className={`${inter.className} body flex min-h-screen flex-col bg-least-contrast`}
    >
      <Header />
      <main className="p-6 lg:px-12">{children}</main>
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
