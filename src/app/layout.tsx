import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "ACodeReview.com",
  description:
    "ACodeReview.com is your go-to platform for expert code reviews, insightful programming tutorials, and practical advice for developers. Join us as we break down popular coding courses, identify bad habits, and offer best practices for cleaner, more efficient code. Whether you’re a beginner looking to level up your skills or an experienced developer seeking refined techniques, ACodeReview.com provides valuable content to boost your coding expertise. Explore our YouTube channel @ACodeReview for real-world code critiques and stay tuned for premium courses, guides, and resources to accelerate your coding journey.",
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
