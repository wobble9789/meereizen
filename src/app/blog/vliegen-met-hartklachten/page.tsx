import { BlogLayout } from "@/components/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vliegen met Hartklachten: Belangrijke Tips & Advies | Vliegklaar",
  description: "Mag u vliegen met hartklachten? Lees alles over medische verklaringen, voorbereiding en tips voor een veilige vliegreis met een hartaandoening.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Vliegen met Hartklachten: Hoe bereidt u zich voor?"
      publishDate="2026-05-04"
      description="Voor reizigers met hartklachten kan een vliegreis spannend zijn. Met de juiste voorbereiding en medisch advies is vliegen in de meeste gevallen echter prima mogelijk."
    >
      <section className="prose prose-blue max-w-none">
        <p>
          Vliegen met hartklachten vraagt om extra aandacht. Of u nu herstellende bent van een ingreep of een chronische aandoening heeft, een goede voorbereiding zorgt voor rust en veiligheid tijdens de reis. In dit artikel bespreken we waar u op moet letten.
        </p>

        <h2>Mag u vliegen met hartklachten?</h2>
        <p>
          In de meeste gevallen is vliegen geen probleem, mits uw situatie stabiel is. Echter, de lagere luchtdruk en het lagere zuurstofgehalte in de cabine kunnen invloed hebben op uw hart. Overleg daarom **altijd** met uw cardioloog voordat u een vlucht boekt.
        </p>

        <h3>Wanneer is vliegen afgeraden?</h3>
        <ul>
          <li>Kort na een hartinfarct (meestal wordt 2 tot 4 weken rust geadviseerd).</li>
          <li>Bij instabiele angina pectoris (pijn op de borst in rust).</li>
          <li>Bij ernstig hartfalen.</li>
          <li>Direct na bepaalde hartoperaties of ingrepen zoals een bypass of stent-plaatsing.</li>
        </ul>

        <h2>Medische verklaring en Medicatie</h2>
        <p>
          Zorg dat u een actueel overzicht van uw medicijnen bij u heeft (het Europees Medisch Paspoort). Neem voldoende medicatie mee in uw handbagage, voor het geval uw koffer vertraagd is. Sommige hartmedicatie valt onder de Opiumwet; hiervoor heeft u een officiële verklaring nodig.
        </p>

        <h2>Tips voor tijdens de vlucht</h2>
        <p>
          Tijdens de vlucht kunt u zelf veel doen om uw hart te ontlasten:
        </p>
        <ul>
          <li><strong>Blijf bewegen:</strong> Loop regelmatig een stukje door het gangpad om de bloedsomloop te stimuleren en trombose te voorkomen.</li>
          <li><strong>Drink voldoende water:</strong> De lucht in een vliegtuig is erg droog. Vermijd alcohol en te veel cafeïne.</li>
          <li><strong>Draag steunkousen:</strong> Indien geadviseerd door uw arts, kunnen compressiekousen helpen om vochtophoping in de benen te beperken.</li>
          <li><strong>Meld uw situatie:</strong> Laat het cabinepersoneel weten dat u hartpatiënt bent. Zij zijn getraind om eerste hulp te verlenen en weten waar de AED zich bevindt.</li>
        </ul>

        <h2>Assistentie op de luchthaven</h2>
        <p>
          Lange afstanden lopen op Schiphol of een andere luchthaven kan belastend zijn. Maak gebruik van de gratis luchthavenassistentie. U wordt dan met een rolstoel of elektrisch karretje naar de gate gebracht, wat u veel energie bespaart.
        </p>

        <h2>Conclusie</h2>
        <p>
          Vliegen met hartklachten is vaak heel goed mogelijk, mits u vooraf groen licht krijgt van uw arts en de nodige voorzorgsmaatregelen neemt. Een goede planning is het halve werk. Wilt u hulp bij de voorbereiding of zoekt u een reisbegeleider die medisch onderlegd is? Vliegklaar staat voor u klaar.
        </p>
      </section>
    </BlogLayout>
  );
}
