import { Exo_2 as Font } from "next/font/google";
import PlausibleTracker from "./PlausibleTracker";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
});

export const metadata = {
  title: "The Hidden Gaming Lair - Enhance Your Gaming Experience",
  description:
    "Welcome to The Hidden Gaming Lair! Discover a variety of gaming apps and tools, including interactive maps, databases, and achievement trackers, designed to enhance your gaming experience. Explore our site and level up your gaming!",
  keywords: "gaming, apps, interactive maps, databases, achievement trackers",
  authors: [{ name: "DevLeon", url: "https://github.com/lmachens" }],
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://www.th.gl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <PlausibleTracker />
      </head>
      <body
        className={`${font.className} bg-gradient-to-b from-[#161516] to-[#09080c] select-none`}
      >
        {children}
      </body>
    </html>
  );
}
