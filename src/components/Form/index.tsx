import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  icon?: IconType;
}

export function Input({ label, name, icon: Icon, ...rest }: InputProps) {
  return (
    <div className="flex flex-col mb-6 w-[100%]">
      {label && (
        <label htmlFor={label} className="flex-1 text-zinc-500 text-sm mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && <Icon className="absolute right-6 top-[30%] text-slate-500" />}
        <input
          {...rest}
          name={name}
          className="w-[100%] h-11 bg-white border-[1px] border-zinc-300 rounded px-4"
        />
      </div>
    </div>
  );
}
