import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./Section";

function Faq() {
  return (
    <Section>
      <div className="w-5/6 flex max-lg:flex-col max-lg:items-center max-lg:gap-6 items-start justify-between ">
        <h2 className="text-6xl text-primary-foreground max-lg:text-center">
          Questions Fréquentes
        </h2>
        <div className="w-1/2 max-lg:w-full text-primary-foreground ">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>L'accès est-il à vie ?</AccordionTrigger>
              <AccordionContent>
                Oui, une fois inscrit, tu auras accès à toutes les formations
                que tu as choisies, ainsi qu'au contenu supplémentaire et aux
                mises à jour futures.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quelle est la différence entre votre formation et d'autres
                gratuites ?
              </AccordionTrigger>
              <AccordionContent>
                Nos formations sont conçues par des experts du secteur et
                offrent des ressources et des outils exclusifs, un support
                personnalisé, et un accès à une communauté active, ce qui n'est
                pas toujours le cas avec des formations gratuites.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Pourquoi utiliser certains outils spécifiques comme Figma ou
                Sketch dans vos formations ? Puis-je les remplacer ?
              </AccordionTrigger>
              <AccordionContent>
                Nous utilisons des outils spécifiques car ils sont largement
                utilisés dans l'industrie et offrent des fonctionnalités
                avancées. Toutefois, nous fournissons des conseils pour adapter
                les techniques aux outils que vous préférez utiliser.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Comment se passent les mises à jour des formations ?
              </AccordionTrigger>
              <AccordionContent>
                Lorsque des mises à jour sont disponibles, nous en informons les
                membres via email ou notifications sur notre plateforme. Tu
                pourras accéder aux nouvelles versions sans frais
                supplémentaires.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Puis-je obtenir un remboursement si je ne suis pas satisfait de
                la formation ?
              </AccordionTrigger>
              <AccordionContent>
                Nous offrons une garantie de remboursement de 30 jours si tu
                n'es pas satisfait de la formation. Pour plus de détails,
                consulte notre politique de remboursement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Je suis débutant en design, est-ce que cette formation est faite
                pour moi ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, nos formations sont conçues pour différents niveaux
                d'expérience, y compris les débutants. Nous fournissons des
                explications détaillées et des exercices pratiques pour t'aider
                à progresser.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
}

export default Faq;
