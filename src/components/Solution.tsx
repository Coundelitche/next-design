"use client";
import { cn } from "@/lib/utils";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import EditPhoto from "../assets/Edit-photo.png";
import { Section } from "./Section";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function Solution() {
  return (
    <Section id="description">
      <div className="w-5/6 flex flex-col items-center justify-center">
        <h2 className="text-4xl text-primary-foreground mb-12">
          Avec Next Design, faites des design de PRO
        </h2>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </Section>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Créez des maquettes interactives et des prototypes fonctionnels.
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <img src={EditPhoto} alt="" className="h-full" />
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-between"
      >
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Explorez les outils de design.
        </p>
        <p className="border border-red-500 bg-red-100 text-red-600 text-xs rounded-full px-2 py-0.5 mt-9">
          Débutant
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-between">
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Utilisez des outils de design pour le wireframing.
        </p>
        <p className="border border-green-500 bg-green-100 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Avancé
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-between"
      >
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Maîtrisez la création de prototypes interactifs.
        </p>
        <p className="border border-orange-500 bg-orange-100 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Expert
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start text-center space-x-2 bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Approfondissez vos compétences en design.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-center  ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Créez des wireframes fonctionnels.
        </p>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Maquettes interactives",
    description: (
      <span className="text-sm">Créez des maquettes interactives.</span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Correction de design",
    description: (
      <span className="text-sm">
        Utilisez des outils de correction automatisée.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Suggestions de design",
    description: (
      <span className="text-sm">Recevez des suggestions de design.</span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Analyse visuelle",
    description: (
      <span className="text-sm">
        Comprenez les éléments visuels de votre design avec des outils
        d'analyse.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Résumé de design",
    description: (
      <span className="text-sm">Résumez les aspects clés de vos designs.</span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
