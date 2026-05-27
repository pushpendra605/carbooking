const fs = require('fs');
let c = fs.readFileSync('components/HeroSection.js', 'utf8');

c = c.split('<input type="text" className="field-input-custom" placeholder="Enter Source City" />').join('<input type="text" className="field-input-custom" placeholder="Enter Source City" value={source} onChange={(e) => setSource(e.target.value)} />');
c = c.split('<input type="text" className="field-input-custom" placeholder="Enter Destination City" />').join('<input type="text" className="field-input-custom" placeholder="Enter Destination City" value={destination} onChange={(e) => setDestination(e.target.value)} />');
c = c.split('<input type="text" className="field-input-custom" defaultValue="27 May\'26 - 7:12 PM" />').join('<input type="text" className="field-input-custom" value={date} onChange={(e) => setDate(e.target.value)} />');

fs.writeFileSync('components/HeroSection.js', c);
console.log("Fixed!");
