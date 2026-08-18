import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whistleref.org"),

  title: "Whistle | Soccer Referee Training & Practice",

  description:
    "Practice soccer referee decision-making with real match scenarios. Make the call, get instant feedback, and build confidence before your next game.",

  keywords: [
    "soccer referee training",
    "soccer referee practice",
    "referee training",
    "referee practice",
    "soccer officiating training",
    "soccer officiating practice",
    "football referee training",
    "football referee practice",
    "soccer referee scenarios",
    "referee scenarios",
    "soccer referee decision making",
    "referee decision making",
    "soccer referee game scenarios",
    "referee match scenarios",
    "soccer officiating scenarios",
    "referee video scenarios",
    "soccer referee video training",
    "referee decision training",
    "soccer referee quiz",
    "referee quiz",
    "soccer referee test",
    "referee practice test",
    "soccer referee practice test",
    "referee rules quiz",
    "soccer rules quiz",
    "soccer referee questions",
    "referee training questions",
    "new referee training",
    "new soccer referee training",
    "beginner soccer referee",
    "beginner referee training",
    "youth soccer referee",
    "youth referee training",
    "teen soccer referee",
    "teen referee training",
    "first time soccer referee",
    "how to become a better soccer referee",
    "how to improve as a soccer referee",
    "soccer referee calls",
    "soccer foul practice",
    "soccer foul scenarios",
    "soccer referee foul recognition",
    "referee foul recognition",
    "soccer handball scenarios",
    "soccer offside scenarios",
    "soccer referee rules",
    "laws of the game referee training",
    "soccer laws of the game practice",
    "referee development",
    "soccer referee development",
    "referee confidence",
    "soccer referee confidence",
    "referee education",
    "soccer referee education",
    "referee learning",
    "soccer referee resources",
    "referee training website",
    "online soccer referee training",
    "free soccer referee training",
    "Whistle",
    "Whistle referee",
    "Whistle referee training",
    "Whistle soccer referee",
    "Whistle soccer referee training",
    "Whistle referee practice",
    "Whistle referee scenarios",
    "whistleref",
    "whistleref.org",
  ],

  authors: [{ name: "Brian Dai" }],
  creator: "Brian Dai",

  alternates: {
    canonical: "https://whistleref.org",
  },

  openGraph: {
    title: "Whistle | Soccer Referee Training & Practice",
    description:
      "Practice real match decisions, get instant feedback, and build confidence as a soccer referee.",
    url: "https://whistleref.org",
    siteName: "Whistle",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}