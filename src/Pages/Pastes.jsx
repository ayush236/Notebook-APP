import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFrompastes } from "../Redux/pasteSlice";
import toast from "react-hot-toast";

const Pastes = () => {
  const Pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, SetsearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterData = Pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFrompastes(pasteId));
    toast.success("Paste deleted");
  }

  const handleShare = async (paste) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: paste.title,
          text: paste.contain,
        });
        toast.success("Shared successfully");
      }
    } catch (error) {
      toast.error("Sharing failed");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 py-10 px-4 md:px-0">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Search Section */}
        <div className="w-full">
          <input
            className="w-full bg-zinc-800 text-zinc-100 p-4 px-6 rounded-xl border border-zinc-700 
                       focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-lg text-lg"
            type="search"
            placeholder="Search your pastes..."
            value={searchTerm}
            onChange={(e) => SetsearchTerm(e.target.value)}
          />
        </div>

        {/* List Header */}
        <div className="flex items-center justify-between border-b border-zinc-700 pb-4">
          <h1 className="text-4xl font-bold text-zinc-100">All Pastes</h1>
          <span className="text-zinc-500 font-mono">{filterData.length} Pastes</span>
        </div>

        {/* Pastes List */}
        <div className="flex flex-col gap-6">
          {filterData.length > 0 ? (
            filterData.map((paste) => (
              <div
                key={paste._id}
                className="group bg-zinc-800 border border-zinc-700 p-6 rounded-2xl hover:border-amber-500/50 transition-all shadow-xl"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  {/* Content Section */}
                  <div className="flex-1 space-y-3">
                    <h2 className="text-2xl font-semibold text-zinc-100 group-hover:text-amber-500 transition-colors">
                      {paste.title}
                    </h2>
                    <p className="text-zinc-400 line-clamp-3 text-sm leading-relaxed">
                      {paste.contain}
                    </p>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                       <span className="bg-zinc-900 px-3 py-1 rounded-full border border-zinc-700">
                         {new Date(paste.createdAt).toLocaleDateString()}
                       </span>
                    </div>
                  </div>

                  {/* Actions Section */}
                  <div className="flex flex-wrap md:flex-col gap-2 justify-start md:items-end">
                    <div className="flex gap-2 text-white">
                      <a
                        href={`/?pasteId=${paste?._id}`}
                        className="p-2 bg-zinc-900 border border-zinc-700 rounded-lg hover:text-amber-500 transition-all"
                        title="Edit"
                      >
                        Edit
                      </a>
                      <a
                        href={`/pastes/${paste?._id}`}
                        className="p-2 bg-zinc-900 border border-zinc-700 rounded-lg hover:text-blue-500 transition-all"
                        title="View"
                      >
                        View
                      </a>
                      <button
                        onClick={() => handleDelete(paste?._id)}
                        className="p-2 bg-zinc-900 border border-zinc-700 rounded-lg hover:text-red-500 transition-all"
                        title="Delete"
                      >
                        Delete
                      </button>
                  
                      <button
                        onClick={() => handleShare(paste)}
                        className="p-2 bg-zinc-900 border border-zinc-700 rounded-lg hover:text-green-500 transition-all"
                      >
                        Share
                      </button>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(paste?.contain);
                          toast.success("Copied to clipboard");
                        }}
                        className="p-2 bg-zinc-900 border border-zinc-700 rounded-lg hover:text-purple-500 transition-all"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-zinc-600">
              <p className="text-xl italic">No pastes found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pastes;