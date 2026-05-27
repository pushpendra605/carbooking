import './globals.css'

export const metadata = {
  title: 'Hire Taxi Service & Cab Booking from India\'s Best Car Rental Provider- Wizz taxi',
  description: 'Wizz taxi offers 24*7 taxi booking and cab service facility at an affordable fare. Book online taxi service in India, cab for rent, and car rental with driver at best deals.',
  keywords: 'Taxi Service in India, Cab Service in India, Cab Booking in India, Taxi Booking in India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://www.bharattaxi.com/assets/favicon/favicon-32x32.png" sizes="32x32" />
      </head>
      <body>{children}</body>
    </html>
  )
}
