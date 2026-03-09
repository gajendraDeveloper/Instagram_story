import React, { useState, useEffect } from "react";
import { useStory } from "../context/StoryContext.jsx";
import FullView from "./FullView.jsx";

const StoryNavigation = () => {
  const { stories, addStory, clearStories } = useStory();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(null);

  const openStory = (index) => setCurrentStoryIndex(index);
  const closeStory = () => setCurrentStoryIndex(null);

  useEffect(() => {
    if (currentStoryIndex === null) return;

    const timer = setTimeout(() => {
      if (currentStoryIndex < stories.length - 1) {
        setCurrentStoryIndex((prev) => prev + 1);
      } else {
        closeStory();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentStoryIndex, stories.length]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newStory = {
      id: Date.now(),
      image: URL.createObjectURL(file),
      createdAt: new Date(),
    };

    addStory(newStory);
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex  gap-4 overflow-x-auto scrollbar-hide p-5 bg-black border-b border-red-600">
        <div className="relative  min-w-24 h-28 flex flex-col items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
            id="storyUpload"
          />

          <label
            htmlFor="storyUpload"
            className="w-24 h-full rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold cursor-pointer border-4 border-green-500"
          >
            +
          </label>

          <span className="text-xs mt-1 text-white">Add Story</span>
        </div>

        {stories.map((story, index) => (
          <div
            key={story.id}
            className="min-w-24 flex flex-col items-center cursor-pointer"
            onClick={() => openStory(index)}
          >
            <div className="w-24 h-24 rounded-full border-4 border-blue-500">
              <img
                src={story.image}
                alt="story"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
       <div className=" p-2">
      {stories.length > 0 && (
        <button
          onClick={clearStories}
          className=" bg-red-600 text-white px-4 py-2 rounded"
        >
          Clear All Stories
        </button>
      )}
      </div>

      {currentStoryIndex !== null && (
        <FullView
          currentStoryIndex={currentStoryIndex}
          setCurrentStoryIndex={setCurrentStoryIndex}
        />
      )}
    </div>
  );
};

export default StoryNavigation;
