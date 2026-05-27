import React from 'react'
import { Car, Clock, Navigation, MapPin } from 'lucide-react'

export default function BookingPanel({ source, destination, date, tripType, routeData }) {
  const distance = routeData?.distance ? (routeData.distance / 1000).toFixed(1) : '--'
  const duration = routeData?.duration ? Math.round(routeData.duration / 60) : '--'
  
  // Base price calculation (rough estimation based on distance)
  const distNumber = routeData?.distance ? (routeData.distance / 1000) : 10
  const basePrice = Math.round(distNumber * 12) // 12 Rs per km basic rate
  
  const cabOptions = [
    { type: 'Economy', desc: 'Mini, Swift, Dzire', price: basePrice, icon: '🚗', time: '5 min' },
    { type: 'Premium', desc: 'Sedan, Etios, Amaze', price: Math.round(basePrice * 1.5), icon: '🚙', time: '8 min' },
    { type: 'XL', desc: 'SUV, Innova, Ertiga', price: Math.round(basePrice * 2.2), icon: '🚐', time: '12 min' },
  ]

  const [selectedCab, setSelectedCab] = React.useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontFamily: 'sans-serif' }}>
      
      {/* Header */}
      <div style={{ padding: '20px', backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
        <h2 style={{ margin: '0 0 16px', fontSize: '1.25rem', fontWeight: 600 }}>Trip Summary</h2>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
            <MapPin size={16} color="#10b981" />
            <div style={{ width: '2px', height: '24px', backgroundColor: '#e5e7eb', margin: '4px 0' }} />
            <Navigation size={16} color="#ef4444" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>Pickup</p>
              <p style={{ margin: 0, fontWeight: 500 }}>{source}</p>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>Drop-off</p>
              <p style={{ margin: 0, fontWeight: 500 }}>{destination}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', padding: '16px 20px', backgroundColor: '#f3f4f6', gap: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Navigation size={18} color="#4b5563" />
          <div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>Distance</p>
            <p style={{ margin: 0, fontWeight: 600 }}>{distance} km</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={18} color="#4b5563" />
          <div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>Est. Time</p>
            <p style={{ margin: 0, fontWeight: 600 }}>{duration} mins</p>
          </div>
        </div>
      </div>

      {/* Cab Selection */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '1.1rem', fontWeight: 600 }}>Choose your ride</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {cabOptions.map((cab, idx) => (
            <div 
              key={cab.type}
              onClick={() => setSelectedCab(idx)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '16px', 
                borderRadius: '12px',
                border: selectedCab === idx ? '2px solid #10b981' : '1px solid #e5e7eb',
                backgroundColor: selectedCab === idx ? '#ecfdf5' : '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ fontSize: '2rem', marginRight: '16px' }}>
                {cab.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>{cab.type}</h4>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>₹{cab.price}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#6b7280' }}>{cab.desc}</p>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#10b981', fontWeight: 500 }}>{cab.time} away</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '20px', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
        <button style={{ 
          width: '100%', 
          padding: '16px', 
          backgroundColor: '#10b981', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)'
        }}>
          Book {cabOptions[selectedCab].type} (₹{cabOptions[selectedCab].price})
        </button>
      </div>

    </div>
  )
}
