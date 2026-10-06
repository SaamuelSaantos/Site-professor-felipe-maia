import NeonBorder from './components/NeonBorder'
import './App.css'

const heroImage =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80'

const stats = [
  { value: 'anos como docente', label: 'anos como docente' },
  { value: 'anos em gestão', label: 'anos em gestão' },
  { value: 'foco em impacto', label: 'foco em impacto' },
]

function App() {
  return (
    <main className="demo-page">
      <section className="showcase-card" aria-label="Demonstração do card neon">
        <div className="showcase-card__media">
          <NeonBorder
            color="#00A3E0"
            rounded={32}
            thickness={3}
            glow={26}
            speed={10}
            className="hero-frame"
          >
            <img src={heroImage} alt="Felipe Maia" />
          </NeonBorder>
        </div>

        <div className="showcase-card__content">
          <span className="eyebrow">Professor Felipe</span>
          <h1>Visual digital moderno e impactante.</h1>
          <p>
            Design com borda neon, foco em clareza visual, melhor experiência em
            telas pequenas e acabamento refinado para apresentação profissional.
          </p>
        </div>
      </section>

      <section className="stats-grid" aria-label="Valores principais">
        {stats.map((item) => (
          <article key={item.label} className="stat-card" tabIndex={0}>
            <span className="stat-card__value">{item.value}</span>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
