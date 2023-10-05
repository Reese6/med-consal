import cn from "classnames";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ className, children }: Props) => {
  return <div className={cn("max-w-6xl mx-auto w-full px-4", className)}>{children}</div>;
};
