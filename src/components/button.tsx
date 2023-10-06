import cn from "classnames";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const baseCn = cn(
  "rounded-lg inline-flex cursor-pointer justify-center px-5 py-3 text-white bg-violet-600 text-base tracking-wider font-bold",
  "transition-colors duration-300 hover:bg-violet-800",
);

export const ButtonLink = ({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a {...props} className={cn(baseCn, className)} />;
};

export const Button = ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={cn(baseCn, className)} />;
};
