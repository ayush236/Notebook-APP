import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Views = () => {
  const { id } = useParams();
  const Allpastes = useSelector((state) => state.paste.pastes);

  const paste = Allpastes.find((p) => p._id === id);

  // Safety check if paste isn't found
  if (!paste) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <h2 className="text-2xl text-zinc-400 font-semibold">Paste not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* Header Section */}
        <div className="flex flex-row justify-between items-center bg-zinc-800 p-4 px-6 rounded-xl border border-zinc-700 shadow-lg">
          <input
            className="bg-transparent text-zinc-100 text-xl font-semibold focus:outline-none w-full cursor-default"
            type="text"
            placeholder="Title"
            value={paste.title}
            disabled
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(paste?.contain);
              toast.success("Copied to clipboard");
            }}
            className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-bold py-2 px-6 rounded-lg transition-all active:scale-95 shadow-md whitespace-nowrap"
          >
            Copy Content
          </button>
        </div>

        {/* Content Area */}
        <div className="relative group bg-zinc-800 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden">
          {/* Subtle Editor Header Decoration */}
          <div className="w-full bg-zinc-700/30 px-6 py-3 flex items-center justify-between border-b border-zinc-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
              Read-Only
            </span>
          </div>

          <textarea
            className="w-full bg-transparent text-zinc-200 p-8 focus:outline-none cursor-default resize-none leading-relaxed font-mono text-sm md:text-base"
            value={paste.contain}
            disabled
            rows={20}
          />
        </div>

        {/* Footer info */}
        <div className="text-zinc-500 text-sm flex justify-end px-2">
           Created on: {new Date(paste.createdAt).toLocaleDateString()}
        </div>
        
      </div>
    </div>
  );
};

export default Views;