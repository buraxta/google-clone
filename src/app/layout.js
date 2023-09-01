import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "Google Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.svg" sizes="any" /> */}
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="16x16" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
