import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata = {
    title: {
        default: "XNORM — Beyond Normal",
        template: "%s | XNORM",
    },
    description:
        "XNORM is a creative-first digital company redefining what’s possible through design, technology, and innovation. Beyond Normal.",
    openGraph: {
        title: "XNORM — Beyond Normal",
        description:
            "XNORM is a creative-first digital company redefining what’s possible through design, technology, and innovation.",
        url: "https://portfolio-d0o8mxz3b-darshanathamara143-4814s-projects.vercel.app/",
        siteName: "XNORM",
        images: [
            {
                url: "https://portfolio-d0o8mxz3b-darshanathamara143-4814s-projects.vercel.app/og.png",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "XNORM — Beyond Normal",
        card: "summary_large_image",
    },
    icons: {
        shortcut: "/favicon.ico",
    },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
