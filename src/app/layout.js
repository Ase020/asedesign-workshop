import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "aseDesign Workshop",
  description: "Home of the best digital services on the Web.",
  icons: {
    icon: {
      url: "/logo.svg",
    },
    shortcut: { url: "/logo.svg" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
