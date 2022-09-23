import { forwardRef, ForwardRefRenderFunction } from "react";
import { InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: FieldValues | null;
  icon?: IconType;
  onActiveIcon?(): void;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ label, name, error, onActiveIcon, icon: Icon, ...rest }, ref) => {
    return (
      <div className="flex flex-col mb-6 w-[100%]">
        <div className="flex items-center flex-1 justify-between">
          {label && (
            <label htmlFor={label} className=" text-zinc-500 text-sm mb-1">
              {label}
            </label>
          )}

          {error && (
            <span className="text-xs text-red-500 font-medium">
              {error.message}
            </span>
          )}
        </div>

        <div className="relative">
          {Icon && (
            <Icon
              className={
                onActiveIcon
                  ? `absolute right-6 top-[30%] text-slate-500 hover:cursor-pointer`
                  : `absolute right-6 top-[30%] text-slate-500`
              }
              onClick={onActiveIcon}
            />
          )}
          <input
            {...rest}
            ref={ref}
            name={name}
            className="w-[100%] h-11 bg-white border-[1px] border-zinc-300 rounded px-4"
          />
        </div>
      </div>
    );
  };

export const Input = forwardRef(InputBase);
