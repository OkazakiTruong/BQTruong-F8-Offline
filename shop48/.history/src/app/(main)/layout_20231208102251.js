import Header from "@/components/Header";
@tailwind base;
@tailwind base;
@tailwind base;

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
      </body>
    </html>
  );
}