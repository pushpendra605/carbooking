import React, { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Moon, Sun } from 'lucide-react'

// Fix Leaflet's default icon issue in React
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const customMarkerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
})

// Helper component to center map and fetch route
function RoutingMachine({ source, destination, onRouteCalculated }) {
  const map = useMap()
  const [routeCoordinates, setRouteCoordinates] = useState([])
  const [sourcePos, setSourcePos] = useState(null)
  const [destPos, setDestPos] = useState(null)

  useEffect(() => {
    async function fetchCoordinates() {
      try {
        // Simple geocoding using Nominatim (OpenStreetMap)
        const getCoords = async (query) => {
          const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
          const data = await res.json()
          if (data && data.length > 0) {
            return [parseFloat(data[0].lat), parseFloat(data[0].lon)]
          }
          return null
        }

        const src = await getCoords(source)
        let dst = await getCoords(destination)

        // Fallback for destination if empty or same (e.g. rental)
        if (!dst || source === destination) {
          // Just shift slightly for visual purpose if not provided
          dst = src ? [src[0] + 0.05, src[1] + 0.05] : null
        }

        if (src && dst) {
          setSourcePos(src)
          setDestPos(dst)

          // Fetch route using OSRM
          const routeRes = await fetch(`https://router.project-osrm.org/route/v1/driving/${src[1]},${src[0]};${dst[1]},${dst[0]}?overview=full&geometries=geojson`)
          const routeData = await routeRes.json()

          if (routeData.routes && routeData.routes.length > 0) {
            const coords = routeData.routes[0].geometry.coordinates.map(c => [c[1], c[0]])
            setRouteCoordinates(coords)
            
            const distance = routeData.routes[0].distance // in meters
            const duration = routeData.routes[0].duration // in seconds
            onRouteCalculated({ distance, duration })

            // Fit map bounds
            const bounds = L.latLngBounds([src, dst])
            map.fitBounds(bounds, { padding: [50, 50] })
          }
        }
      } catch (error) {
        console.error("Error fetching route:", error)
      }
    }

    if (source && destination) {
      fetchCoordinates()
    }
  }, [source, destination, map, onRouteCalculated])

  return (
    <>
      {sourcePos && (
        <Marker position={sourcePos} icon={customMarkerIcon}>
          <Popup>Pickup: {source}</Popup>
        </Marker>
      )}
      {destPos && (
        <Marker position={destPos} icon={customMarkerIcon}>
          <Popup>Drop-off: {destination}</Popup>
        </Marker>
      )}
      {routeCoordinates.length > 0 && (
        <Polyline positions={routeCoordinates} color="#10b981" weight={5} opacity={0.8} />
      )}
    </>
  )
}

export default function MapInterface({ source, destination, onRouteCalculated }) {
  const [isNightMode, setIsNightMode] = useState(false)

  // Standard OpenStreetMap Day Theme
  const dayTile = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  
  // CartoDB Dark Matter Night Theme
  const nightTile = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      
      {/* Theme Toggle Button */}
      <button 
        onClick={() => setIsNightMode(!isNightMode)}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          fontWeight: 600,
          color: '#374151'
        }}
      >
        {isNightMode ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#3b82f6" />}
        {isNightMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <MapContainer 
        center={[20.5937, 78.9629]} // Default center (India)
        zoom={5} 
        style={{ width: '100%', height: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={isNightMode ? nightTile : dayTile}
        />
        
        <RoutingMachine 
          source={source} 
          destination={destination} 
          onRouteCalculated={onRouteCalculated} 
        />
      </MapContainer>
    </div>
  )
}
