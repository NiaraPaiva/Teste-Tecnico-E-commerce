import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import Menu from "@/components/menu";

export const metadata: Metadata = {
  title: "Seu título",
  description: "Sua descrição",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Menu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
