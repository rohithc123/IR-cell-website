import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IR Cell Portal",
  description: "International Relations Cell Portal for IIT Roorkee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
