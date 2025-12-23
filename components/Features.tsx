export default function Features() {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#0074E4" strokeWidth="2"/>
          <path d="M9 22V12h6v10" stroke="#0074E4" strokeWidth="2"/>
        </svg>
      ),
      title: "Compra una casa",
      description: "Encuentra tu lugar perfecto con más de 1 millón de propiedades en venta"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#0074E4" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="#0074E4" strokeWidth="2"/>
        </svg>
      ),
      title: "Vende tu casa",
      description: "No importa el camino que tomes, podemos ayudarte en cada paso"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="7" width="20" height="14" rx="2" stroke="#0074E4" strokeWidth="2"/>
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="#0074E4" strokeWidth="2"/>
        </svg>
      ),
      title: "Renta una casa",
      description: "Estamos creando una experiencia de renta fluida, solo para ti"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="#0074E4" strokeWidth="2"/>
          <path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2" stroke="#0074E4" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" fill="#0074E4"/>
        </svg>
      ),
      title: "Préstamos hipotecarios",
      description: "Obtén pre-aprobado y calcula tus pagos mensuales"
    }
  ]

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <a href="#" className="feature-link">
                Explorar más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
