import DesignTools from "../assets/graphic-tools.png";
import { CTA } from "./CTA";
import { AnimatedTooltipPreview } from "./PhotoPeople";
import { Section } from "./Section";

function Hero() {
  return (
    <Section className="flex mt-10">
      <div className="w-5/6 flex max-md:flex-col-reverse max-md:gap-8 justify-between items-center">
        <div className="w-1/2 max-md:w-full flex flex-col ">
          <h2 className="text-4xl text-primary-foreground mb-1">
            Transforme tes idées en Design de PRO
          </h2>
          <h3 className="text-xl text-primary-foreground mb-3">
            Quelleque soit ton éxperience !
          </h3>
          <p className="mb-6">
            De l'idée à l'exécution, Next Design t'accompagne dans chaque étape
            de ton projet de design. Profite de formations complètes pour créer
            des prototypes et des maquettes fonctionnels, du concept initial
            jusqu'à la réalisation finale.
          </p>

          <CTA className="w-1/2 max-md:w-full" />
          <p className="mt-6 text-teal-400 ">
            <span className="rounded-full w-3 h-3 bg-teal-400 inline-block mr-2">
              {" "}
            </span>
            -59€ pour les 500 premiers membres (23 places restantes)
          </p>
          <div className="my-6 flex justify-start items-center">
            <AnimatedTooltipPreview />
            <p className="text-primary-foreground">
              477 personnes sont déjà inscrites
            </p>
          </div>
        </div>
        <div className="w-1/2 max-md:w-full max-md:justify-center flex justify-end items-center">
          <img src={DesignTools} className="-5/6" alt="" />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
