import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Section } from "./Section";

function Presentation() {
  return (
    <Section
      id="about"
      className="max-lg:flex-col-reverse max-lg:items-center max-lg:justify-center max-lg:gap-8"
    >
      <div className="w-5/6 flex flex-col items-center justify-center">
        <div className="w-7/12 max-lg:w-full flex flex-col gap-6">
          <h2 className="text-3xl text-primary-foreground">
            CRÉÉ DE A À Z PAR...
          </h2>
          <div>
            <h3 className="text-xl mb-3 text-primary-foreground">Stan D.</h3>
            <p>
              Développeur web et passionné de design. En 2024, j'ai développé
              plusieurs projets web et créé des formations reconnues pour leur
              qualité.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-primary-foreground">
              Pourquoi avoir fait ce projet ?
            </h3>
            <p>
              En développant des projets divers et en travaillant avec des
              clients, j'ai constaté l'importance d'une approche structurée et
              bien conçue. J'ai donc décidé de créer cette formation pour
              moi-même afin de disposer d'une base solide pour mes futurs
              projets.
            </p>
          </div>
          <div>
            <p className="mb-3 text-primary-foreground">
              J'ai choisi de partager cette formation pour plusieurs raisons :
            </p>
            <ul className="space-y-1 list-disc list-outside pl-8">
              <li>
                Parce que de nombreux professionnels cherchent des ressources
                fiables et bien structurées.
              </li>
              <li>
                Pour construire une communauté de passionnés de design et de
                développement.
              </li>
              <li>
                Pour aider les personnes à améliorer leurs compétences et créer
                des projets de qualité.
              </li>
              <li>
                Parce que trop de projets échouent faute de bonnes pratiques et
                de méthodologies adaptées.
              </li>
              <li>
                Pour offrir une solution originale et efficace face aux options
                existantes.
              </li>
            </ul>
          </div>

          <p className=" text-primary-foreground">
            Je suis impatient de voir les créations que tu réaliseras avec cette
            formation.
          </p>
        </div>
      </div>
      <div className="w-5/12 flex justify-center items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </Section>
  );
}

export default Presentation;
