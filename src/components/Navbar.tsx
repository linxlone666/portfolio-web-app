import { useState } from "react";
import styles from "./Navbar.module.css";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  logoText?: string;
  links?: NavLink[];
  visitHref?: string;
  visitLabel?: string;
}

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({
  logoText = "Logo",
  links = defaultLinks,
  visitHref = "/",
  visitLabel = "Visit",
}: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>{logoText}</div>

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a href={visitHref} className={styles.visitBtn}>
        {visitLabel}
      </a>
    </nav>
  );
}
