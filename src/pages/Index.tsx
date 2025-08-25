import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const Index = () => {
  useEffect(() => {
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        clearInterval(checkCalendly);
      }
    }, 100);

    return () => {
      clearInterval(checkCalendly);
      clearInterval(badgeInterval);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/kevins-club/30min'
      });
    }
    return false;
  };

  const galleryImages = [
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrEDAlUdgkOizmiDF1mRa43R2qdQ3NUaV61tdZ5PjYCdlja0AsKArcckQJFZPehj_Zg6ZWYiBzaxI5ElOOViYtciM5kl90MhXmZVIe2M4vX6lw1WpeBjW_MmVbtINmToRPBisgqwuDwE1_a=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noATEi8btY04jmkYgrmNndVS3LYaT1fbQN1dVz-gidIY0YiUhEJ5Bko26W5W__3KLIXtVK0_G24SMV6_9HlOL6F_I7oPTpaZVVM19QOLQ6cC__05Uky333N-WUR6ckOE_fhqnNXbbrQsHXv=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr_fdpXm4gZECbHBuVOxm3Y8CG-o3fpLBLFRDe2SdEIxSb_ASnvtmC5unEw1rkJfKS5ScboZDFrc7anWRfqmxfWDX_2U0xVzrFAEqahzqBeqVj429AaRCqD2I9gKO2XNDPPAXp3sUvOe88Y=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np6MTNMyIa6Qtx3PiqU-xFOJNqsBikDSwgk8fYXnZ8j60LA3CB136b_pr2hkFtF_RDOiTEPl9VXoOt2cn7H5ru8r935NK7KwuS1Qatm28_OqInRaWfFufmjTm-Gg4rDZyKHfit_3hxIPAWI=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipMzqLh4Ugh4h7shV2NNXGnl07gCs9lXHEI60jIT=w621-h1023-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipMxaIisklvyvTVzELGB55cldIVwQkIn6s0xue0w=w621-h332-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipPtcDJYT2Q3uYzegKWB8rfocwTrnxQ7UCuX41R1=w621-h884-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipNEF-ss1xHefrKYNnve-7KUokt8KDv9jupBWkqe=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrCxiHbk3RZkGWCX_D7xDsOB-Vzlbl5UAHb0jqk4SvZe_KooUCWGVKoGVvoZLrDOg2z_3G2eAe5hPOTO4jogXzuSwXiev1YTXDcJ7JCZCE7WuVD6ohvtiUYCkiIEWM6tQOEcUqC1WKbJuxL=s1360-w1360-h1020-rw"
  ];

  return (
    <>
      {/* Urgency Bar */}
      <div className="urgency-bar">🔒 This site preview is reserved for 72h.</div>

      {/* Sticky Header */}
      <header className="sticky-header">
        <div className="font-semibold text-foreground">Sam's Bathroom Renovations</div>
        <a 
          href="#" 
          className="btn-activate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Activate ⇲
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="centered">
          <div className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transform Your Bathroom with Expert Renovation
          </div>

          <div className="text-lg md:text-xl text-muted-foreground mb-6">
            10+ Years Experience • Tiling, Fixtures, Full Remodels & More
          </div>

          {/* Proof Bar */}
          <div className="proof-bar">
            <div className="proof-item"><div className="text"><div className="text-lg mb-1">🏆</div><strong>10+ years in business</strong></div></div>
            <div className="proof-item"><div className="text"><div className="text-lg mb-1">⭐</div><strong>4.9 Rating (68)</strong></div></div>
            <div className="proof-item"><div className="text"><div className="text-lg mb-1">📍</div><strong>Vermont, Australia</strong></div></div>
          </div>

          <div className="text-sm text-muted-foreground mt-4">
            🇦🇺 Serving Vermont & Surrounds • 0425 253 682
          </div>
        </div>
      </section>

      {/* <!-- Elfsight Google Reviews -->*/}
      <div className="centered" style={{ marginTop: '2rem' }}>
<script src="https://elfsightcdn.com/platform.js" async></script>
<div class="elfsight-app-de8a2f21-a9a1-4395-aa48-ad11d5a1adcd" data-elfsight-app-lazy></div>
      </div>

  {/* 📸 Gallery Section */}
      <section className="gallery-scroll-container">
        <div className="gallery-scroll">
          {galleryImages.map((src, idx) => (
            <img key={idx} src={src} alt={`Bathroom remodel ${idx + 1}`} className="gallery-image" />
          ))}
        </div>
      </section>

  {/* Styles for scrollable gallery */}
      <style>{`
        .gallery-scroll-container {
          overflow-x: auto;
          padding: 1rem 0;
        }
        .gallery-scroll {
          display: flex;
          gap: 1rem;
          padding: 0 1rem;
        }
        .gallery-image {
          height: 200px;
          border-radius: 0.5rem;
          object-fit: cover;
          flex-shrink: 0;
        }
      `}</style>



{/* Page Structure & Copy — Mobile-First */}
<main className="centered" style={{ marginTop: '1.5rem', paddingBottom: '4rem' }}>
  <h1 className="text-xl font-bold text-foreground mb-1.5">
    Sam's Bathroom Renovations
  </h1>

  <h2 className="text-base font-semibold text-muted-foreground mb-3">
   🇦🇺 Vermont & Surroundings, VIC
  </h2>

  <h3 className="text-base font-medium text-foreground mb-5">
    10+ Years of Bathroom Remodeling — Start to Finish
  </h3>

  <div className="space-y-3 mb-6 text-sm">
    <p>We turn dull bathrooms into standout spaces — modern, durable and beautiful.</p>
    <p>Full-service from quote to clean-up: design, demo, plumbing, electrical, tiling & fixtures.</p>
    <p>Sam’s team uses high-grade materials and industry-best techniques that last for years.</p>
    <p>We work fast, stay clean, and keep your day-to-day disruption near zero.</p>
  </div>}


        {/* What We Do */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          What We Do
        </h2>

        <div className="services-grid">
          <div>🛁<br />Luxury Bathroom Remodels</div>
          <div>🚿<br />Custom Shower Builds</div>
          <div>🧱<br />Wall & Floor Tiling</div>
          <div>🧼<br />Waterproofing Systems</div>
          <div>🚽<br />Toilet & Vanity Installs</div>
          <div>💡<br />Lighting & Ventilation</div>
        </div>

  {/* What We Do
  <h2 className="text-lg font-bold text-foreground mb-3">
    What We Do
  </h2>
  */}

  <div className="services-grid-mobile space-y-3 text-sm">
    <div>🛁 Luxury Bathroom Remodels</div>
    <div>🚿 Custom Shower Builds</div>
    <div>🧱 Wall & Floor Tiling</div>
    <div>🚽 Toilet & Vanity Installs</div>
    <div>💡 Lighting & Ventilation</div>
    <div>🧼 Waterproofing Systems</div>
  </div>

  {/* How It Works */}
  <h2 className="text-lg font-bold text-foreground mt-8 mb-3">
    How It Works
  </h2>

  <h3 className="text-sm font-semibold text-foreground mb-3">
    Simple steps, real results
  </h3>

  <div className="space-y-2 text-sm mb-6">
    <div>1️⃣ Book a free on-site quote</div>
    <div>2️⃣ We handle planning, design & execution</div>
    <div>3️⃣ You get a bathroom you’ll love</div>
  </div>

  {/* Why Choose Us */}
  <h2 className="text-lg font-bold text-foreground mb-3">
    Why Sam's?
  </h2>

  <div className="space-y-2 text-sm mb-6">
    <div>📍 Local & reliable in Vermont, VIC</div>
    <div>🛠️ All-in-one team (no subs)</div>
    <div>🔧 Long-lasting results, clean finishes</div>
    <div>⭐ 4.9 Stars — 68 Reviews</div>
  </div>

  {/* Final Callout */}
  <section className="mt-10 mb-6">
    <h2 className="text-lg font-bold text-foreground mb-2">
      Let's build your new bathroom
    </h2>
    <p className="text-sm text-muted-foreground">
      Book your free consult — and let our team bring your dream space to life.
    </p>
  </section>
</main>

      {/* Sticky Footer */}
      <div className="sticky-footer">
        <a href="tel:+61425253682" className="btn btn-call">📞 Call Us</a>
        <button onClick={openCalendly} className="btn btn-book">📅 Book Now</button>
      </div>
    </>
  );
};

export default Index;
