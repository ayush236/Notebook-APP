import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, settitle] = useState("");
  const [value, setvalue] = useState("");
  // use to read the query string parameter of url
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  function createPaste() {}

  return (
    <div>
      <div className="flex justify-center place-content-between">
        <input
          className=" bg-black m-7 p-5 text-amber-50 rounded-4xl w-[40%]"
          type="text"
          placeholder="enter title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className="bg-amber-500 mt-8 rounded-3xl h-fit p-3"
        >
          {pasteId ? "Update paste" : "Create paste"}
        </button>
      </div>

      <div className=" flex justify-center ">
        <textarea
          className="bg-amber-950 text-amber-50 w-3xl rounded-4xl p-7"
          placeholder="enter contain"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
