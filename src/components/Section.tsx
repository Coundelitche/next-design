import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (
  props: PropsWithChildren<{ className?: string; id?: string }>
) => {
  return (
    <section
      className={cn(props.className, "w-full px-20 py-16 flex justify-center")}
      id={props.id}
    >
      {props.children}
    </section>
  );
};
