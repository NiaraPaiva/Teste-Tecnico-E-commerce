"use client";

import { useCart } from "@/context/CarrinhoContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./carrinho.module.css";

export default function CarrinhoPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main>
        <div className={styles.emptyContainer}>
          <h1>Seu carrinho está vazio!</h1>
          <Link href="/">
            <button className={styles.emptyButton}>Continuar comprando</button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1 className={styles.titulo}>Meu Carrinho</h1>
      <div className={styles.container}>
        {/* Lista de itens */}
        <ul className={styles.itemList}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.imageContainer}>
                <Image
                  src={
                    item.image?.startsWith("http")
                      ? item.image
                      : "/placeholder.jpg"
                  }
                  alt={item.title}
                  fill
                  sizes="80px"
                />
              </div>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemPrice}>R$ {item.price.toFixed(2)}</p>
                <div className={styles.quantityArea}>
                  <label className={styles.quantityLabel}>
                    Qtd:
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className={styles.quantityInput}
                    />
                  </label>
                  <button
                    onClick={() => removeItem(item.id)}
                    className={styles.removeButton}
                    aria-label="Remover produto do carrinho"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className={styles.resumo}>
          <h2>Resumo do Pedido</h2>
          <div className={styles.total}>Total: R$ {totalPrice.toFixed(2)}</div>
          <button className={styles.checkoutButton}>Finalizar compra</button>
        </aside>
      </div>
    </main>
  );
}
