import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav" data-testid="nav">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}