import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gabble - Where Conversations Begin",
  description:
    "Welcome to Gabble, the ultimate platform for seamless and vibrant conversations. Whether you're catching up with old friends or making new connections, Gabble provides a dynamic and user-friendly space to chat, share, and stay connected. Join Gabble today and unlock the power of conversation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
