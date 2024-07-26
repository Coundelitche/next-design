import Amico from "../assets/Amico.png";
import Model from "../assets/model.png";
import Prototype from "../assets/prototype.png";
import Skills from "../assets/skills.png";
import Techno from "../assets/techno.png";
import { Section } from "./Section";
import { Badge } from "./ui/badge";

function Description() {
  return (
    <Section id="features">
      <div className="w-5/6 max-md:gap-16 gap-6 flex flex-col items-center justify-center ">
        <div className="text-center w-2/3 max-md:w-full flex flex-col justify-center items-center mb-12">
          <Badge>🚀 Et bien plus encore!</Badge>
          <h2 className="text-2xl text-primary-foreground my-3">
            Bien plus qu'une méthode de création, une véritable formation pour
            maîtriser chaque étape du processus.
          </h2>
          <h3 className="text-md text-secondary mb-3 w-5/6">
            Non seulement tu obtiendras un modèle de design complet pour
            commencer tes projets, mais je vais aussi t'expliquer comment
            l'utiliser efficacement et l’adapter à tes besoins spécifiques.
          </h3>
        </div>

        <div className="flex max-md:flex-col max-md:w-full max-md:gap-0 justify-between items-center">
          <div className="w-5/12 max-md:w-full">
            <img src={Amico} alt="Configuration Initiale" />
          </div>
          <div className="w-6/12 max-md:w-full">
            <Badge className="bg-[#5D3464]">🔨 Configuration Initiale</Badge>
            <h3 className="text-xl text-primary-foreground my-3">
              Crée un design qui te ressemble dès le départ
            </h3>
            <p>
              Je te guide à travers le processus de configuration de ton projet
              de design : personnalisation des couleurs, des typographies, et
              des éléments visuels. Peu importe ton niveau, je vais t’aider à
              créer un design qui te ressemble.
            </p>
          </div>
        </div>

        <div className="flex max-md:flex-col-reverse max-md:w-full max-md:gap-0  justify-between items-center ">
          <div className="w-6/12 max-md:w-full">
            <Badge>🎨 Création de Prototypes</Badge>
            <h3 className="text-xl text-primary-foreground my-3">
              Transforme tes idées en maquettes interactives
            </h3>
            <p>
              ✨ Inclus dans notre formation de design. Accède à des modèles et
              des ressources pour créer des prototypes interactifs rapidement.
              Je te montre comment utiliser des outils de design pour
              transformer tes idées en maquettes fonctionnelles.
            </p>
          </div>
          <div className="w-5/12 max-md:w-full">
            <img src={Prototype} alt="Création de Prototypes" />
          </div>
        </div>

        <div className="flex max-md:flex-col max-md:w-full max-md:gap-0  justify-between items-center">
          <div className="w-5/12 max-md:w-full">
            <img src={Model} alt="Templates et Ressources" />
          </div>
          <div className="w-6/12 max-md:w-full">
            <Badge className="bg-[#CC9F1F]">✂️ Templates et Ressources</Badge>
            <h3 className="text-xl text-primary-foreground my-3">
              Gagne du temps avec des modèles et des ressources utiles
            </h3>
            <p>
              Accélère ton processus de design avec des templates préconçus et
              des ressources utiles. J’ai conçu des templates pour différents
              types de projets, te permettant de gagner du temps et d'améliorer
              ton flux de travail.
            </p>
          </div>
        </div>

        <div className="flex max-md:flex-col-reverse max-md:w-full max-md:gap-0  justify-between items-center">
          <div className="w-6/12 max-md:w-full">
            <Badge className="bg-[#60926e]">
              📚 Formation Complète en Design
            </Badge>
            <h3 className="text-xl text-primary-foreground my-3">
              Maîtrise les dernières tendances et outils en design
            </h3>
            <p>
              J’exploite les dernières tendances et outils en design pour te
              fournir une formation à la pointe. Tu apprendras à utiliser les
              meilleures pratiques en design d’interfaces, de l’esquisse
              initiale jusqu’à la réalisation finale.
            </p>
          </div>
          <div className="w-5/12  max-md:w-full">
            <img src={Techno} alt="Formation Complète en Design" />
          </div>
        </div>

        <div className="flex max-md:flex-col max-md:w-full max-md:gap-0  justify-between items-center">
          <div className="w-5/12  max-md:w-full">
            <img src={Skills} alt="Personnalisation Avancée" />
          </div>
          <div className="w-6/12 max-md:w-full">
            <Badge className="bg-[#9B6DA3]">🚀 Personnalisation Avancée</Badge>
            <h3 className="text-xl text-primary-foreground my-3">
              Affûte tes compétences avec des techniques de design avancées
            </h3>
            <p>
              Développe tes compétences en design avec des techniques avancées.
              Je t’explique comment personnaliser chaque aspect de ton design
              pour qu'il corresponde parfaitement à tes besoins et à ceux de tes
              clients.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Description;
