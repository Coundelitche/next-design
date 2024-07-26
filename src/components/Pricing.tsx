import Logo from "../assets/Logo.png";
import { CTA } from "./CTA";
import { Section } from "./Section";
import { BackgroundGradient } from "./ui/background-gradient";
import { Badge } from "./ui/badge";

function Pricing() {
  return (
    <Section id="pricing">
      <div className="w-5/12 max-lg:w-full flex flex-col items-center justify-center">
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-card-gradient text-card w-full flex flex-col justify-center gap-6 text-lg">
          {" "}
          <div className="flex items-center justify-center gap-4 w-full">
            <img src={Logo} alt="Formation Design" className="w-12" />
            <h3 className="text-3xl font-bold w-1/2 min-w-44">
              Next Design BUNDLE
            </h3>
          </div>
          <div className="w-full">
            <h3 className="text-5xl flex items-center justify-start gap-3">
              <span className="line-through-red text-3xl text-card/65">
                158€
              </span>{" "}
              99€ <Badge className="bg-red-400/50 ">-193€</Badge>
            </h3>
            <p>Paiement en 3 fois de 33€ disponible</p>
          </div>
          <div>
            <ul className="list-image-[url(../../public/check.png)] space-y-2">
              <li>Tout ce qui est inclus dans Next Design</li>
              <li>Cours pour avoir des idées à l'infini</li>
              <li>Cours complet sur la création de maquettes</li>
              <li>Cours pour monétiser tes designs</li>
              <li>
                Cours sur TOUTES les features de Next Design (prototypage,
                wireframing, etc...) en vidéo
              </li>
              <li>Revu de mes designs en vidéo pour tout COMPRENDRE</li>
              <li>Explication de la structure du projet</li>
            </ul>
          </div>
          <CTA classNames="bg-background" />
        </BackgroundGradient>
      </div>
    </Section>
  );
}

export default Pricing;
