import React, { createContext, useState } from 'react';

const ScheduleContext = createContext(null);

export function ScheduleProvider({ children }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showProgResults, setShowProgResults] = useState(false);
  const [numOfCourts, setNumOfCourts] = useState(0);
  const [numOfRounds, setNumOfRounds] = useState(0);
  const [teams, setTeams] = useState([]);

  const reset = () => {
    setNumOfCourts(0);
    setNumOfRounds(0);
    setShowProgResults(false);
    setTeams([]);
  };

  const generate = async () => {
    if (!teams.length) {
      return;
    }

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          numOfCourts,
          numOfRounds,
          showProgResults,
          teams,
        }),
      });
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <ScheduleContext.Provider value={{
      numOfCourts,
      setNumOfCourts,
      numOfRounds,
      setNumOfRounds,
      showProgResults,
      setShowProgResults,
      teams,
      addTeam: team => setTeams([...teams, team]),
      reset,
      generate,
    }}>
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleContext;