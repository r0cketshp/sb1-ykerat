import React from 'react';

// This is a mock data array. In a real application, you would fetch this data from your backend.
const mockListings = [
  { id: 1, title: 'Cozy Beach House', location: 'Malibu, CA', price: 250 },
  { id: 2, title: 'Mountain Retreat', location: 'Aspen, CO', price: 300 },
  { id: 3, title: 'City Center Apartment', location: 'New York, NY', price: 200 },
];

const Listings: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockListings.map((listing) => (
          <div key={listing.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
            <p className="text-gray-600 mb-2">{listing.location}</p>
            <p className="text-lg font-bold">${listing.price} per night</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;