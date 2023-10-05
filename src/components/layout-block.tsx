import cn from "classnames";
import { ReactNode } from "react";

type Props = {
  className?: string;
  id: string;
  children: ReactNode;
};

export const LayoutBlock = ({ className, id, children }: Props) => {
  return (
    <div id={id} className={cn("py-16 lg:py-20", className)}>
      {children}
    </div>
  );
};
