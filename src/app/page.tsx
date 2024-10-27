"use client";

import GitHubLogo from "../components/features/GitHubLink";
import GmailLogo from "../components/features/GmailLink";
import InstagramLogo from "../components/features/InstagramLogo";
import TwitchLogo from "../components/features/TwitchLink";
import YouTubeLogo from "../components/features/YouTubeLink";

const Home = () => (
  <div className="flex flex-col gap-4">
    <h1 className="page-heading">ACodeReview</h1>
    <p>
      ACodeReview.com is your go-to platform for expert code reviews, insightful
      programming tutorials, and practical advice for developers.
    </p>
    <section className="flex justify-evenly border subtle-border-color rounded-lg p-4">
      <YouTubeLogo />
      <GitHubLogo />
      <TwitchLogo />
      <InstagramLogo />
      <GmailLogo />
    </section>

  </div>
);

export default Home;
