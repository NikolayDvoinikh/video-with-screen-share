import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/providers";
import Header from "@/components/header";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Screen-share",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <NextTopLoader />
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
