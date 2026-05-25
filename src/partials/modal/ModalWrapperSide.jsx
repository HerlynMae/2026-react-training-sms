import React from "react";
import { handleEscape } from "../../functions/functions-general";

const ModalWrapperSide = ({
  children,
  handleClose,
  className = "",
  width = "w-[420px]",
  title = "",
}) => {
  const ref = React.useRef();
  handleEscape(() => handleClose());
  return (
    <>
      <div className="fixed inset-0 z-52 flex">
        {/* Overlay */}
        <div
          className="flex-1 h-full bg-black/40"
          onClick={handleClose}
          ref={ref}
        />

        {/* Sidebar Panel — anchored to the right */}
        <div
          className={`
          fixed top-0 right-0 h-full ${width}
          bg-white border-l border-gray-200 shadow-2xl
          transition-transform ease-in-out duration-200
          ${className}
        `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalWrapperSide;
