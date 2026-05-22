import React from "react";
import { FaUser, FaUsers, FaUserTie } from "react-icons/fa";

const ClassCard = ({ gradeSection, name, value }) => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* <!-- grade and section --> */}
        <div className="border-b px-5 py-4">
          <p className="text-black/80 font-bold">{gradeSection}</p>
        </div>
        {/* <!-- details and action --> */}
        <div className="p-5">
          {/* <!-- details --> */}
          <div>
            {/* <!-- adviser --> */}
            <ul className="flex justify-between mb-3">
              <li className="text-gray-600 flex items-center">
                <span className="mr-2">
                  <FaUserTie />
                </span>
                <p>Adviser:</p>
              </li>
              <li className="font-medium">{name}</li>
            </ul>
            {/* <!-- student --> */}
            <ul className="flex justify-between mb-3">
              <li className="text-gray-600 flex items-center">
                <span className="mr-2">
                  <FaUsers />
                </span>
                <p>Students:</p>
              </li>
              <li className="font-medium">{value}</li>
            </ul>
            {/* <!-- buttons --> */}
            <div className="flex gap-3">
              <button className="flex-1 border border-blue-500 text-black/80 py-2 rounded-xl text-sm cursor-pointer">
                View Class
              </button>

              <button className="flex-1 border border-gray-500 text-black/80 py-2 rounded-xl text-sm cursor-pointer">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
