import React from "react";

export default function BuyDetails2() {
  const property = {
    id: 2,
    title: "Marble Crest Villa",
    location: "Lekki Phase 1, Lagos",
    priceLabel: "₦250,000,000",
    amount: 250000000,
    type: "Luxury Villa",
    hero:
      "https://images.unsplash.com/photo-1600585154154-deb2b9f1f05b?auto=format&fit=crop&w=1500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55dedbf89ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A high-end villa featuring marble flooring, automated lighting, indoor waterfalls, and a private deck. It delivers top-tier comfort with sophisticated architectural details.",
    features: [
      "5 Bedrooms Ensuite",
      "Private Swimming Pool",
      "Dual Living Rooms",
      "Walk-in Wine Cellar",
      "Smart Climate Control",
      "2-Car Garage",
      "Fully Fitted Kitchen",
      "Standby Solar Power",
    ],
    agent: {
      name: "Bamidele Johnson",
      phone: "2348091112244",
      email: "bamidele@stayfinder.com",
    },
  };

  const contactAgent = () => {
    const msg = `Hello ${property.agent.name}, I'm interested in ${property.title} at ${property.location}. Please provide more details.`;
    window.open(
      `https://wa.me/${property.agent.phone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const buyNow = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_test_d121ee2b2ac68d1e9256255336f7d630b3812dae",
      email: "buyer@example.com",
      amount: property.amount * 100,
      currency: "NGN",
      ref: "SALE2-" + Date.now(),
      callback: () => {
        alert("Payment successful!");
        window.location.href = "/payment-success";
      },
      onClose: () => alert("Payment popup closed."),
    });
    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="relative h-[350px] md:h-[420px] w-full overflow-hidden">
        <img src={property.hero} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold">{property.title}</h1>
          <p className="text-sm md:text-base">{property.location} • {property.type}</p>
          <p className="mt-3 text-xl md:text-2xl font-semibold text-sky-300">{property.priceLabel}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-3 gap-3">
              {property.gallery.map((src, i) => (
                <img key={i} src={src} className="h-36 md:h-40 object-cover rounded-lg" />
              ))}
            </div>

            <section>
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="mt-3 text-gray-700">{property.description}</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold">Amenities & Features</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                {property.features.map((f, idx) => <li key={idx}>• {f}</li>)}
              </ul>
            </section>
          </div>

          <aside className="p-4 bg-gray-50 rounded-xl border flex flex-col gap-4">
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-2xl font-bold text-sky-600">{property.priceLabel}</p>

            <button onClick={buyNow} className="bg-sky-600 text-white py-3 rounded-lg font-semibold hover:bg-sky-700">
              Buy Now
            </button>

            <button onClick={contactAgent} className="border border-sky-600 text-sky-600 py-3 rounded-lg font-semibold">
              Contact Agent
            </button>

            <div className="p-4 bg-white rounded-lg border">
              <h4 className="font-semibold">Agent</h4>
              <p>{property.agent.name}</p>
              <p className="text-sm text-gray-500">{property.agent.phone}</p>
              <p className="text-sm text-gray-500">{property.agent.email}</p>
            </div>

            <p className="text-xs text-gray-400 mt-auto">Secure Paystack Payment.</p>
          </aside>
        </div>
      </div>
    </div>
  );
}
