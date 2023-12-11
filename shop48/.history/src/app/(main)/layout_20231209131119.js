import "@/app/global.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import Swiper and modules styles

import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Header id="header" />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}