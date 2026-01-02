// import { useState } from "react";
const Navbar = () => {
  // const [open, setOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between px-24 h-20  border-b-2 border-gray-200 ">
      <div>
        <span class="material-symbols-outlined text-[48px]">menu</span>
      </div>

      <div className="absolute text-3xl left-1/2 transform -translate-x-1/2 font-bold text-center text-[#502414]">
        Burger King
      </div>

      <div className="flex items-center  gap-8">
        <div>User Icon</div>
        <div className="flex items-center gap-2 border-2 border-gray-300 px-4 py-2 rounded-4xl">
          <span>cart Icon</span>
          <p>View Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
