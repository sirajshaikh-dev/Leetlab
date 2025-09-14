import React, { useState, useMemo } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Bookmark, PencilIcon, Trash, TrashIcon, Plus, OptionIcon } from "lucide-react";


const ProblemTable = ({ problems }) => {
  const { authUser } = useAuthStore()
  const [search, setSearch] = useState("")
  const [difficulty, setDifficulty] = useState("ALL")
  const [selectedTag, setSelectedTag] = useState("ALL")
  const [currentPage, setCurrentPage] = useState(1)

  const allTags = useMemo(() => {
    if (!Array.isArray(problems)) return []
    const tagSet = new Set()

    problems.forEach((p) => p.tags?.forEach((t) => tagSet.add(t)))
    return Array.from(tagSet)
  }, [problems])

  // console.log(allTags);

  const difficulties = ["EASY", "MEDIUM", "HARD"]

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Problems</h2>
        <button
          className="btn btn-primary gap-2"
          onClick={() => { }}
        >
          <Plus className="w-4 h-4" />
          Create Playlist
        </button>
      </div>

      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <input type="text"
          placeholder="Search By Title"
          className="input input-bordered w-full md:w-1/3 bg-base-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered bg-base-200"
          value={difficulty}
          onChange={(e) => { setDifficulty(e.target.value) }}
        >
          <option value={"ALL"}> All Difficulties</option>
          {difficulties.map((diff) => (
            <option key={diff} value={diff}>
              {diff.charAt(0).toUpperCase() + diff.slice(1).toLowerCase()}
            </option>
          ))}
        </select>

        <select
          className="select select-bordered bg-base-200"
          value={selectedTag}
          onChange={(e) => { setSelectedTag(e.target.value) }}
        >
          <option value={"ALL"}>All Tags</option>
          {
            allTags.map((tag) => (
              <option key={tag} value={tag}>
                {/* {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()} */}
                {
                  tag
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")

                }
              </option>
            ))
          }
        </select>
      </div>


    </div>
  )
}

export default ProblemTable