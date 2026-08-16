import React, { useEffect, useState } from 'react'

const CHECKOUT = 'https://buy.stripe.com/9B6dRbdwXbVGglndXr9AA0Y'
const A = '/assets/'

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

function Link({ to, children, className = '', onClick }) {
  const go = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    history.pushState({}, '', to)
    dispatchEvent(new PopStateEvent('popstate'))
    onClick?.()
    scrollTo({ top: 0, behavior: 'auto' })
  }
  return <a href={to} className={className} onClick={go}>{children}</a>
}

function Logo({ dark = false, className = '' }) {
  return <img className={`brand-logo ${className}`} src={`${A}${dark ? 'visionz-logo-black.webp' : 'visionz-logo-white.webp'}`} alt="VISIONZ" draggable="false" />
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = () => setOpen(false)
    addEventListener('popstate', close)
    return () => removeEventListener('popstate', close)
  }, [])
  return <header className="site-header">
    <nav className="nav-shell" aria-label="Primary">
      <div className="nav-side nav-left desktop"><Link to="/lookbook">LOOKBOOK</Link><Link to="/about">ABOUT</Link></div>
      <Link to="/" className="nav-logo" aria-label="VISIONZ home"><Logo /></Link>
      <div className="nav-side nav-right desktop"><Link to="/shop">SHOP</Link><Link to="/product/see-beyond-shorts-noir" className="nav-action">SEE BEYOND SHORTS</Link></div>
      <button className="menu-button" type="button" aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? 'CLOSE' : 'MENU'}</button>
    </nav>
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      <Link to="/shop">SHOP</Link><Link to="/lookbook">LOOKBOOK</Link><Link to="/about">ABOUT</Link><Link to="/shipping">SHIPPING</Link><Link to="/returns">RETURNS</Link>
    </div>
  </header>
}

function Footer() {
  return <footer className="site-footer">
    <Logo className="footer-logo" />
    <div className="footer-grid">
      <div><b>VISIONZ</b><p>TWO VISIONS.<br/>ONE DESTINATION.</p></div>
      <div><b>SHOP</b><Link to="/shop">Current release</Link><Link to="/product/see-beyond-shorts-noir">See Beyond Shorts</Link><Link to="/lookbook">Lookbook</Link></div>
      <div><b>SUPPORT</b><Link to="/shipping">Shipping</Link><Link to="/returns">Returns</Link><a href="mailto:ops@prime88.studio">Contact</a></div>
      <div><b>LEGAL</b><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><p>Mediator Solutions LLC<br/>Arizona, USA</p></div>
    </div>
    <div className="footer-bottom"><span>© 2026 VISIONZ</span><span>SEE BEYOND.</span><span>PAYMENTS PROCESSED BY STRIPE</span></div>
  </footer>
}

function Home() {
  return <main>
    <section className="hero">
      <Logo className="hero-mark" />
      <div className="hero-copy"><small>VISIONZ / COLLECTION 001</small><h1>SEE<br/>BEYOND.</h1><p>TWO VISIONS. ONE DESTINATION.</p><Link to="/shop" className="rail"><span>SHOP THE RELEASE</span><span>↘</span></Link></div>
    </section>
    <section className="release paper">
      <div className="section-rail"><span>01 / CURRENT RELEASE</span><span>LIMITED / NOIR</span></div>
      <div className="release-grid">
        <Link to="/product/see-beyond-shorts-noir" className="product-photo"><img src={`${A}see-beyond-shorts-noir.webp`} alt="VISIONZ See Beyond Shorts, front and back" /></Link>
        <div className="release-copy"><small>SEE BEYOND / NOIR</small><h2>SEE BEYOND<br/>SHORTS.</h2><div className="price"><span>$225</span><span>S / M / L / XL</span></div><p>Double-layered 100% poly mesh with embroidered VISIONZ orbital mark and twin-star detail. Made in Glendale, Arizona. Limited edition of 94.</p><Link to="/product/see-beyond-shorts-noir" className="rail dark"><span>VIEW PRODUCT</span><span>↗</span></Link></div>
      </div>
    </section>
    <section className="statement">
      <div className="statement-photo"><img src={`${A}visionz-lookbook-dark.webp`} alt="VISIONZ dark lookbook styling" /></div>
      <div className="statement-copy"><small>02 / POSITION</small><h2>TWO VISIONS.<br/>ONE DESTINATION.</h2><p>THE VISION YOU HAVE TODAY.<br/>THE VISION YOU SEE TOMORROW.<br/>FOCUS. WORK. ELEVATE.<br/>SEE BEYOND.</p><Link to="/lookbook" className="rail"><span>OPEN LOOKBOOK</span><span>↘</span></Link></div>
    </section>
    <section className="mark-strip paper"><div><small>03 / MARK</small><Logo dark /></div><img src={`${A}visionz-hoodie-back.webp`} alt="VISIONZ hoodie back graphic" /></section>
  </main>
}

function Shop() {
  return <main className="page paper"><header className="page-head"><small>SHOP / CURRENT</small><h1>RELEASE 001.</h1><p>One confirmed release is currently wired for purchase.</p></header><div className="product-row"><Link to="/product/see-beyond-shorts-noir"><img src={`${A}see-beyond-shorts-noir.webp`} alt="See Beyond Shorts — Noir" /></Link><div><small>NOIR / LIMITED 94</small><h2>SEE BEYOND SHORTS</h2><p className="large-price">$225.00</p><Link to="/product/see-beyond-shorts-noir" className="rail dark"><span>VIEW</span><span>↗</span></Link></div></div><aside className="archive-note"><small>ARCHIVE / LOOKBOOK</small><p>Additional VISIONZ pieces appear in the lookbook. They are not presented as purchasable until inventory and pricing are confirmed.</p></aside></main>
}

function Product() {
  const [size, setSize] = useState('M')
  return <main className="product-page"><div className="gallery"><img src={`${A}see-beyond-shorts-noir.webp`} alt="See Beyond Shorts — Noir, front and back" /><div className="gallery-mark"><Logo /></div></div><section className="product-panel"><small>VISIONZ / 001 / NOIR</small><h1>SEE BEYOND<br/>SHORTS.</h1><div className="product-price">$225.00</div><p>Double-layered 100% poly mesh. Embroidered VISIONZ orbital mark and twin-star detail. Made in Glendale, Arizona. Limited edition of 94 units.</p><fieldset><legend>SIZE</legend><div className="sizes">{['S','M','L','XL'].map(s => <button type="button" key={s} className={s === size ? 'selected' : ''} aria-pressed={s === size} onClick={() => setSize(s)}>{s}</button>)}</div></fieldset><a className="checkout" href={CHECKOUT} target="_blank" rel="noopener noreferrer">BUY WITH STRIPE ↗</a><p className="note">Selected here: {size}. Choose the matching size again in Stripe Checkout. U.S. shipping address is collected securely.</p><div className="facts"><div><span>COLOR</span><span>NOIR</span></div><div><span>EDITION</span><span>94</span></div><div><span>ORIGIN</span><span>GLENDALE, ARIZONA</span></div><div><span>MATERIAL</span><span>100% POLY MESH</span></div></div></section></main>
}

function Lookbook() {
  const items = [
    ['visionz-lookbook-dark.webp','01 / DARK STUDY','Black VISIONZ styling'],
    ['visionz-hoodie-back.webp','02 / BACK MARK','VISIONZ hoodie back graphic'],
    ['see-beyond-shorts-noir.webp','03 / RELEASE 001','See Beyond Shorts front and back']
  ]
  return <main className="page lookbook"><header className="lookbook-head"><div><small>VISIONZ / LOOKBOOK</small><h1>SEE BEYOND.</h1></div><Logo /></header><div className="lookbook-rail">{items.map(([src,label,alt]) => <figure key={src}><div><img src={`${A}${src}`} alt={alt}/></div><figcaption><span>{label}</span><span>VISIONZ</span></figcaption></figure>)}</div></main>
}

function About() {
  return <main className="page manifesto"><Logo className="manifesto-mark"/><small>VISIONZ / MANIFESTO</small><h1>TWO VISIONS.<br/>ONE DESTINATION.</h1><p>THE VISION YOU HAVE TODAY.<br/>THE VISION YOU SEE TOMORROW.<br/>FOCUS. WORK. ELEVATE.<br/>SEE BEYOND.</p></main>
}

const POLICY = {
  '/shipping': ['SHIPPING.','VISIONZ currently ships physical merchandise from Arizona. Available shipping options, destination eligibility, and the final order total are shown during checkout before payment.'],
  '/returns': ['RETURNS.','Contact support before sending merchandise back. Release-specific eligibility and item-condition requirements must be confirmed before a return is accepted. No return window is stated here until an operator-approved policy is locked.'],
  '/privacy': ['PRIVACY.','Payment details are processed by Stripe. Order and contact information may be used for fulfillment, customer support, fraud prevention, accounting, security, and legal obligations. VISIONZ does not require payment-card data to pass through this website.'],
  '/terms': ['TERMS.','VISIONZ commerce is operated by Mediator Solutions LLC in Arizona, USA. Orders are accepted after successful payment and inventory confirmation. Product imagery, marks, and editorial material remain protected brand assets.']
}

function Policy({ path }) {
  const [title, body] = POLICY[path]
  return <main className="page policy"><small>VISIONZ / SUPPORT & LEGAL</small><h1>{title}</h1><p>{body}</p></main>
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
