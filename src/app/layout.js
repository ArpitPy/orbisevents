import Credits from "./components/credits/Credits";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import { Poppins } from "next/font/google";

const pop = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Orbis Events",
  description:
    "The best community server in Orbis for events, competitions, shows and VCs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pop.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
        <Credits />
      </body>
    </html>
  );
}
