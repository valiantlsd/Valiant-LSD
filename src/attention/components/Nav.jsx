import { navItems } from "../content/siteContent.js";
import { Button } from "./Button.jsx";
import { LogoMark } from "./LogoMark.jsx";

export function Nav() {
  return (
    <header className="nav attention-nav">
      <a className="brand attention-brand" href="/">
        <LogoMark className="brand-logo attention-brand-logo" />
        <span className="attention-brand-copy">
          <strong className="attention-brand-title">Attention Mastery</strong>
          <small className="attention-brand-subtitle">by Valiant Lifestyle Design</small>
        </span>
      </a>
      <nav className="attention-nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions attention-nav-actions">
        <Button href="/" variant="small">
          Home
        </Button>
        <Button href="#book" variant="small">
          Book
        </Button>
      </div>
    </header>
  );
}
