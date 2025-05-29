import { MouseEvent } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  buttonTitle: string;

  onClick: (e: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  className?: string;
  disabled?: boolean;
  boxClassName?: string;
}

export const Button = ({
  buttonTitle,
  onClick,
  className,
  disabled,
  boxClassName,
}: ButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick(e);
  };

  return (
    <div className={cn("flex w-full justify-center", boxClassName)}>
      <button
        onClick={handleClick}
        type="button"
        className={cn(
          "button-base w-[70%] rounded-lg bg-slate-600 p-4 text-base font-semibold text-white",
          {
            "pointer-events-none bg-slate-400": disabled,
          },
          className
        )}
        disabled={disabled}
      >
        {buttonTitle}
      </button>
    </div>
  );
};
