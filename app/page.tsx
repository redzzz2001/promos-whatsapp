const groups = [
  {
    name: "TechPromos",
    description: "Tecnologia, eletrônicos e acessórios com descontos de verdade.",
    image: "./tech-promos.png",
    href: "https://chat.whatsapp.com/IeDQkPMHPV04wqAekr1L9O",
    theme: "tech",
    badge: "Tecnologia",
  },
  {
    name: "ModaAchadinhos",
    description: "Roupas, acessórios e achadinhos estilosos para pagar menos.",
    image: "./moda-achadinhos.png",
    href: "https://chat.whatsapp.com/Ef1YKCvrysuJsXpLnEL2TU",
    theme: "fashion",
    badge: "Moda",
  },
] as const;

export default function Home() {
  return (
    <main>
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />

      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow"><span /> Grupos exclusivos no WhatsApp</div>
        <h1 id="page-title">Ofertas que valem a pena.</h1>
        <p className="intro">
          Escolha seu grupo favorito e receba as melhores promoções direto no celular.
        </p>

        <div className="groups">
          {groups.map((group) => (
            <a
              className={`groupCard ${group.theme}`}
              href={group.href}
              key={group.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Entrar no grupo ${group.name} pelo WhatsApp`}
            >
              <div className="cardGlow" />
              <div className="logoWrap">
                <img src={group.image} alt={`Logo ${group.name}`} />
              </div>
              <div className="cardContent">
                <span className="badge">{group.badge}</span>
                <h2>{group.name}</h2>
                <p>{group.description}</p>
                <span className="cta">
                  Entrar no grupo
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="footerNote">
          <span aria-hidden="true">✓</span> Acesso gratuito • Saia quando quiser
        </p>
      </section>
    </main>
  );
}
