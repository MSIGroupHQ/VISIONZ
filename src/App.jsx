import React, { useEffect, useState } from 'react'
import logoWhite from './assets/logo-white.png'
import logoBlack from './assets/logo-black.png'
import shorts from './assets/shorts.png'
import lookbook from './assets/lookbook.png'

const CHECKOUT = 'https://buy.stripe.com/9B6dRbdwXbVGglndXr9AA0Y'

const TITLES = {
  '/': 'VISIONZ — SEE BEYOND',
  '/shop': 'Shop — VISIONZ',
  '/product/see-beyond-shorts-noir': 'See Beyond Shorts — VISIONZ',
  '/lookbook': 'Lookbook — VISIONZ',
  '/about': 'About — VISIONZ',
  '/shipping': 'Shipping — VISIONZ',
  '/returns': 'Returns — VISIONZ',
  '/privacy': 'Privacy — VISIONZ',
  '/terms': 'Terms — VISIONZ'
}

function cleanPath(path) {
  const p = path.length > 1 ? path.replace(/\/$/, '') : path
  return TITLES[p] ? p : '/'
}

function Link({ to, children, className = '' }) {
  const go = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    history.pushState({}, '', to)
    dispatchEvent(new PopStateEvent('popstate'))
    scrollTo({ top: 0, behavior: 'auto' })
  }
  return <a href={to} className={className} onClick={go}>{children}</a>
}

function Logo({ dark = false, className = '' }) {
  return <img className={`brand-logo ${className}`} src={dark ? logoBlack : logoWhite} alt="" aria-hidden="true" draggable="false" />
}

function Header() {
  return <header className="site-header">
    <nav className="nav-shell" aria-label="Primary">
      <Link to="/" className="nav-logo" aria-label="Home"><Logo /></Link>
      <div className="nav-links desktop"><Link to="/lookbook">LOOKBOOK</Link><Link to="/about">ABOUT</Link></div>
      <Link to="/shop" className="nav-shop">SHOP ↗</Link>
    </nav>
  </header>
}

function Footer() {
  return <footer className="site-footer">
    <div className="footer-mark"><Logo /></div>
    <div className="footer-grid">
      <div><b>SHOP</b><Link to="/shop">Shop</Link><Link to="/product/see-beyond-shorts-noir">See Beyond Shorts</Link><Link to="/lookbook">Lookbook</Link></div>
      <div><b>SUPPORT</b><Link to="/shipping">Shipping</Link><Link to="/returns">Returns</Link></div>
      <div><b>LEGAL</b><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div>
    </div>
    <div className="footer-bottom"><span>© 2026</span><span>SEE BEYOND.</span></div>
  </footer>
}

function Home() {
  return <main>
    <section className="hero">
      <div className="hero-inner"><Logo className="hero-logo" /><Link to="/shop" className="hero-shop">SHOP ↗</Link></div>
    </section>

    <section className="lookbook-hero">
      <img src={lookbook} alt="Black hoodie and pants lookbook" />
      <Link to="/lookbook" className="lookbook-link">LOOKBOOK ↗</Link>
    </section>

    <section className="product-feature paper">
      <Link to="/product/see-beyond-shorts-noir" className="product-image"><img src={shorts} alt="Black mesh shorts, front and back" /></Link>
      <div className="product-copy">
        <h1>SEE BEYOND<br/>SHORTS</h1>
        <div className="product-meta"><span>$225.00</span><span>S / M / L / XL</span></div>
        <p>Double-layered 100% poly mesh. Embroidered orbital mark and twin-star detail. Made in Glendale, Arizona.</p>
        <Link to="/product/see-beyond-shorts-noir" className="text-rail dark"><span>VIEW PRODUCT</span><span>↗</span></Link>
      </div>
    </section>

    <section className="statement">
      <h2>TWO VISIONS.<br/>ONE DESTINATION.</h2>
      <p>THE VISION YOU HAVE TODAY.<br/>THE VISION YOU SEE TOMORROW.<br/>FOCUS. WORK. ELEVATE.<br/>SEE BEYOND.</p>
    </section>
  </main>
}

function Shop() {
  return <main className="page paper shop-page">
    <div className="shop-grid">
      <Link to="/product/see-beyond-shorts-noir" className="shop-image"><img src={shorts} alt="Black mesh shorts, front and back" /></Link>
      <div className="shop-info">
        <h1>SEE BEYOND<br/>SHORTS</h1>
        <div className="shop-price">$225.00</div>
        <p>S / M / L / XL</p>
        <Link to="/product/see-beyond-shorts-noir" className="text-rail dark"><span>VIEW PRODUCT</span><span>↗</span></Link>
      </div>
    </div>
  </main>
}

function Product() {
  const [size, setSize] = useState('M')
  return <main className="product-page">
    <div className="gallery"><img src={shorts} alt="Black mesh shorts, front and back" /></div>
    <section className="product-panel">
      <h1>SEE BEYOND<br/>SHORTS</h1>
      <div className="product-price">$225.00</div>
      <p>Double-layered 100% poly mesh. Embroidered orbital mark and twin-star detail. Made in Glendale, Arizona.</p>
      <fieldset><legend>SIZE</legend><div className="sizes">{['S','M','L','XL'].map(s => <button type="button" key={s} className={s === size ? 'selected' : ''} aria-pressed={s === size} onClick={() => setSize(s)}>{s}</button>)}</div></fieldset>
      <a className="checkout" href={CHECKOUT} target="_blank" rel="noopener noreferrer">CHECK OUT ↗</a>
      <p className="note">Selected size: {size}. Choose the matching size again in Stripe Checkout.</p>
      <div className="facts"><div><span>COLOR</span><span>NOIR</span></div><div><span>ORIGIN</span><span>GLENDALE, ARIZONA</span></div><div><span>MATERIAL</span><span>100% POLY MESH</span></div></div>
    </section>
  </main>
}

function Lookbook() {
  return <main className="page lookbook-page">
    <div className="lookbook-frame"><img src={lookbook} alt="Black hoodie and pants lookbook" /></div>
    <div className="lookbook-copy"><Logo /><p>SEE BEYOND.</p></div>
  </main>
}

function About() {
  return <main className="page about-page">
    <Logo className="about-logo" />
    <div><h1>TWO VISIONS.<br/>ONE DESTINATION.</h1><p>THE VISION YOU HAVE TODAY.<br/>THE VISION YOU SEE TOMORROW.<br/>FOCUS. WORK. ELEVATE.<br/>SEE BEYOND.</p></div>
  </main>
}

const POLICY = {
  '/shipping': ['SHIPPING.','Available shipping options, destination eligibility, and the final order total are shown during checkout before payment.'],
  '/returns': ['RETURNS.','Contact support before sending merchandise back. Return eligibility and item-condition requirements must be confirmed before a return is accepted.'],
  '/privacy': ['PRIVACY.','Payment details are processed by Stripe. Order and contact information may be used for fulfillment, customer support, fraud prevention, security, and legal obligations. Payment-card data does not pass through this website.'],
  '/terms': ['TERMS.','Orders are accepted after successful payment and inventory confirmation. Product imagery, marks, and editorial material remain protected brand assets.']
}

function Policy({ path }) {
  const [title, body] = POLICY[path]
  return <main className="page policy"><h1>{title}</h1><p>{body}</p></main>
}

function App() {
  const [path, setPath] = useState(() => cleanPath(location.pathname))
  useEffect(() => {
    const change = () => setPath(cleanPath(location.pathname))
    addEventListener('popstate', change)
    return () => removeEventListener('popstate', change)
  }, [])
  useEffect(() => { document.title = TITLES[path] }, [path])

  let page = <Home />
  if (path === '/shop') page = <Shop />
  else if (path === '/product/see-beyond-shorts-noir') page = <Product />
  else if (path === '/lookbook') page = <Lookbook />
  else if (path === '/about') page = <About />
  else if (POLICY[path]) page = <Policy path={path} />

  return <><Header />{page}<Footer /></>
}

export default App
