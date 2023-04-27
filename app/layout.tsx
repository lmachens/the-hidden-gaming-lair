import { Exo_2 as Font } from "next/font/google";
import { AppHeader } from "./app-header";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
});

export const metadata = {
  title: "The Hidden Gaming Lair",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gradient-to-b from-[#161516] to-[#09080c] select-none`}
      >
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
