import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFrompastes } from "../Redux/pasteSlice";
import toast from "react-hot-toast";

const Pastes = () => {
  const Pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, SetsearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterData = Pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );



function handleDelete(pasteId){
  dispatch(removeFrompastes(pasteId))
}

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
            <div key={paste._id} className="border p-3.5 rounded-2xl place-items-center flex flex-col gap-2">
              <div>{paste.title}</div>
              <div>{paste.contain}</div>
              <div className="flex gap-3  ">
                <button  
                className="bg-black text-white font-semibold p-3 rounded max-w-fit">
                  Edit
                </button>
                <button 
                onClick={()=>handleDelete(paste?._id)}
                className="bg-black text-white font-semibold p-3 rounded max-w-fit">
                  Delete
                </button>
                <button className="bg-black text-white font-semibold p-3 rounded max-w-fit">
                  view
                </button>
                <button 
                className="bg-black text-white font-semibold p-3 rounded max-w-fit">
                  share
                </button>
                <button 
                onClick={()=>{
                  navigator.clipboard.writeText(paste?.contain)
                  toast.success("copying is success")
                }}
                className="bg-black text-white font-semibold p-3 rounded max-w-fit">
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
