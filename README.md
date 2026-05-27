# Bharat Taxi - Next.js Static Website

Yeh bharattaxi.com ka Next.js conversion hai. Saare sections same hain jaise original website pe.

## Sections Include:
- ✅ Header with navigation (desktop + mobile)
- ✅ Hero booking form (5 tabs: Local Rental, One Way, Round Trip, Road Trip, Local Transfer)
- ✅ Marquee scrolling text
- ✅ Our Services in Major Cities
- ✅ Offers section
- ✅ Google/PlayStore/AppStore reviews
- ✅ Why Choose Bharat Taxi (4 features)
- ✅ Bharat Taxi Service section
- ✅ What Makes Bharat Taxi Unique
- ✅ Download App section
- ✅ Popular Destinations (16 cities)
- ✅ Customer Reviews
- ✅ Driver Reviews
- ✅ How It Works
- ✅ Popular Route Cabs
- ✅ Press Release
- ✅ FAQ (Bookings + Payments)
- ✅ Our Clients
- ✅ Footer with newsletter
- ✅ Floating buttons (Enquiry, WhatsApp, Back to top)

## Setup & Run

```bash
# Dependencies install karo
npm install

# Development server chalao
npm run dev

# Browser mein open karo: http://localhost:3000
```

## Build for Production

```bash
npm run build
# Static files 'out/' folder mein milenge
```

## Project Structure

```
Wizz cabs/
├── app/
│   ├── page.js          # Main page
│   ├── layout.js        # Root layout + metadata
│   └── globals.css      # All CSS styles
├── components/
│   ├── Header.js        # Navigation header
│   ├── HeroSection.js   # Booking forms
│   ├── Sections1.js     # Marquee, Services, Offers
│   ├── Sections2.js     # StoreReviews, WhyChoose, TaxiIndia, Unique
│   ├── Sections3.js     # Download, Destinations, Reviews, HowItWorks
│   └── Sections4.js     # Routes, Press, FAQ, Clients, Footer, FloatingBtns
├── next.config.js
└── package.json
```

## Notes
- Sabhi images bharattaxi.com CDN se load hoti hain
- Forms bharattaxi.com/search_result pe redirect karte hain
- Fully responsive (mobile + desktop)
- Next.js 14 App Router use kiya gaya hai
