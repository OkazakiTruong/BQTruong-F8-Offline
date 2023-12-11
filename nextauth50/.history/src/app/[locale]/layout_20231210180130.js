import { notFound } from "next/navigation";
const locales = ["vi", "en"];

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}