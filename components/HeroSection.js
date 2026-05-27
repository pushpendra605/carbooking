'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const tabs = [
  { id: 'rental', label: 'Local Rental' },
  { id: 'oneway', label: 'One Way' },
  { id: 'roundtrip', label: 'Round Trip' },
  { id: 'roadtrip', label: 'Road Trip' },
  { id: 'transfer', label: 'Local Transfer' },
]

export default function HeroSection() {
  const [tab, setTab] = useState('rental')
  const [source, setSource] = useState('Indore')
  const [destination, setDestination] = useState('Bhopal')
  const [date, setDate] = useState("27 May'26 - 7:12 PM")
  const router = useRouter()

  const handleSearch = () => {
    // Generate query params based on tab
    let destParam = destination
    if (tab === 'rental') destParam = source // Rental has same source and destination typically
    
    router.push(`/booking?type=${tab}&source=${encodeURIComponent(source)}&dest=${encodeURIComponent(destParam)}&date=${encodeURIComponent(date)}`)
  }

  const renderFields = () => {
    switch (tab) {
      case 'rental':
        return (
          <>
            <div className="search-field-custom">
              <span className="field-label-custom">Source City</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <select className="field-input-custom" value={source} onChange={(e) => setSource(e.target.value)}>
                  <option value="Indore">Indore, Madhya Pradesh</option>
                  <option value="Bhopal">Bhopal, Madhya Pradesh</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
            </div>
            <div className="search-field-custom">
              <span className="field-label-custom">Package Type</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                <select className="field-input-custom">
                  <option>Select Package</option>
                  <option>4 Hrs / 40 Km</option>
                  <option>8 Hrs / 80 Km</option>
                </select>
              </div>
            </div>
            <div className="search-field-custom">
              <span className="field-label-custom">Pickup Date</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <input type="text" className="field-input-custom" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
            </div>
          </>
        )
      case 'oneway':
        return (
          <>
            <div className="search-field-custom">
              <span className="field-label-custom">Source City</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <input type="text" className="field-input-custom" placeholder="Enter Source City" value={source} onChange={(e) => setSource(e.target.value)} />
              </div>
            </div>
            <div className="search-field-custom">
              <span className="field-label-custom">Destination City</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <input type="text" className="field-input-custom" placeholder="Enter Destination City" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </div>
            </div>
            <div className="search-field-custom">
              <span className="field-label-custom">Pickup Date</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <input type="text" className="field-input-custom" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
            </div>
          </>
        )
      case 'roundtrip':
      case 'roadtrip':
        return (
          <>
            <div className="search-field-custom">
              <span className="field-label-custom">Source City</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <input type="text" className="field-input-custom" placeholder="Enter Source City" value={source} onChange={(e) => setSource(e.target.value)} />
              </div>
            </div>
            <div className="search-field-custom">
              <span className="field-label-custom">Destination City</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <input type="text" className="field-input-custom" placeholder="Enter Destination City" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </div>
            </div>
            <div className="search-field-custom">
              <span className="field-label-custom">Pickup Date</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <input type="text" className="field-input-custom" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
            </div>
            <div className="search-field-custom">
              <span className="field-label-custom">Return Date</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <input type="text" className="field-input-custom" placeholder="Return Date" />
              </div>
            </div>
          </>
        )
      case 'transfer':
        return (
          <>
            <div className="search-field-custom">
              <span className="field-label-custom">Source City</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <input type="text" className="field-input-custom" placeholder="Enter Source City" value={source} onChange={(e) => setSource(e.target.value)} />
              </div>
            </div>
            <div className="search-field-custom">
              <span className="field-label-custom">Pickup / Drop Area</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <input type="text" className="field-input-custom" placeholder="Pickup / Drop location" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </div>
            </div>
            <div className="search-field-custom">
              <span className="field-label-custom">Pickup Date</span>
              <div className="field-input-wrapper-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <input type="text" className="field-input-custom" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <section className="hero-custom">
      <div className="hero-content-custom">
        <div className="search-box-custom">
          
          {/* Radio Tabs */}
          <div className="radio-tabs-custom">
            {tabs.map(t => (
              <label 
                key={t.id} 
                className={`radio-tab-custom ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                <div className={`radio-circle ${tab === t.id ? 'active' : ''}`}>
                  {tab === t.id && <div className="radio-dot" />}
                </div>
                <span>{t.label}</span>
              </label>
            ))}
          </div>

          {/* Form Fields */}
          <div className="search-fields-custom">
            {renderFields()}
          </div>

          {/* Search Button */}
          <button className="search-btn-custom" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Side Enquiry Tab */}
      <div className="enquiry-tab-custom">
        Enquiry
      </div>
    </section>
  )
}
