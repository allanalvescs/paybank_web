interface Props {
  label: string;
  value: string | number;
}

export function InforItem({ label, value }: Props) {
  return (
    <div className="flex flex-col items-start justify-center mb-16 w-54">
      <label className="text-zinc-50 text-[15px] w-40">{label}</label>
      <span className="font-extrabold text-white ">{value}</span>
    </div>
  );
}
