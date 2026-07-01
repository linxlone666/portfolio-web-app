import styles from "./Navbar.module.css";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  logoText?: string;
  links?: NavLink[];
  activeHref?: string;
  visitHref?: string;
  visitLabel?: string;
}

const defaultLinks: NavLink[] = [
  { label: "About", href: "#" },
  { label: "Project", href: "#" },
  { label: "Experience", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar({
  logoText = "Top Edge",
  links = defaultLinks,
  activeHref,
  visitHref = "https://github.com/linxlone666/portfolio-web-app",
  visitLabel = "Visit Github",
}: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoBox} aria-hidden="true" />
        <span className={styles.logoText}>{logoText}</span>
      </div>

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={styles.link}
              aria-current={link.href === activeHref ? "page" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={visitHref}
        className={styles.visitBtn}
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles.visitBtnText} data-text={visitLabel}>
          {visitLabel}
        </span>
      </a>
    </nav>
  );
}
