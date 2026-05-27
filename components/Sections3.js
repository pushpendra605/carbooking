'use client'

const BASE = '#'

export function DownloadSection() {
  return (
    <section id="download" className="pt-100 download_section">
      <div className="container" style={{ paddingBottom: '0' }}>
        <div className="download-section-inner">
          <div style={{ flex: 1 }}>
            <h6>MOST DOWNLOADED</h6>
            <h2 className="heading_bedore" style={{ color: '#fff', marginTop: '12px', marginBottom: '8px' }}>
              Make Your Travel Easy with<br />Wizz taxi
            </h2>
            <span className="Download_link">Download App Now</span>
            <div className="input_number">
              <div className="country-code">+91</div>
              <input
                type="tel"
                className="download_input"
                placeholder="Enter mobile number"
                maxLength={10}
              />
              <button className="link_btn" type="button">Get App Link</button>
            </div>
            <div className="download-icons">
              <a href="#" target="_blank" rel="noreferrer">
                <img src={`https://www.bharattaxi.com/assets/images/download2.png`} alt="Google Play" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src={`https://www.bharattaxi.com/assets/images/download1.png`} alt="App Store" />
              </a>
            </div>
          </div>
          <div className="app-phones" style={{ flexShrink: 0 }}>
            <img src={`https://www.bharattaxi.com/assets/images/iphone1.png`} className="image2" alt="App Screenshot" style={{ width: '170px', transform: 'translateX(20px)' }} />
            <img src={`https://www.bharattaxi.com/assets/images/iphone2.png`} className="image1" alt="App Screenshot" style={{ width: '150px' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

const destinations = [
  { name: 'Mathura Taxi Service', href: '/mathura', img: `https://www.bharattaxi.com/assets/pages_thumb/Mathura.JPG` },
  { name: 'Taxi Service in Bhopal', href: '/bhopal', img: `https://www.bharattaxi.com/assets/pages_thumb/bhopal-bharattaxi1.jpg` },
  { name: 'Delhi Taxi Service', href: '/delhi', img: `https://www.bharattaxi.com/assets/pages_thumb/BharatTaxiNewDelhiThumb_d4e88030a038be2fbf95b39823e5ed5c.jpg` },
  { name: 'Taxi Service in Goa', href: '/goa', img: `https://www.bharattaxi.com/assets/pages_thumb/goabharattaxithumb_63792c04ecc84011a3da1e2e7cf6820e.jpg` },
  { name: 'Cab Service in Indore', href: '/indore', img: `https://www.bharattaxi.com/assets/pages_thumb/indore-bharattaxi1.jpg` },
  { name: 'Taxi Service in Kolkata', href: '/kolkata', img: `https://www.bharattaxi.com/assets/pages_thumb/kolkata-bharattaxi-Copy.jpg` },
  { name: 'Cab Service in Mangalore', href: '/mangalore', img: `https://www.bharattaxi.com/assets/pages_thumb/mangalore-bharattaxicopy.gif` },
  { name: 'Mumbai Taxi Service', href: '/mumbai', img: `https://www.bharattaxi.com/assets/pages_thumb/Mumbaithumb_3f563820b1ca21faf93310dc095d63ba.jpg` },
  { name: 'Cab Service in Pune', href: '/pune', img: `https://www.bharattaxi.com/assets/pages_thumb/pune-bharattaxicopy.gif` },
  { name: 'Cab Service in Ranchi', href: '/ranchi', img: `https://www.bharattaxi.com/assets/pages_thumb/ranchi-bharattaxi.jpg` },
  { name: 'Taxi Service in Ahmedabad', href: '/ahmedabad', img: `https://www.bharattaxi.com/assets/pages_thumb/ahemdabad-bharattaxi.jpg` },
  { name: 'Cab Service in Ludhiana', href: '/ludhiana', img: `https://www.bharattaxi.com/assets/pages_thumb/ludhiana_bharattaxi.jpg` },
  { name: 'Madurai Taxi Service', href: '/madurai', img: `https://www.bharattaxi.com/assets/pages_thumb/madurai_bharatatxi.jpg` },
  { name: 'Cab Service in Coimbatore', href: '/coimbatore', img: `https://www.bharattaxi.com/assets/pages_thumb/coimbatore_bharattaxi.jpg` },
  { name: 'Cab Service in Patna', href: '/patna', img: `https://www.bharattaxi.com/assets/pages_thumb/patna_bihar.jpg` },
  { name: 'Cab Service in Chennai', href: '/chennai', img: `https://www.bharattaxi.com/assets/pages_thumb/Chennai-bharattaxi.jpg` },
]

export function DestinationsSection() {
  return (
    <section id="Destinations" className="pt-100 pb-100 destionation-section">
      <div className="container">
        <h2 className="heading">Popular Destination</h2>
        <div className="destinations-grid mt-70">
          {destinations.map((dest) => (
            <a key={dest.href} href={`${BASE}${dest.href}`}>
              <div className="dest-card">
                <div className="image-container" style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
                  <img src={dest.img} alt={dest.name} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                  <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                  <div className="carousel-caption" style={{ position: 'absolute', bottom: '15px', right: '15px', left: 'auto', margin: 0 }}>
                    <img src={`https://www.bharattaxi.com/assets/images/Frame.svg`} alt="arrow" style={{ width: '28px', height: '28px' }} />
                  </div>
                </div>
                <div className="dest-card-body" style={{ padding: '15px', textAlign: 'center' }}>
                  <h5 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>{dest.name}</h5>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const customerReviews = [
  { name: 'Ankit Shah', img: `https://www.bharattaxi.com/assets/google-review-img/ankit-shah.png`, stars: 5, text: 'Sumit Sharma (Driver) was helpful & polite. His driving was very perfect. I would recommend. But I would request to Wizz taxi that pricing is very costly so kindly look into it & reduce price.' },
  { name: 'Freaky Vicky', img: `https://www.bharattaxi.com/assets/google-review-img/freaky.png`, stars: 5, text: 'Wizz taxi offers an excellent service with prompt, professional drivers and well-maintained, clean cars. Booking is easy, and their customer support is responsive. Prices are competitive, making it great value for money. A reliable and comfortable choice for travel. Highly recommended!' },
  { name: 'Meezab Siddiqui', img: `https://www.bharattaxi.com/assets/images/rating-image.png`, stars: 5, text: 'Very cooperative and professional driver. We are satisfied with your services will keep in touch for future trips thanks you lucknow. Area manager mr amir shaikh Good behaviour' },
  { name: 'Naga TR', img: `https://www.bharattaxi.com/assets/images/rating-image.png`, stars: 5, text: 'Very reliable and sincere drivers. Clean car. Punctual. Was a pleasure. Will hire their services again. 5 star experience.' },
  { name: 'Hamza imran Khan', img: `https://www.bharattaxi.com/assets/images/rating-image.png`, stars: 5, text: 'Good vehicle conditions and very polite driver no hassle owner is also well behaved and helpful. And Wizz taxi lucknow area manager Mr amir shaikh' },
  { name: 'Amirtekari deeh', img: `https://www.bharattaxi.com/assets/google-review-img/amrit.png`, stars: 5, text: 'Very cooperative and professional driver we are satisfied with your services will keep in touch for our future trips thank you Wizz taxi' },
  { name: 'Sanjeev Windlas', img: `https://www.bharattaxi.com/assets/google-review-img/sanjeev.png`, stars: 4, text: 'It was an excellent experience to travel with Wizz taxi. The booking system is very smooth and drivers were well mannered, punctual and cooperative. I wish to recommend their services to all my friends and family.' },
  { name: 'Gaurav Gamot', img: `https://www.bharattaxi.com/assets/google-review-img/gorav-gomat.png`, stars: 5, text: 'Very good Service by Wizz taxi and their team specially by Mr Amir and His Driver.' },
]

const driverReviews = [
  { name: 'Vishal Kulkarni', img: `https://www.bharattaxi.com/assets/images/rating-image.png`, stars: 3, text: 'Ravi was a polite and friendly driver. The car was well-maintained, and he knew the route well. However, he was about 15 minutes late for the pickup, which was a little frustrating.' },
  { name: 'Tushar Yadav', img: `https://www.bharattaxi.com/assets/images/rating-image.png`, stars: 5, text: 'Sumit was the driver for my family\'s outstation trip. He was very helpful and his driving was perfect. He was polite and cooperative throughout the entire journey. We felt very safe and comfortable.' },
  { name: 'Shashank Srivastava', img: `https://www.bharattaxi.com/assets/images/rating-image.png`, stars: 5, text: 'A very cooperative and professional driver. Kamaljeet handled the entire trip with great care and attention to detail. We will definitely be using Wizz taxi for future trips.' },
  { name: 'Nitin Singh', img: `https://www.bharattaxi.com/assets/images/rating-image.png`, stars: 4, text: 'Aman was our driver for a local city tour. He was knowledgeable about the city and even suggested some good places to eat. Overall, a good experience.' },
]

function StarRating({ count }) {
  return (
    <div className="rating-star">
      {[1, 2, 3, 4, 5].map(i => (
        <img key={i}
          src={i <= count ? `https://www.bharattaxi.com/assets/svg/active-star.svg` : `https://www.bharattaxi.com/assets/svg/star.svg`}
          alt="★"
        />
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="carousel-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <StarRating count={review.stars} />
      <div className="rating-text" style={{ flex: 1 }}>
        <p>{review.text}</p>
      </div>
      <div className="rating-image-wrapper">
        <img src={review.img} className="rating-user-image" alt={review.name} />
        <div>
          <p className="rating-user-name" style={{ marginBottom: 0 }}>{review.name}</p>
        </div>
      </div>
    </div>
  )
}

export function CustomerReviews() {
  return (
    <section className="rating-container pt-100 pb-100">
      <div className="container">
        <h3 className="heading">Customer Reviews</h3>
        <div className="reviews-grid mt-70">
          {customerReviews.map((r) => <ReviewCard key={r.name} review={r} />)}
        </div>
      </div>
    </section>
  )
}

export function DriverReviews() {
  return (
    <section className="rating-container pt-100 pb-100">
      <div className="container">
        <h3 className="heading">Driver Reviews</h3>
        <div className="reviews-grid mt-70">
          {driverReviews.map((r) => <ReviewCard key={r.name} review={r} />)}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const steps = [
    { icon: `https://www.bharattaxi.com/assets/images/how3.svg`, title: 'Search Car', desc: 'Search for nearby cabs, set your route, and book a ride in just a few taps.' },
    { icon: `https://www.bharattaxi.com/assets/images/how4.svg`, title: 'Choose Car', desc: 'Choose your own cab, driver, and payment option for a smooth ride.' },
    { icon: `https://www.bharattaxi.com/assets/images/how1.svg`, title: 'Enjoy the Ride', desc: 'Track your ride in real-time and enjoy a smooth, stress-free journey.' },
  ]
  return (
    <section id="how_work" className="pt-100 pb-50" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="heading mb-70">How It Works?</h2>
        <div className="how-grid" style={{ marginTop: '60px' }}>
          {steps.map((step) => (
            <div className="white_bg" key={step.title}>
              <div id="topdiv" />
              <div id="bottomdiv" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90px', background: '#f0f6ff', position: 'relative' }}>
                <div className="circle">
                  <img src={step.icon} alt={step.title} />
                </div>
                <div id="halfcircle" style={{ position: 'absolute', bottom: '-20px', width: '60px', height: '30px', background: '#fff', borderRadius: '30px 30px 0 0' }} />
              </div>
              <div style={{ textAlign: 'center', padding: '36px 16px 20px' }}>
                <h6 className="serach_bottom">{step.title}</h6>
                <p className="circle_p" style={{ marginTop: '8px' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
