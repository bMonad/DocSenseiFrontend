import Brand from "../Brand";

export default function Footer() {
  return (
    <footer className="home-footer">
      <a className="footer-brand" href="#" aria-label="DocSensei home">
        <Brand size="md" />
      </a>
      <span>A little more clarity, page by page.</span>
    </footer>
  );
}
