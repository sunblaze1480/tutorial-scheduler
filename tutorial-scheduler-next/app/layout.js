import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TutorialsProvider } from "./context/TutorialsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your Tutorial Scheduler",
  description: "a NextJS application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TutorialsProvider>
          {children}
        </TutorialsProvider>
      </body>
    </html>
  );
}
