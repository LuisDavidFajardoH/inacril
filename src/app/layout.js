import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import { Navbar } from "@/components/Navbar";
import { Box } from "@chakra-ui/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inacril | Soluciones en Acrílico y Policarbonato",
  description: "Diseño y fabricación de soluciones modernas en acrílico, fachadas y revestimientos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Navbar />
          <Box as="main">
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
