import type { Metadata } from "next";
import "@/public/style/globals.css";
import "@/public/style/tiptap.scss";
import { Inter as _font } from "next/font/google";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
const font = _font({ subsets: ["latin"] });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <html lang={locale} className="dark" data-theme="dark">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={cn(font.className)}
      >
        {children}
      </body>
    </html>
  );
}
