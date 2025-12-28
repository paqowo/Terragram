import React, { useMemo, useState } from 'react';

const TILES = [
  {
    title: 'Co jsou Terragramy',
    intro: 'Terragramy nejsou náhodné symboly ani nástroje víry.',
    body: `Terragramy jsou aktivačními klíči, které pracují s hlubšími vrstvami vědomí – osobního i planetárního.
Nevznikly jako systém víry, ale jako odpověď na potřebu navrácení celistvosti: k sobě samým, k Zemi a k přirozenému řádu vývoje.

Jejich původ je spojen s vibračními kvalitami krajiny hory Blaník – místa, kde byly po věky uchovávány principy poznání, ochrany a sjednocení.
Terragramy nejsou určeny k vysvětlování světa, ale k jeho vnitřnímu rozpoznání.`
  },
  {
    title: 'Symbol světla',
    intro: 'Symbol světla není popis. Je jazyk.',
    body: `Terragram není popisem reality.
Je jazykem vnímání.

Tvary, linie a barvy nepůsobí skrze význam, ale skrze rezonanci.
Symbol neříká, co si myslet.
Umožňuje něco vnímat.

Tím obchází hodnocení, ego i naučené mentální vzorce a dotýká se přímo kvality Duše.`
  },
  {
    title: 'Kvality bytí',
    intro: 'Každý Terragram nese určitou kvalitu bytí.',
    body: `Každý Terragram vyjadřuje konkrétní kvalitu bytí:
změnu, důvěru, vášeň, tvořivost, dokončení, osvobození…

Tyto kvality nejsou vnější.
Jsou již přítomné v člověku.
Symbol je pouze zrcadlí a aktivuje ve chvíli, kdy je člověk připraven je rozpoznat.`
  },
  {
    title: 'Aktivační klíč',
    intro: 'Aktivace není proces. Je to setkání.',
    body: `Aktivace Terragramu není mechanický proces.
Nevzniká „použitím“, ale setkáním.

Ve chvíli vnitřního ztišení a otevřenosti se symbol stává aktivačním klíčem – jemným impulzem, který poukazuje na pokřivení osobnosti a současně pozvedá kvality Duše.

Aktivace se nedá vynutit.
Vzniká přirozeně, ve správný čas.`
  },
  {
    title: 'Princip svobodné spolupráce',
    intro: 'Energie symbolů světla nelze zneužít.',
    body: `Terragramy působí pouze tam, kde je přítomna svobodná vůle k růstu a respekt ke spolupráci.

Nevedou.
Nenutí.
Nezasahují.

Pouze odhalují to, co je připraveno být uviděno.
Proto nemohou být zneužity ani použity proti vůli člověka.`
  },
  {
    title: 'Jak s Terragramy pracovat',
    intro: 'Terragram neříká, co dělat.',
    body: `Terragramy lze používat různými způsoby:

– jako denní rituál
– jako výklad
– v osobní nebo kolektivní konstelaci
– jako energetický zářič prostoru či krajiny

Ve všech případech platí totéž:
Terragram neříká, co dělat.
Ukazuje, kde se právě nacházíte.`
  },
  {
    title: 'Sjednocení',
    intro: 'Soubor Terragramů tvoří uzavřený celek.',
    body: `Terragramy se vzájemně doplňují a vytvářejí ucelený systém kvalit bytí.

Jejich propojením vzniká princip Sjednocení – návrat Duše z oddělenosti zpět do vědomého bytí.
Nejde o cíl, ale o stav vnitřního rozpoznání.`
  },
  {
    title: 'Tichý průvodce',
    intro: 'Terragramy nejsou cílem.',
    body: `Terragramy nejsou cílem.
Jsou tichým průvodcem na cestě k celistvému poznání.

V určitém bodě člověk přestává hledat cestu.
Uvědomuje si, že on sám je cestou.`
  }
];

const About: React.FC = () => {
  const [activeTile, setActiveTile] = useState<number | null>(null);
  const activeContent = useMemo(() => (activeTile !== null ? TILES[activeTile] : null), [activeTile]);

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="about-section space-y-10">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[color:var(--muted)] animate-in fade-in slide-in-from-bottom-2 delay-100">O Terragramech</p>
          <h1 className="text-3xl font-serif tracking-[0.2em] text-[color:var(--text)] uppercase animate-in fade-in slide-in-from-bottom-2 delay-200">Tichý iniciační prostor</h1>
          <div className="divider-gold w-full animate-in fade-in slide-in-from-bottom-2 delay-300"></div>
          <p className="max-w-3xl text-[color:var(--muted)] leading-relaxed text-sm animate-in fade-in slide-in-from-bottom-2 delay-400">
            Každá dlaždice je krátké zastavení — jedna myšlenka, jeden princip. Otevřete ji, až když ucítíte, že je to ta pravá.
          </p>
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
