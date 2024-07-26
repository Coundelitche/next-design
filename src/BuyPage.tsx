import BuyHeader from "./components/BuyHeader";
import { Section } from "./components/Section";
import BuyButtonComponent from "./components/stripe/BuyButtonComponent.js";
import { Card } from "./components/ui/card";
import { WavyBackground } from "./components/ui/Spotlight.js";

function BuyPage() {
  return (
    <>
      <Section className="h-screen overflow-y-hidden">
        <BuyHeader />
        <WavyBackground className="max-w-4xl mx-auto pb-40 w-full flex max-md:flex-col max-md:gap-8 justify-center items-center max-lg:gap-6 gap-24">
          <Card className="w-1/2 max-lg:w-full max-lg:mt-32 min-w-[450px] p-6 bg-card/90">
            <p className="text- text-lg text-primary-foreground mb-6">
              Rejoignez les 470 créateurs passionnés qui ont déjà adopté Next
              Design pour transformer leurs idées en réalisations concrètes.
              Notre communauté grandissante témoigne de la qualité et de
              l'efficacité de nos outils et formations.
            </p>
            <p className="text- text-md text-secondary mb-6">
              Plus besoin de partir de zéro, nous avons tout prévu pour vous
              faciliter la tâche.
            </p>
            <p className="text- text-md text-secondary mb-6">
              En rejoignant notre communauté, vous bénéficierez également d'un
              support continu et de conseils personnalisés pour optimiser vos
              créations.
            </p>
            <p>
              Nous croyons en la puissance de la collaboration et en
              l'importance de partager nos connaissances pour aider chacun à
              atteindre ses objectifs.
            </p>
            <p className="text- text-md text-secondary font-bold mb-6">
              Ne manquez pas cette opportunité de passer à l'étape supérieure
              dans votre parcours de créateur. Profitez dès maintenant de notre
              offre spéciale et commencez à réaliser vos projets avec des outils
              et des connaissances de pointe. Nous avons hâte de voir ce que
              vous allez accomplir !
            </p>
            <p className="text- text-md text-primary-foreground font-bold mb-6">
              Passez à l'action aujourd'hui et faites partie de notre communauté
              inspirante !
            </p>
          </Card>
          <BuyButtonComponent />
        </WavyBackground>
      </Section>
    </>
  );
}

export default BuyPage;
