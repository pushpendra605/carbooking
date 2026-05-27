'use client'
import { useState } from 'react'

const BASE = '#'

const routes = ['Bhopal', 'Bhubaneswar', 'Chandigarh', 'Delhi', 'Goa', 'Haridwar', 'Indore', 'Kanpur']

export function PopularRoutes() {
  return (
    <section id="popular_routes" className="pt-100 pb-100 popular-routes">
      <div className="container">
        <h2 className="heading">Popular Route Cabs</h2>
        <div className="routes-grid mt-70">
          {routes.map((city) => (
            <div className="route-item" key={city}>
              <a href={`${BASE}/${city.toLowerCase()}`}>
                <img src={`https://www.bharattaxi.com/assets/svg/taxi.svg`} alt="Taxi" />
                <span>{city}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const pressLogos = [
  `https://www.bharattaxi.com/assets/svg/Hindustan_Times_logo.svg`,
  `https://www.bharattaxi.com/assets/svg/pngegg.svg`,
  `https://www.bharattaxi.com/assets/svg/jagran-logo-freelogovectors.netsvg.svg`,
  `https://www.bharattaxi.com/assets/svg/business-standard-logo.svg`,
]

export function PressRelease() {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container">
        <h2 className="heading">Press Release</h2>
        <div className="press-grid mt-70">
          {[...pressLogos, ...pressLogos].map((src, i) => (
            <img key={i} src={src} alt="Press" />
          ))}
        </div>
      </div>
    </section>
  )
}

const bookingFAQs = [
  { q: 'How Can I Book / Hire A Car From Wizz taxi?', a: 'Booking a car for hiring is very easy in Wizz taxi. You can book a car on rent either online by the search box provided at the home page or you can call us at our 24 X 7 customer care number +91-9696000999.' },
  { q: 'Can I Have The Confirmation Of The Vehicle I Want?', a: 'Yes. A mail will be sent to your mail id you have provided containing the details of vehicle including color, vehicle number and category.' },
  { q: 'Can I Book For Any Period Of Time?', a: 'Yes. Wizz taxi provides our customers a wide range of packages to choose from. From half day booking (limited to 40 kms) to Long term rentals you can book for any period of time.' },
  { q: 'What If I Need To Modify Or Extend My Reservation?', a: 'Please dial +91-9696000999 a 24 X 7 customer care and we will work with you to ensure your schedule is accommodated provided that a vehicle is available at that time.' },
  { q: 'How Do I Cancel A Reservation?', a: 'Reservations can be cancelled from our website or you can call our customer care number +91-9696000999 to cancel your reservation.' },
  { q: 'Do I Need To Register On Wizz taxi Before Booking A Car?', a: 'No. You can use our service fully without the need to register. Only you need to provide your details at the time of booking.' },
]

const paymentFAQs = [
  { q: 'How Can I Pay For My Rental?', a: 'You can pay for your rental by Cash to The Driver.' },
  { q: 'Can I Get A Bill / Copy Of My Payment?', a: 'Yes. After payment you will get a copy of bill duly signed and stamped from our driver.' },
  { q: 'What Is Peak Season? Are The Prices Different During Peak Season?', a: 'Yes. Hourly rates are different during the peak season. But to avoid problems it is suggested by Wizz taxi that you should book in advance.' },
  { q: 'If I Cancel My Reservation, Do I Still Have To Pay?', a: 'There are no charges if you cancel more than 24 hours before booking start time. (Transactional charges will be applicable on customer.)' },
  { q: 'What Modes Of Payments Are Accepted?', a: 'Presently Wizz taxi accepts payment in cash and online with debit card/credit card and wallet which is accepted in our gateway.' },
  { q: 'What Are Other Exclusive Charges Do I Have To Pay?', a: 'For outstation, exclusive charges includes Toll Tax, Parking Charges, Night Allowances (will be applied only after 10 pm).' },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="accordion-item">
      <button className={`accordion-button ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        {faq.q}
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        {faq.a}
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <section className="question-container pt-100 pb-100">
      <div className="container">
        <h3 className="heading">Frequently Asked Questions</h3>
        <div className="faq-cols mt-70">
          <div className="question-wrapper">
            <h5 className="question-title">Bookings</h5>
            {bookingFAQs.map((faq) => <FAQItem key={faq.q} faq={faq} />)}
          </div>
          <div className="question-wrapper">
            <h5 className="question-title">Payments</h5>
            {paymentFAQs.map((faq) => <FAQItem key={faq.q} faq={faq} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

const clients = [
  { src: `https://www.bharattaxi.com/assets/svg/kalyan_logo.svg`, alt: 'Kalyan' },
  { src: `https://www.bharattaxi.com/assets/svg/honda.svg`, alt: 'Honda' },
  { src: `https://www.bharattaxi.com/assets/svg/hdfcbanksvg.svg`, alt: 'HDFC Bank' },
  { src: `https://www.bharattaxi.com/assets/svg/pdilite.svg`, alt: 'Pidilite' },
  { src: `https://www.bharattaxi.com/assets/svg/ey.svg`, alt: 'EY' },
]

export function OurClients() {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container">
        <h2 className="heading">Our Clients</h2>
        <div className="clients-grid mt-70">
          {clients.map((c) => (
            <div className="client-item" key={c.alt}>
              <img src={c.src} alt={c.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer style={{ marginTop: '60px' }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <img src={`https://www.bharattaxi.com/assets/images/logo.svg`} className="heading-logo" alt="Logo" />
            <ul className="footer-list" style={{ marginTop: '24px' }}>
              <li className="email"><a href="tel:+919696000999">+91-9696000999</a></li>
              <li className="email" style={{ marginTop: '8px' }}><a href="mailto:info@bharattaxi.com">info@bharattaxi.com</a></li>
            </ul>
            <div className="social-icon">
              {[
                { href: 'https://www.facebook.com/bharattaxi.taxibharat', icon: `https://www.bharattaxi.com/assets/svg/facebook.svg`, alt: 'Facebook' },
                { href: 'https://www.linkedin.com/company/bharattaxi', icon: `https://www.bharattaxi.com/assets/svg/linkedin.svg`, alt: 'LinkedIn' },
                { href: 'https://x.com/taxibharat', icon: `https://www.bharattaxi.com/assets/svg/twitter-x.svg`, alt: 'Twitter' },
                { href: 'https://www.instagram.com/bharat_taxi/', icon: `https://www.bharattaxi.com/assets/svg/instagram.svg`, alt: 'Instagram' },
                { href: 'https://www.youtube.com/@Bharattaxi-taxi-service', icon: `https://www.bharattaxi.com/assets/svg/youtube.svg`, alt: 'YouTube' },
              ].map((s) => (
                <a key={s.alt} href={s.href} target="_blank" rel="noreferrer">
                  <img src={s.icon} className="footer_icon" alt={s.alt} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h2>Company</h2>
            <ul className="footer-list">
              {[['Terms of Use', '/terms-of-use'], ['Privacy Policy', '/privacy-policy'], ['FAQs', '/faqs'], ['Disclaimer', '/disclaimer'], ['Support', '/support']].map(([label, href]) => (
                <li key={label}><a href={`${BASE}${href}`}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2>Quick Links</h2>
            <ul className="footer-list">
              {[['Services', '/services'], ['Road Trip', '/road-trip'], ['Blog', '/blog/'], ['My Account', '/login'], ['Contact Us', '/contactus']].map(([label, href]) => (
                <li key={label}><a href={`${BASE}${href}`}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h2>Service</h2>
            <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
              {[['Local Rental', '/rental'], ['One Way', '/one-way'], ['Round Trip', '/outstation'], ['Local Transfer', '/local-transfer'], ['Sitemap', '/sitemap']].map(([label, href]) => (
                <li key={label} style={{ marginBottom: '12px' }}><a href={`${BASE}${href}`} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2>Pay Safely with Us</h2>
            <p>The payment is encrypted and transmitted securely with an SSL protocol.</p>
            <div className="newsletter-wrapper">
              <h5>Newsletter Signup</h5>
              <div className="input-wrapper">
                <span className="mail-icon">
                  <img src={`https://www.bharattaxi.com/assets/svg/mail.svg`} alt="mail" />
                </span>
                <input type="email" placeholder="Enter your email" />
                <button id="news-letter-btn" type="button" aria-label="Subscribe">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3327 8L2.66619 8" stroke="#97A0A4" strokeWidth="2" strokeLinecap="square" />
                    <path d="M9.55957 11.7734C9.55957 9.83354 11.268 8 13.3329 8" stroke="#97A0A4" strokeWidth="2" strokeLinecap="square" />
                    <path d="M9.55957 4.22664C9.55957 6.16646 11.268 8 13.3329 8" stroke="#97A0A4" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom_footer">
          <span>© 2026 Wizz taxi. All Rights Reserved.</span>
          <div className="payment-icons">
            {['mastercard', 'visa', 'paypal', 'google-pay', 'ruppay'].map((name) => (
              <img key={name} src={`https://www.bharattaxi.com/assets/svg/${name}.svg`} alt={name} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export function FloatingButtons() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <>
      {/* Enquiry */}
      <div className="enquiry-btn">
        <a href="#" aria-label="Enquiry">
          ENQUIRY
        </a>
      </div>

      {/* WhatsApp */}
      <div className="whatsapp-btn">
        <a href="https://api.whatsapp.com/send?phone=919696000999&text=Hi" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#32D851" />
            <path d="M35.75 32.5C35.5 32.375 33.875 31.625 33.625 31.5C33.375 31.375 33.125 31.375 32.875 31.625C32.625 31.875 32.125 32.625 31.875 32.875C31.75 33.125 31.5 33.125 31.25 33C30.375 32.625 29.5 32.125 28.75 31.5C28.125 30.875 27.5 30.125 27 29.375C26.875 29.125 27 28.875 27.125 28.75C27.25 28.625 27.375 28.375 27.625 28.25C27.75 28.125 27.875 27.875 27.875 27.75C28 27.625 28 27.375 27.875 27.25C27.75 27.125 27.125 25.625 26.875 25C26.75 24.125 26.5 24.125 26.25 24.125H25.625C25.375 24.125 25 24.375 24.875 24.5C24.125 25.25 23.75 26.125 23.75 27.125C23.875 28.25 24.25 29.375 25 30.375C26.375 32.375 28.125 34 30.25 35C30.875 35.25 31.375 35.5 32 35.625C32.625 35.875 33.25 35.875 34 35.75C34.875 35.625 35.625 35 36.125 34.25C36.375 33.75 36.375 33.25 36.25 32.75L35.75 32.5Z" fill="white" />
            <path d="M30 17C23.37 17 17.95 22.42 17.95 29.05C17.95 31.25 18.56 33.3 19.62 35.06L17.5 42.5L25.16 40.42C26.86 41.38 28.87 41.95 31 41.95C37.63 41.95 43.05 36.53 43.05 29.9C43.05 23.27 37.63 17 30 17ZM30 39.95C28.12 39.95 26.35 39.41 24.87 38.47L24.5 38.23L20.5 39.33L21.63 35.47L21.37 35.08C20.27 33.52 19.67 31.64 19.67 29.67C19.67 24.17 24.25 19.67 30 19.67C35.75 19.67 40.33 24.17 40.33 29.67C40.33 35.17 35.75 39.95 30 39.95Z" fill="white" />
          </svg>
        </a>
      </div>

      {/* Back to top */}
      <div className="backtop-btn" onClick={scrollTop} style={{ cursor: 'pointer' }}>
        <svg width="46" height="46" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="black" />
          <path d="M40.5 34.5L31.8561 25.5433C30.8352 24.4856 29.1648 24.4856 28.1439 25.5433L19.5 34.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </>
  )
}
