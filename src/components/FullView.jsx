import React from "react";
import { useStory } from "../context/storyContext";

const FullView = ({ currentStoryIndex, setCurrentStoryIndex }) => {
  const { stories, deleteStory } = useStory();


  const nextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1);
    } else {
      closeStory();
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1);
    }
  };
  const handleDeleteStory = () => {
    const storyId = stories[currentStoryIndex].id;
    deleteStory(storyId);

    if (stories.length === 1) {
      closeStory();
    } else if (currentStoryIndex >= stories.length - 1) {
      setCurrentStoryIndex((prev) => prev - 1);
    }
  };
  const closeStory = () => setCurrentStoryIndex(null);
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="absolute inset-0 flex">
        <div className="flex-1" onClick={prevStory}></div>
        <div className="flex-1" onClick={nextStory}></div>
      </div>

      <img
        src={stories[currentStoryIndex].image}
        alt="story"
        className="max-h-[90%] max-w-[90%] object-contain z-10"
      />

      <button
        onClick={closeStory}
        className="absolute top-5 right-5 text-white text-2xl z-10"
      >
        ✕
      </button>

      <button
        onClick={handleDeleteStory}
        className="absolute top-5 right-16 text-white text-sm z-10 bg-red-600 px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default FullView;
