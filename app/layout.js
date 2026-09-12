import { Inter, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./i18n/LangContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-mincho",
  display: "swap",
});

export const metadata = {
  title: "Kitsune Mask — The Evolution of Root Management",
  description:
    "A powerful Magisk fork featuring Material 3 design, advanced SuList logic, and robust bootloop protection. Control your device like never before.",
  keywords: [
    "Kitsune Mask",
    "Magisk fork",
    "root management",
    "Material 3",
    "SuList",
    "Android root",
    "bootloop protection",
  ],
  openGraph: {
    title: "Kitsune Mask — The Evolution of Root Management",
    description:
      "A powerful Magisk fork with Material 3 design, advanced SuList logic, and bootloop protection.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0d0b10",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mincho.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
