import type { Metadata } from "next";
import localFont from "next/font/local";
import { PreferencesProvider } from "@/components/preferences-provider";
import "./globals.css";

const torus = localFont({
  variable: "--font-torus",
  display: "swap",
  src: [
    {
      path: "../fonts/Torus-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Torus-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Torus-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Torus-SemiBold.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Torus-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Torus-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Torus-Heavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
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
      className={`${torus.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${torus.className} min-h-full flex flex-col`}>
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
