"use client";

import Link from "next/link";
import React from "react";
import styles from "./btn-map.module.css";

export function BtnMap() {
  return (
    <div className={styles.map}>
      <Link href="/map" className={styles.link}>
        ¿Qué tan cerca estás de San Luis de Gaceno?
      </Link>
    </div>
  );
}
