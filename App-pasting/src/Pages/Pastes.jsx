import React, { useState } from "react";
import { useSelector } from "react-redux";

const Pastes = () => {
  const Pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, SetsearchTerm] = useState("");

  const filterData = Pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div>
      <div className="mt-7 ml-[25%]">
        <input
          className="flex bg-black rounded-4xl p-4 w-[50%] text-xl text-white"
          type="search"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => SetsearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-5 mt-5 mx-7 ">
        {filterData.length > 0 &&
          filterData.map((paste) => (
            <div className="border p-3.5 rounded-2xl place-items-center flex flex-col gap-2">
              <div>{paste.title}</div>
              <div>{paste.contain}</div>
              <div className="flex gap-3  ">
                <button className="bg-black text-white font-semibold p-3 rounded max-w-fit">
                  Edit
                </button>
                <button className="bg-black text-white font-semibold p-3 rounded max-w-fit">
                  Delete
                </button>
                <button className="bg-black text-white font-semibold p-3 rounded max-w-fit">
                  view
                </button>
                <button className="bg-black text-white font-semibold p-3 rounded max-w-fit">
                  share
                </button>
                <button className="bg-black text-white font-semibold p-3 rounded max-w-fit">
                  copy
                </button>
              </div>
              <div>{paste.createdAt}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pastes;
