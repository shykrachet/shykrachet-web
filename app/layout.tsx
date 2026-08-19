import type { Metadata } from "next";
import { Athiti, Geist_Mono } from "next/font/google";
import { PreferencesProvider } from "@/components/preferences-provider";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const athiti = Athiti({
  variable: "--font-athiti",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "haerinforever | Blog",
  description: "Website and blog of Nattapoom Wilawan",
  icons: {
    icon: "/moai-icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${athiti.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${athiti.className} min-h-full flex flex-col`}>
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
