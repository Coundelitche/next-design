import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { BackgroundGradient } from "./ui/background-gradient";

export const CTA = (
  props: PropsWithChildren<{ className?: string; classNames?: string }>
) => {
  return (
    <div className={`${props.className} min-w-52`}>
      <Link to="/buy">
        <BackgroundGradient
          className={`${props.classNames} rounded-[22px] p-4 text-primary-foreground flex justify-center items-center`}
        >
          Rejoins Maintenant 🚀
        </BackgroundGradient>
      </Link>
    </div>
  );
};
