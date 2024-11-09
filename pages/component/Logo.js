import React from "react";
import styles from "@/styles/Logo.module.css";

function Logo() {
  return (
    <span className={`${styles["logo-text"]}`}>
      <span className={`${styles["logo-text-2"]}`}>Blog</span> Hub
    </span>
  );
}

export default Logo;
