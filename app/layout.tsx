import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme/providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Cube27 | AI Business Transformation & Consulting",
  description:
    "Cube27 helps enterprises design, build, and scale AI-native workflows that unlock new revenue, reduce cost, and transform customer experience.",
  icons: {
    icon: "/favicon.ico"
  },
  metadataBase: new URL("https://cube27.example.com") // change to your domain
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
