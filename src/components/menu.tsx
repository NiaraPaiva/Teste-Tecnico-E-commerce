"use client";

import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import { useCart } from "@/context/CarrinhoContext";

export default function Menu() {
  const { totalItems } = useCart();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={"/"}>
          <Image
            src={"/assets/Logo.svg"}
            alt="E-com"
            width={100}
            height={20}
            priority
          />
        </Link>
        <Link className={styles.carrinho} href={"/carrinho"}>
          Meu carrinho
          {totalItems > 0 && <span> ({totalItems})</span>}
        </Link>
      </nav>
    </header>
  );
}
