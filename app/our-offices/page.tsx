export default function Page() {
    const offices = [
      {
        country: "Indonesia",
        locations: [
          { 
            city: "Jakarta", 
            address: "Axa Tower, Kuningan - Our headquarters", 
            mapLink: "https://goo.gl/maps/example1" 
          },
          { 
            city: "Jakarta", 
            address: "50/F, Menara BCA Grand Indonesia JI, Jl. M.H. Thamrin No.1, RT.1/RW.5, Menteng, Jakarta, Central Jakarta City, Jakarta 10310", 
            mapLink: "https://goo.gl/maps/example1" 
          },
          { 
            city: "Jakarta", 
            address: "Menara BCA Grand Indonesia, Thamrin, Menteng, Jakarta, 10310", 
            mapLink: "https://goo.gl/maps/example1" 
          },
          { 
            city: "Jakarta", 
            address: "Plaza Indonesia, Level 5 Unit E021AB, Jl. M.H. Thamrin No.Kav. 28-30, Daerah Khusus Ibukota Jakarta 10350", 
            mapLink: "https://goo.gl/maps/example1" 
          },
          { 
            city: "Jakarta", 
            address: "Chubb Square, Jl. M.H. Thamrin No.10 9th Floor, Kb. Melati, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230", 
            mapLink: "https://goo.gl/maps/example1" 
          },
          { 
            city: "Bandung", 
            address: "Menara Asia Afrika Floor 9 Jalan Asia Afika No.133-137", 
            mapLink: "https://goo.gl/maps/example1" 
          },
          { city: "Yogyakarta", address: "Coming Soon", mapLink: "https://goo.gl/maps/example2" },
          { city: "Surabaya", address: "Coming Soon", mapLink: "https://goo.gl/maps/example2" },
          { city: "Bali", address: "Coming Soon", mapLink: "https://goo.gl/maps/example2" },
        ],
      },
      {
        country: "Australia",
        locations: [{ city: "Coming Soon", address: "", mapLink: "" }],
      },
    ];
  
    return (
      <div className="bg-black/60 text-white min-h-screen">
        {/* Hero Section */}
        <section className="py-16 border-b-2 border-white">
          <h1 className="text-5xl font-extrabold text-white leading-tight text-center">
            Our Offices
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto text-center">
            Discover our global offices and upcoming locations.
          </p>
        </section>
  
        {/* Office Locations */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="space-y-10">
            {offices.map((office, idx) => (
              <div key={idx}>
                <h3 className="text-3xl font-semibold text-white mb-6">{office.country}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {office.locations.map((location, index) => (
                    <div
                      key={index}
                      className=" p-8 border-2 border-white rounded-lg transition duration-300 transform hover:scale-105"
                    >
                      <h4 className="text-2xl font-medium text-white">{location.city}</h4>
                      {location.address && (
                        <p className="text-white mt-2">{location.address}</p> 
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
