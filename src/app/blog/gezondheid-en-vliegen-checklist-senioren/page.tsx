import { BlogLayout } from "@/components/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gezondheid en Vliegen: De Ultieme Checklist voor Senioren | Vliegklaar",
  description: "Bereid u medisch voor op uw vlucht. Van medicatiepaspoorten tot compressiekousen en vliegmedisch advies voor senioren.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Gezondheid en Vliegen: De Ultieme Checklist voor Senioren"
      publishDate="17 mei 2026"
      description="Veilig vliegen begint bij een goede medische voorbereiding. In dit artikel bespreken we de belangrijkste gezondheidsaspecten waar u als senior op moet letten voordat u aan boord stapt."
    >
      <section>
        <h2>1. Het Medicatiepaspoort (Europees Medisch Paspoort)</h2>
        <p>
          Reist u met medicijnen? Vraag dan bij uw apotheek om een gratis Europees Medisch Paspoort (EMP). Hierin staan al uw medicijnen en hun werkzame stoffen vermeld in meerdere talen. Dit is essentieel bij de douane en mocht u in het buitenland een arts nodig hebben.
        </p>
      </section>

      <section>
        <h2>2. Vliegen met specifieke aandoeningen</h2>
        <p>
          Sommige medische situaties vereisen extra aandacht voordat u het vliegtuig in stapt:
        </p>
        <ul>
          <li><strong>Hart- of longklachten:</strong> Overleg altijd met uw behandelend arts of de luchtdruk in de cabine een risico vormt.</li>
          <li><strong>Diabetes:</strong> Houd rekening met tijdsverschillen bij het spuiten van insuline. Neem extra voorraad mee in uw handbagage.</li>
          <li><strong>Recente operaties:</strong> Na een operatie mag u vaak een bepaalde periode niet vliegen vanwege het risico op trombose.</li>
        </ul>
      </section>

      <section>
        <h2>3. Trombose voorkomen: Compressiekousen</h2>
        <p>
          Tijdens een lange vlucht zit u lang stil, wat de kans op reizigerstrombose vergroot. Voor senioren zijn compressiekousen (steunkousen) vaak een verstandige keuze. Ze stimuleren de bloedsomloop en voorkomen dikke enkels. Zorg daarnaast dat u elk uur even de benen strekt of voetoefeningen doet in uw stoel.
        </p>
      </section>

      <section>
        <h2>4. Hydratatie en Voeding</h2>
        <p>
          De lucht in een vliegtuig is erg droog. Drink voldoende water en vermijd overmatig gebruik van alcohol en cafeïne, omdat deze uitdrogend werken. Een goede hydratatie helpt ook tegen vermoeidheid en een jetlag.
        </p>
      </section>

      <section>
        <h2>5. Medische verklaringen voor handbagage</h2>
        <p>
          Moet u vloeibare medicijnen (meer dan 100ml) of injectienaalden meenemen in uw handbagage? Zorg dan voor een officiële medische verklaring van uw arts. Dit voorkomt vertraging bij de security-check.
        </p>
      </section>

      <section>
        <h2>Conclusie</h2>
        <p>
          Met de juiste voorbereiding hoeft uw gezondheid geen belemmering te zijn om van de wereld te genieten. Neem de tijd voor uw medische checklist en reis met een gerust hart. Wilt u extra zekerheid? Een reisbegeleider van Vliegklaar kan u ondersteunen bij het bewaken van uw rustmomenten en medicatiegebruik tijdens de reis.
        </p>
      </section>
    </BlogLayout>
  );
}
