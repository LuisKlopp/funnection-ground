import { ChangeEvent } from "react";

import { cn } from "@/lib/utils";

interface InputProps {
  type?: "nickname" | "mbti" | "answer";
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({
  placeholder,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <input
        className={cn(
          "input-custom box-shadow-03 rounded-lg bg-white",
          className
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
