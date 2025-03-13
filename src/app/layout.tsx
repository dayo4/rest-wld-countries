import { Nunito_Sans } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["300", "600", "800"] });

export const metadata = {
  title: "REST Countries API",
  description: "Explore countries' details with a modern UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <Header />
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
