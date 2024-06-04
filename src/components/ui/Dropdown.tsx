import { useEffect, useRef, useState } from "react";
import { IoIosMore } from "react-icons/io";

export const Dropdown = () => {
  const buttonRef = useRef();
  const menuRef = useRef();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        ref={buttonRef}
        className="hover:bg-gray-300 rounded-full p-1.5 relative"
      >
        <IoIosMore />
      </button>
      {open && (
        <ul
          ref={menuRef}
          className="flex flex-col px-4 py-4 absolute bg-blue-50 shadow-lg rounded-xl -left-20 top-10 z-10 transition"
        >
          <li
            onClick={() => setOpen(false)}
            className="cursor-poiner hover:bg-gray-300 p-2 px-4 rounded"
          >
            <div className="cursor-pointer text-nowrap">Set Finished</div>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="cursor-poiner hover:bg-gray-300 p-2 px-4 rounded"
          >
            <div className="cursor-pointer text-nowrap">Delete</div>
          </li>
        </ul>
      )}
    </div>
  );
};
