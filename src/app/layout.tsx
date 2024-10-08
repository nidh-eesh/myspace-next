import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import NavMenu from "./NavMenu";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        <NavMenu />
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
