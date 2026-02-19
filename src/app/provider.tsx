"use client";
import { CarrinhoProvider } from "@/context/CarrinhoContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CarrinhoProvider>{children}</CarrinhoProvider>;
}
