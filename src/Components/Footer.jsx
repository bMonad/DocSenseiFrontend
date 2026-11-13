import Brand from "./Brand";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="home-footer">
      <Link
        className="footer-brand"
        to="/"
        aria-label="DocSensei home"
      >
        <Brand size="md" />
      </Link>
      <span>A little more clarity, page by page.</span>
    </footer>
  );
}
