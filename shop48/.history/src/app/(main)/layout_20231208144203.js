import "@/app/global.css";
import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";
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
        </ChakraProvider>
      </body>
    </html>
  );
}
