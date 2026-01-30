import { createContext, useContext, useEffect, useState } from "react";

const StoryContext = createContext();

const STORY_LIFETIME = 24 * 60 * 60 * 1000; 

export const StoryProvider = ({ children }) => {
  const [stories, setStories] = useState(() => {
    const savedStories = localStorage.getItem("stories");
    return savedStories ? JSON.parse(savedStories) : [];
  });


  const removeExpiredStories = () => {
    const now = Date.now();

    setStories((prev) =>
      prev.filter((story) => {

        if (story.expiresAt) {
          return story.expiresAt > now;
        }

        
        if (story.createdAt) {
          return now - new Date(story.createdAt).getTime() < STORY_LIFETIME;
        }

        return false;
      })
    );
  };

  
  useEffect(() => {
    removeExpiredStories();
  }, []);

  
  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  
  useEffect(() => {
    const interval = setInterval(removeExpiredStories, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

 
  const addStory = (story) => {
    const now = Date.now();

    const storyWithExpiry = {
      ...story,
      createdAt: now,
      expiresAt: now + STORY_LIFETIME, 
    };

    setStories((prev) => [...prev, storyWithExpiry]);
  };

  
  const deleteStory = (id) => {
    setStories((prev) => prev.filter((story) => story.id !== id));
  };

  
  const clearStories = () => {
    setStories([]);
    localStorage.removeItem("stories");
  };

  return (
    <StoryContext.Provider
      value={{
        stories,
        addStory,
        deleteStory,
        clearStories,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export const useStory = () => useContext(StoryContext);
