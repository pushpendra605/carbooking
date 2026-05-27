'use client'

const BASE = '#'

export function StoreReviews() {
  return (
    <section style={{ background: '#fff', padding: '50px 0' }}>
      <div className="container">
        <div className="store-reviews-grid">
          {[
            { icon: `https://www.bharattaxi.com/assets/svg/Google.svg`, name: 'Google', count: '12022 Review' },
            { icon: `https://www.bharattaxi.com/assets/svg/playstore.svg`, name: 'Play Store', count: '3222 Review' },
            { icon: `https://www.bharattaxi.com/assets/svg/appstore.svg`, name: 'App Store', count: '5444 Review' },
          ].map((store) => (
            <div className="store-review-item" key={store.name}>
              <img src={store.icon} className="store-icon" alt={store.name} />
              <div>
                <span className="google_text">{store.name}</span>
                <div className="stars">
                  {[1, 2, 3, 4].map(i => <img key={i} src={`https://www.bharattaxi.com/assets/svg/yellowstar.svg`} alt="★" />)}
                  <img src={`https://www.bharattaxi.com/assets/svg/Star2.svg`} alt="★" />
                </div>
                <span className="review_text">({store.count})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  { icon: `https://www.bharattaxi.com/assets/images/f1.svg`, title: '100+ Destinations', desc: 'Travel to 100+ destinations effortlessly—book rides with us for convenience, safety, and great fares!' },
  { icon: `https://www.bharattaxi.com/assets/images/f2.svg`, title: '50000+ Happy Clients', desc: 'With 50,000+ happy customers, enjoy reliable rides and unmatched convenience with our app!' },
  { icon: `https://www.bharattaxi.com/assets/images/f3.svg`, title: 'Best Price Guarantee', desc: 'Ride smart and save big! Our Best Price Guarantee ensures you get the lowest fares every time.' },
  { icon: `https://www.bharattaxi.com/assets/images/f4.svg`, title: '24X7 Support', desc: 'Choose us for 24X7 support—your safety and convenience are our top priorities, day or night!' },
]

export function WhyChoose() {
  return (
    <section id="why_choose" className="pt-100 pb-100 why_choose">
      <div className="container">
        <h2 className="heading">Why Choose Wizz taxi?</h2>
        <div className="features-grid mt-70">
          {features.map((f) => (
            <div className="test_bg" key={f.title}>
              <img src={f.icon} alt={f.title} />
              <h6>{f.title}</h6>
              <span>{f.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TaxiIndia() {
  return (
    <section id="taxi_india" className="taxi_india pt-100 pb-100">
      <div className="dotted_bg" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h1 className="heading_bedore" style={{ textTransform: 'uppercase' }}>Wizz taxi- Taxi Service in India</h1>
              <p style={{ marginTop: '16px', color: '#555', lineHeight: '1.7', fontSize: '0.9rem' }}>
                We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of vehicles.
              </p>
              <div style={{ marginTop: '16px' }}>
                <p className="p_bold">We are India's largest provider, with more facilities</p>
                <p className="p_bold">You get 24/7 roadside assistance</p>
                <p className="p_bold">We fix 4 out of 5 cars at the roadside</p>
              </div>
              <a className="btn bg-primary-btn" href={`${BASE}/taxi-service`} style={{ display: 'inline-block', marginTop: '20px' }}>
                Explore Taxi Services
              </a>
            </div>
            <div className="taxi-images">
              <div className="img-stack">
                <img src={`https://www.bharattaxi.com/assets/images/service1.png`} className="img1" alt="Service" />
                <img src={`https://www.bharattaxi.com/assets/images/service2.png`} className="img2" alt="Service" loading="lazy" style={{ borderRadius: '12px', height: '130px', objectFit: 'cover' }} />
              </div>
              <img src={`https://www.bharattaxi.com/assets/images/service3.png`} className="service3-img" alt="Service" />
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          #taxi_india .taxi-images { display: none; }
          #taxi_india > div > div > div { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </section>
  )
}

export function UniqueSection() {
  return (
    <section style={{ background: '#f8f9fa', padding: '80px 0' }}>
      <div className="container">
        <h2 className="heading">What Makes Wizz taxi Unique?</h2>
        <div className="unique-grid mt-70">
          {[
            { icon: `https://www.bharattaxi.com/assets/svg/cab_hygene.svg`, label: 'Cab Hygiene' },
            { icon: `https://www.bharattaxi.com/assets/svg/billingpractice.svg`, label: 'Billing Practices' },
            { icon: `https://www.bharattaxi.com/assets/svg/expertdriver.svg`, label: 'Expert Drivers' },
          ].map((item) => (
            <div className="unique-item" key={item.label}>
              <img src={item.icon} alt={item.label} />
              <span className="unique_text">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
