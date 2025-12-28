import React, { useMemo, useState } from 'react';

const TILES = [
  {
    title: 'Původ Terragramů',
    intro: 'Vibrační dar z hlubin hory Blaník.',
    body: `Terragramy nejsou plodem lidské mysli, ale vibračním darem z nitra hory Blaník. Vynořily se jako světelné pilíře, které pomáhají duši v nastávajícím přechodu a transformaci. 

Jsou to planetární ochránci – nástroje, které hlídají moudrost k objevení pravého Poznání. Jejich úkolem je obnovit pokřivené planetární úrovně a očistit je plamenem uvědomění. Přicházejí, aby podpořily vzestup Země i každého z nás do stavu celistvosti.`
  },
  {
    title: 'Symbol Světla',
    intro: 'Jazyk vnímání, který obchází mysl.',
    body: `Symbol světla není popis reality, je to rezonance. Tvary a linie promlouvají přímo k vibračnímu potenciálu vaší posvátné Duše. 

Zatímco slova se snaží vysvětlovat, symbol umožňuje cítit. Jako tichý jazyk obchází naučené vzorce ega a dotýká se míst, kde sídlí vaše opravdové „Já“. Je to most mezi vnějším projevem a vnitřní esencí.`
  },
  {
    title: 'Kvality Bytí',
    intro: 'Dvanáct bran k vaší vnitřní svatyni.',
    body: `Každý Terragram nese unikátní kvalitu bytí: změnu, vášeň, důvěru či tvořivost. Těchto dvanáct kvalit tvoří ucelenou svatyni pro osobní růst a posílení těla i ducha.

Symboly tyto kvality nevytvářejí, ony je zrcadlí. Ukazují vám, co je ve vás již přítomné, ale dosud možná skryté za oponou iluzí. Jsou to semínka, která čekají na vaši pozornost, aby mohla vzklíčit do plné síly.`
  },
  {
    title: 'Aktivační klíče',
    intro: 'Dotek, který probouzí vibrační potenciál.',
    body: `Karty Terragramů jsou aktivačními klíči. Jejich síla se neprobouzí mechanickým použitím, ale vědomým setkáním. 

V okamžiku vnitřního ztišení a přijetí se symbol aktivuje. Poukazuje na pokřivení osobnosti, ale zároveň pozvedá kvality Duše k jejich čistému vyjádření. Aktivace je milostným aktem alchymie, kdy se vaše pozornost spojuje se zdrojem.`
  },
  {
    title: 'Svobodná spolupráce',
    intro: 'Energie, kterou nelze zneužít.',
    body: `Základním zákonem Terragramů je svobodná spolupráce. Jsou nástrojem světla, a proto jejich energii nelze zneužít k negativním účelům. 

Působí pouze tam, kde je přítomna láska a pokora k vývoji. Symboly nenutí, nevedou ani nezasahují proti vůli. Jsou tu, aby vyrovnávaly vesmírnou dualitu a umožnily Božímu JÁ přijmout celistvé poznání.`
  },
  {
    title: 'Cesty setkání',
    intro: 'Od rituálu k energetickému zářiči.',
    body: `S Terragramy lze pracovat mnoha způsoby, podle toho, co vaše cesta právě vyžaduje. Mohou být denním rituálem, průvodcem při výkladu nebo nástrojem pro kolektivní konstelace.

Slouží také jako energetické zářiče – pročišťují prostor od negativních energií, harmonizují krajinu a pomáhají regenerovat zraněná místa Země. Terragram vám neříká, co máte dělat; ukazuje vám, kým v danou chvíli jste.`
  },
  {
    title: 'Sjednocení',
    intro: 'Návrat z oddělenosti ke zdroji.',
    body: `Soubor Terragramů tvoří uzavřený celek, chrám portálu sjednocení. Je to nástroj pro mystickou svatbu Duše a Ducha.

Sjednocení znamená konec hledání cesty. Je to stav, kdy si uvědomíte, že nejste odděleni od vědění, ale jste jeho součástí. V tomto bodě se rozpouští dualita a vy se navracíte na své právoplatné místo v evolučním plánu vzestupu.`
  },
  {
    title: 'Tichý Průvodce',
    intro: 'Stát se cestou, nikoliv poutníkem.',
    body: `Terragramy nejsou cílem. Jsou ukazateli na cestě k celistvému poznání, které vás postupně učí opouštět lpění na identitě a egu. 

V určitém bodě ticho převáží nad otázkami. Člověk přestává hledat cestu, protože pochopí, že on sám je cestou. Terragramy v tomto okamžiku splnily svůj účel – dovedly vás k rozpoznání vaší vlastní božské podstaty.`
  }
];

const About: React.FC = () => {
  const [activeTile, setActiveTile] = useState<number | null>(null);
  const activeContent = useMemo(() => (activeTile !== null ? TILES[activeTile] : null), [activeTile]);

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="about-section space-y-10">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-[10px] tracking-[0.4em] text-[color:var(--muted)] animate-in fade-in slide-in-from-bottom-2 delay-100 font-serif">O terragramech</p>
          <h1 className="text-4xl font-serif tracking-[0.2em] text-[color:var(--text)] uppercase animate-in fade-in slide-in-from-bottom-2 delay-200">Tichý iniciační prostor</h1>
          <div className="divider-gold w-full animate-in fade-in slide-in-from-bottom-2 delay-300"></div>
          <p className="max-w-2xl text-[color:var(--muted)] leading-relaxed text-sm animate-in fade-in slide-in-from-bottom-2 delay-400">Každý Terragram je zrcadlem, ve kterém se odráží hloubka Vaší podstaty. Nespěchejte. Nechte se vést tichým vjemem k symbolu, který si Vás přitáhne. Právě v něm se skrývá princip, který je připraven k rozvinutí.</p>
        </div>

        <div className={`about-tiles-grid ${activeTile !== null ? 'is-dimmed' : ''}`}>
          {TILES.map((tile, index) => (
            <article
              key={tile.title}
              className={`about-tile lux-shimmer ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
              onClick={() => setActiveTile(index)}
              role="button"
              tabIndex={0}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveTile(index);
                }
              }}
            >
              <div>
                <h3 className="font-serif tracking-[0.2em] animate-in fade-in slide-in-from-bottom-2 delay-100">{tile.title}</h3>
                <div className="divider-gold w-full animate-in fade-in slide-in-from-bottom-2 delay-200"></div>
                <p className="about-tile-intro animate-in fade-in slide-in-from-bottom-2 delay-300">{tile.intro}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeContent && (
        <div className="about-modal-overlay" onClick={() => setActiveTile(null)}>
          <div className="about-modal-card surface-card" onClick={event => event.stopPropagation()} role="dialog" aria-modal="true">
            <h3 className="font-serif tracking-[0.2em] animate-in fade-in slide-in-from-bottom-2 delay-100">{activeContent.title}</h3>
            <div className="divider-gold w-full animate-in fade-in slide-in-from-bottom-2 delay-200"></div>
            {activeContent.body.split('\n\n').map((paragraph, index) => (
              <p key={index} className={`animate-in fade-in slide-in-from-bottom-2 delay-${300 + index * 100}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
