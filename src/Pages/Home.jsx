import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addTopastes, updateTopastes } from "../Redux/pasteSlice";

const Home = () => {
  const [title, settitle] = useState("");
  const [value, setvalue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  const Allpaste = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    const paste = Allpaste.find((p) => p._id === pasteId);
    if (paste) {
      settitle(paste.title);
      setvalue(paste.contain);
    }
  }, [pasteId, Allpaste]); // Added pasteId to dependency for better reactivity

  function createPaste() {
    const paste = {
      title: title,
      contain: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      dispatch(updateTopastes(paste));
    } else {
      dispatch(addTopastes(paste));
    }
    setSearchParams({});
    setvalue("");
    settitle("");
  }

  return (
    <div className="min-h-screen bg-zinc-900 py-10 px-4 md:px-0">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* Input and Button Container */}
        <div className="flex flex-row gap-4 w-full">
          <input
            className="flex-1 bg-zinc-800 text-zinc-100 p-4 px-6 rounded-xl border border-zinc-700 
                       focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-lg"
            type="text"
            placeholder="Enter title here..."
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <button
            onClick={createPaste}
            className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-bold py-4 px-8 
                       rounded-xl transition-all active:scale-95 shadow-lg whitespace-nowrap"
          >
            {pasteId ? "Update My Paste" : "Create My Paste"}
          </button>
        </div>

        {/* Textarea Container */}
        <div className="relative group">
          <textarea
            className="w-full bg-zinc-800 text-zinc-200 p-8 rounded-2xl border border-zinc-700 
                       focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all 
                       shadow-2xl min-h-125 resize-none"
            placeholder="Write your content here..."
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            rows={20}
          />
          {/* Subtle decoration for the editor feel */}
          <div className="absolute top-4 right-4 text-zinc-500 text-sm font-mono uppercase tracking-widest pointer-events-none">
            Editor
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;