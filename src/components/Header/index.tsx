import { useUser } from "../../Providers/User/Auth";

export function Header() {
  const { singOut } = useUser();
  return (
    <header className="w-[100%] h-24 flex justify-center items-center py-7 px-16 bg-slate-100">
      <div className="w-[80%] m-auto flex items-center justify-between">
        <div>
          <img
            src="https://www.controlle.com/assets/images/controlle.svg"
            className="w-40"
          />
        </div>

        <div className="flex items-center justify-around ">
          <button
            className="w-24 h-10 rounded-md text-base text-white bg-blue-500 font-medium hover:bg-blue-600"
            onClick={singOut}
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
