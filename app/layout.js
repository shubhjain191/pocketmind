import { Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PocketMind",
  description: "PocketMind - One stop AI Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${lora.variable} antialiased`}>
        {/* header */}
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* footer */}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
