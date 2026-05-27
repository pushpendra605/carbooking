'use client'

const BASE = '#'

export function MarqueeSection() {
  const imgs = Array(8).fill(`https://www.bharattaxi.com/assets/images/marqueetext2.svg`)
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {imgs.map((src, i) => (
          <img key={i} src={src} alt="Bharat Taxi" />
        ))}
        {imgs.map((src, i) => (
          <img key={`dup-${i}`} src={src} alt="Bharat Taxi" />
        ))}
      </div>
    </div>
  )
}

const cities = [
  { name: 'Hyderabad', img: `https://www.bharattaxi.com/assets/pages_thumb/hydarabad-bharattaxi-Copy_b9d4af483463a9c0d258947da79f4cbb.jpg`, href: `${BASE}/hyderabad`, alt: 'Hyderabad Cab Service' },
  { name: 'Lucknow', img: `https://www.bharattaxi.com/assets/pages_thumb/Lucknow01_2d76f7eff2bf481876ed4d53df588576.jpg`, href: `${BASE}/lucknow`, alt: 'Lucknow Cab Service' },
  { name: 'Varanasi', img: `https://www.bharattaxi.com/assets/pages_thumb/bharattaxi-varanasi1_fa09824aa6ac54441a8f875290fc6009.jpg`, href: `${BASE}/varanasi`, alt: 'Varanasi Cab Service' },
  { name: 'Bangalore', img: `https://www.bharattaxi.com/assets/pages_thumb/bangalore-bharattaxi1_14e724e32871e9581c709054035a937d.jpg`, href: `${BASE}/bangalore`, alt: 'Bangalore Cab Service' },
  { name: 'Chandigarh', img: `https://www.bharattaxi.com/assets/pages_thumb/chandigarh-bharattaxi1_1c3a359a647005983f0a3ae204a4eb12.jpg`, href: `${BASE}/chandigarh`, alt: 'Chandigarh Cab Service' },
  { name: 'Delhi', img: `https://www.bharattaxi.com/assets/pages_thumb/BharatTaxiNewDelhiThumb_d4e88030a038be2fbf95b39823e5ed5c.jpg`, href: `${BASE}/delhi`, alt: 'Delhi Cab Service' },
]

export function ServicesSection() {
  return (
    <section id="services" className="pt-100 pb-100 service-section bg-light-grey">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">Our Services in Major Cities</h2>
          <span className="explore d-lg-block d-none">
            <a href={`${BASE}/explorecities`}>EXPLORE MORE</a>
          </span>
        </div>
        <div className="city-grid mt-70">
          {cities.map((city) => (
            <a key={city.name} href={city.href}>
              <div className="image-container">
                <img src={city.img} alt={city.alt} />
                <div className="overlay" />
                <div className="carousel-caption">
                  <h5>{city.name}</h5>
                  <img src={`https://www.bharattaxi.com/assets/images/Frame.svg`} alt="arrow" />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '32px' }}>
          <a href={`${BASE}/explorecities`} className="register-btn" style={{ color: '#007BFF', border: '1px solid #007BFF', padding: '10px 28px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', display: 'inline-block' }}>Explore More</a>
        </div>
      </div>
    </section>
  )
}

const offers = [
  { img: `https://www.bharattaxi.com/assets/images/offer.png`, title: 'Kerala Special: Get Flat 10% OFF* on Cab Bookings', valid: 'Valid till: 31st July, 2024 | T&C Apply' },
  { img: `https://www.bharattaxi.com/assets/images/offer2.png`, title: 'For Your First Booking with us here\'s an exclusive offer!', valid: 'T&C Apply' },
  { img: `https://www.bharattaxi.com/assets/images/offer3.png`, title: 'Kerala Special: Get Flat 10% OFF* on Cab Bookings', valid: 'Valid till: 31st July, 2024 | T&C Apply' },
  { img: `https://www.bharattaxi.com/assets/images/offer.png`, title: 'Kerala Special: Get Flat 10% OFF* on Cab Bookings', valid: 'Valid till: 31st July, 2024 | T&C Apply' },
]

export function OffersSection() {
  return (
    <section id="offers" className="pt-100 pb-100 offer-section bg-light-grey">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">Offers</h2>
          <span className="explore">
            <a href={`${BASE}/offers`}>EXPLORE MORE</a>
          </span>
        </div>
        <div className="offers-grid mt-70">
          {offers.map((offer, i) => (
            <div className="offer-card" key={i}>
              <img src={offer.img} className="card_img" alt="Offer" />
              <div className="card-body">
                <h5 className="card_title">{offer.title}</h5>
                <span className="validate">{offer.valid}</span>
                <div className="dotted-border" style={{ marginTop: '10px', marginBottom: '8px' }} />
                <a href={`${BASE}/offers/details`}>
                  <div className="view_more">
                    View More Details
                    <img src={`https://www.bharattaxi.com/assets/images/viewarrow.svg`} alt="Arrow" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
