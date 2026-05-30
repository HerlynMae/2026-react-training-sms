import React from "react";
import {
  FaArchive,
  FaEdit,
  FaTrash,
  FaTrashRestore,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const ClassCard = ({
  gradeSection,
  name,
  value,
  status,
}) => {
  const [IsOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm overflow-hidden border ${status === "archived" ? "border-gray-200 opacity-75" : "border-transparent"}`}
    >
      {/* Header */}
      <div className="border-b px-5 py-4 flex justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-black/80 font-bold">{gradeSection}</p>
            <span className="statusBadge statusActive">Active</span>
          </div>

          <span className="w-fit text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">
            2023-2024
          </span>
        </div>
        <div></div>
        {/* action */}

        <div className="relative">
          <button
            onClick={() => setIsOpen(!IsOpen)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FiMoreVertical size={16} />
          </button>
          {IsOpen && (
            <div className="absolute right-0 top-8 z-50 w-44 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              {status ? (
                <>
                  <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer">
                    <FaEdit className="size-4" />
                    Edit
                  </button>
                  <div className="border-t border-gray-100" />
                  <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors cursor-pointer">
                    <FaArchive className="size-4" />
                    Archive
                  </button>
                </>
              ) : (
                <>
                  <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors cursor-pointer">
                    <FaTrashRestore className="size-4" />
                    Restore
                  </button>
                  <div className="border-t border-gray-100" />
                  <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                    <FaTrash className="size-4" />
                    Delete
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <ul className="flex justify-between mb-3">
          <li className="text-gray-600 flex items-center gap-2">
            <FaUserTie />
            <span>Adviser:</span>
          </li>
          <li className="font-medium text-sm">{name}</li>
        </ul>

        <ul className="flex justify-between mb-4">
          <li className="text-gray-600 flex items-center gap-2">
            <FaUsers />
            <span>Students:</span>
          </li>
          <li className="font-medium text-sm">{value}</li>
        </ul>

        <div className="flex gap-3">
          <button className="flex-1 border border-blue-500 text-black/80 py-2 rounded-xl text-sm cursor-pointer hover:bg-blue-50 transition-colors">
            View Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
