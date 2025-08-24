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

    // Hide Elfsight floating badge if present
    const badgeInterval = setInterval(() => {
      const badge = document.querySelector('a[href*="elfsight.com/google-reviews-widget"]');
      if (badge) {
        badge.remove();
        clearInterval(badgeInterval);
      }
    }, 500);

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

  return (
    <>
      {/* Urgency Bar */}
      <div className="urgency-bar">
        🔒 This site preview is reserved for 72h.
      </div>

      {/* Sticky Header */}
      <header className="sticky-header">
        <div className="font-semibold text-foreground">A Tier Mobile Detailing</div>
        <a 
          href="https://docs.google.com/document/d/1XlWNBgBoX8n0GihFJnE5tK3MH_9M58vPNmUtzT9ffUA/edit?usp=sharing"
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
            A-Tier Detailing — Delivered right where you are
          </div>

          <div className="text-lg md:text-xl text-muted-foreground mb-6">
            Interior & Exterior • Ceramic Coating • Precision Buff & Polish
          </div>

          {/* Proof Bar */}
          <div className="proof-bar">
            <div className="proof-item">
              <div className="text">
                <div className="text-lg mb-1">⭐</div>
                <strong>5.0 Star Google Reviews</strong>
              </div>
            </div>
            <div className="proof-item">
              <div className="text">
                <div className="text-lg mb-1">✅</div>
                <strong>Trusted by Sydney Locals</strong>
              </div>
            </div>
            <div className="proof-item">
              <div className="text">
                <div className="text-lg mb-1">🏆</div>
                <strong>+3 Years Experience</strong>
              </div>
            </div>
          </div>

          <img 
            src="https://i.imgur.com/cSXhGny.png" 
            alt="A Tier Mobile Detailing brand/owner photo"
            className="brand-photo"
          />

          <div className="text-sm text-muted-foreground mt-4">
            🇦🇺 Sydney Wide • 0420 906 836
          </div>
        </div>
      </section>

  {/* { Elfsight Google Reviews Widget}
      <div className="centered" style={{ marginTop: '2rem' }}>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div className="elfsight-app-1c2bf6cf-3571-4fb6-b953-2e4af70eb37" data-elfsight-app-lazy></div>
      </div>
  */}

      {/* Page Structure & Copy */}
      <main className="centered" style={{ marginTop: '2rem', paddingBottom: '6rem' }}>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          A Tier Mobile Detailing
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
          Premium Mobile Car Care • Sydney Wide
        </h2>

        <h3 className="text-lg md:text-xl font-medium text-foreground mb-6">
          Professional Detailing at Your Convenience
        </h3>

        <div className="space-y-4 mb-8 text-base md:text-lg">
          <p>Premium mobile detailing across Sydney.</p>
          <p>Interior and exterior perfection with every visit.</p>
          <p>Fast, reliable, and spotless — guaranteed.</p>
        </div>

        {/* What We Do */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          What We Do
        </h2>

        <div className="services-grid">
          <div>🚗<br />Exterior Hand Wash & Wax</div>
          <div>🧼<br />Interior Shampoo & Detail</div>
          <div>🌀<br />Buff & Polish</div>
          <div>🛡️<br />Ceramic Coating</div>
          <div>🧽<br />Seat & Carpet Extraction</div>
          <div>💎<br />Paint Protection</div>
        </div>

        {/* How It Works */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 mt-8">
          How It Works
        </h2>

        <h3 className="text-lg font-semibold text-foreground mb-4">
          It’s easy to get a flawless finish
        </h3>

        <div className="space-y-2 mb-8 text-base md:text-lg">
          <div>1️⃣ Book online or call us</div>
          <div>2️⃣ We arrive fully equipped</div>
          <div>3️⃣ Your vehicle looks brand new</div>
        </div>

        {/* Why Choose Us */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          Why Choose Us?
        </h2>

        <div className="space-y-2 mb-8 text-base md:text-lg">
          <div>✅ 5.0 Star Rated</div>
          <div>📍 Sydney-wide mobile service</div>
          <div>🧰 Quality products & detailing systems</div>
        </div>

        {/* Final Callout */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Ready to raise your car to A Tier?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Call or book today — we’ll handle the rest.
          </p>
        </section>
      </main>

      {/* Main Footer */}
      <footer className="centered" style={{ paddingBottom: '2rem' }}>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="font-semibold">A Tier Mobile Detailing</div>
          <div>0420 906 836</div>
          <div>Sydney Wide</div>
          <div className="mt-4">© 2025 A Tier Mobile Detailing. All rights reserved.</div>
        </div>
      </footer>

      {/* Sticky Footer */}
      <div className="sticky-footer">
        <a 
          href="tel:+61420906836" 
          className="btn btn-call"
        >
          📞 Call Us
        </a>
        <button 
          onClick={openCalendly}
          className="btn btn-book"
        >
          📅 Book Now
        </button>
      </div>
    </>
  );
};

export default Index;