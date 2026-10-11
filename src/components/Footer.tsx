export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-layout">
        <a className="brand-mark" href="#home" aria-label="Back to top">ES<span>.</span></a>
        <p>Designed &amp; built by Elissa Sibomana</p>
        <a href="#home" className="footer-top-link">Back to top ↑</a>
        <span className="footer-copyright">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
