import { Section } from "./Section";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const commentaires1 = [
  {
    quote:
      "Une formation complète et détaillée. J'ai appris énormément sur le design et la création de maquettes. Merci beaucoup !",
    name: "Jean Dupont",
    title: "Formation en Design",
  },
  {
    quote:
      "Les cours sont très bien structurés et faciles à suivre. Quelques sections pourraient être un peu plus approfondies, mais globalement, c'est excellent.",
    name: "Sophie Martin",
    title: "Formation en Design",
  },
  {
    quote:
      "Je recommande cette formation à tous ceux qui veulent se lancer dans le design. Les explications sont claires et les exemples pratiques très utiles.",
    name: "Lucas Lefevre",
    title: "Formation en Design",
  },
  {
    quote:
      "Très bonne formation avec beaucoup de contenu intéressant. J'ai particulièrement apprécié les cours sur le prototypage et le wireframing.",
    name: "Marie Laurent",
    title: "Formation en Design",
  },
  {
    quote:
      "Excellente formation ! Les vidéos sont bien faites et le formateur est très pédagogue. J'ai pu créer mon premier prototype en un rien de temps.",
    name: "Antoine Girard",
    title: "Formation en Design",
  },
  {
    quote:
      "Les cours sont très instructifs et bien organisés. Quelques vidéos sont un peu longues, mais la qualité du contenu compense largement.",
    name: "Clara Dubois",
    title: "Formation en Design",
  },
  {
    quote:
      "Formation très professionnelle avec des exemples concrets. J'ai pu appliquer immédiatement ce que j'ai appris à mes projets personnels.",
    name: "Thomas Bernard",
    title: "Formation en Design",
  },
];

const commentaires2 = [
  {
    quote:
      "Le contenu est bon mais j'aurais aimé plus d'exemples pratiques et de cas d'études réels. Bon pour les débutants mais pas assez approfondi pour les intermédiaires.",
    name: "Elodie Moreau",
    title: "Formation en Design",
  },
  {
    quote:
      "Formation très complète ! Les explications sont claires et les supports de cours sont excellents. Idéal pour maîtriser le design de bout en bout.",
    name: "Julien Lefebvre",
    title: "Formation en Design",
  },
  {
    quote:
      "Bonne formation avec une pédagogie efficace. J'aurais apprécié plus d'exemples interactifs, mais les exercices sont très bien conçus.",
    name: "Hélène Dubois",
    title: "Formation en Design",
  },
  {
    quote:
      "Les cours sont bien conçus et couvrent tous les aspects essentiels du design. Cependant, certaines sections pourraient être mises à jour avec les dernières tendances.",
    name: "Léonard Petit",
    title: "Formation en Design",
  },
  {
    quote:
      "Formation solide avec des bases solides. J'ai particulièrement apprécié les ressources supplémentaires et les conseils pratiques pour améliorer mon travail.",
    name: "Amandine Renault",
    title: "Formation en Design",
  },
  {
    quote:
      "Le formateur est très compétent et les cours sont bien structurés. Quelques modules pourraient être plus détaillés, mais globalement, c'est très utile.",
    name: "Olivier Martin",
    title: "Formation en Design",
  },
  {
    quote:
      "Une bonne introduction au design. Les explications sont claires, mais le contenu pourrait être plus approfondi pour les utilisateurs avancés.",
    name: "Pauline Lefevre",
    title: "Formation en Design",
  },
  {
    quote:
      "Très bon rapport qualité-prix. Les cours sont complets et offrent une bonne base pour démarrer dans le design. Les exercices pratiques sont un plus.",
    name: "Yannick Brun",
    title: "Formation en Design",
  },
];

function Feedback() {
  return (
    <Section>
      <div className="w-5/6 flex flex-col items-center justify-center">
        <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={commentaires1}
            direction="right"
            speed="slow"
          />

          <InfiniteMovingCards
            items={commentaires2}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </Section>
  );
}

export default Feedback;
