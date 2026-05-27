'use client'

import { useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

const BookingPanel = dynamic(() => import('../../components/BookingPanel'), { ssr: false })
const MapInterface = dynamic(() => import('../../components/MapInterface'), { ssr: false, loading: () => <div style={{width: '100%', height: '100%', background: '#eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading Map...</div> })

function BookingContent() {
  const searchParams = useSearchParams()
  
  const source = searchParams.get('source') || 'Unknown Location'
  const destination = searchParams.get('dest') || 'Unknown Location'
  const date = searchParams.get('date') || ''
  const tripType = searchParams.get('type') || 'oneway'

  const [routeData, setRouteData] = useState(null)

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <div style={{ width: '400px', flexShrink: 0, height: '100%', borderRight: '1px solid #ccc', backgroundColor: '#f9f9f9', overflowY: 'auto' }}>
        <BookingPanel 
          source={source} 
          destination={destination} 
          date={date} 
          tripType={tripType} 
          routeData={routeData} 
        />
      </div>
      <div style={{ flex: 1, height: '100%', position: 'relative' }}>
        <MapInterface 
          source={source} 
          destination={destination} 
          onRouteCalculated={setRouteData} 
        />
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading Booking Details...</div>}>
      <BookingContent />
    </Suspense>
  )
}
