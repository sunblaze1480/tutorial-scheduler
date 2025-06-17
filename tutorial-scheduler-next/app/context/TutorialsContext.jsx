"use client"

import { createContext, useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TutorialsContext = createContext();

export function TutorialsProvider({ children }) {
  const [tutorials, setTutorials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load tutorials from localStorage on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      const storedTutorials = JSON.parse(localStorage.getItem("tutorials") || "[]");
      setTutorials(storedTutorials);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Add a new tutorial
  const addTutorial = (tutorialData) => {
    const newTutorial = {
      ...tutorialData,
      id: uuidv4()
    };
    
    const updatedTutorials = [...tutorials, newTutorial];
    setTutorials(updatedTutorials);
    localStorage.setItem('tutorials', JSON.stringify(updatedTutorials));
    return newTutorial;
  };

  // Update tutorial status
  const updateTutorialStatus = (id, status) => {
    const updated = tutorials.map((tut) => 
      tut.id === id ? {...tut, status} : tut
    );
    setTutorials(updated);
    localStorage.setItem("tutorials", JSON.stringify(updated));
  };

  return (
    <TutorialsContext.Provider value={{ 
      tutorials, 
      isLoading, 
      addTutorial,
      updateTutorialStatus
    }}>
      {children}
    </TutorialsContext.Provider>
  );
}

export function useTutorials() {
  return useContext(TutorialsContext);
}