import DesignPana from "../assets/Design-Pana.png";
import { Section } from "./Section";

function Problem() {
  return (
    <Section>
      <div className="w-5/6 max-md:flex-col max-md:gap-8 flex justify-between items-center">
        <div className="w-1/2 max-md:w-full max-md:justify-center flex justify-start items-center">
          <img src={DesignPana} className="w-4/6" alt="" />
        </div>
        <div className="w-1/2 max-md:w-full flex flex-col ">
          <h2 className="text-4xl text-primary-foreground mb-1">
            90% des concepts de design restent à l'état de croquis.
          </h2>
          <h3 className="text-xl text-primary-foreground mb-3">
            Tous les designers veulent créer des designs exceptionnels. Très peu
            arrivent à les concrétiser !
          </h3>
          <p className="mb-6">
            <strong>Pourquoi ?</strong>
          </p>
          <ul className="mb-6 list-outside list-disc pl-4">
            <li>
              Être perdu dans l'infinité des choix de couleurs et de
              typographies
            </li>
            <li>
              Perdre des heures à chercher l'inspiration sans jamais la trouver
            </li>
            <li>
              Lutter avec les contraintes techniques qui rendent impossible la
              réalisation de votre vision
            </li>
            <li>
              Refaire le design 40 fois, pour finir avec quelque chose de banal
            </li>
            <li>
              Ne pas savoir comment convaincre les développeurs et les clients
              de la valeur de votre design
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Problem;
