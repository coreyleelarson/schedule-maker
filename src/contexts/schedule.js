import React, { createContext, useReducer, useState } from 'react';

const ScheduleContext = createContext(null);

const defaultState = { numOfCourts: 0, numOfRounds: 0, showProgResults: false, teams: [] };

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_NUM_OF_COURTS':
      return { ...state, numOfCourts: parseInt(payload.numOfCourts, 10) };
    case 'SET_NUM_OF_ROUNDS':
      return { ...state, numOfRounds: parseInt(payload.numOfRounds, 10) };
    case 'SET_SHOW_PROG_RESULTS':
      return { ...state, showProgResults: payload.showProgResults };
    case 'ADD_TEAM':
      return { ...state, teams: [...state.teams, payload.team] };
    case 'REMOVE_TEAM':
      return { ...state, teams: [...state.teams.filter(team => team !== payload.team) ] };
    case 'RESET':
      return defaultState;
    default:
      return state;
  }
}

export function ScheduleProvider({ children }) {
  const [schedule, dispatch] = useReducer(reducer, defaultState);
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = async () => {
    if (!schedule.teams.length) {
      return;
    }

    try {
      setIsGenerating(true);
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(schedule),
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
      actions: {
        generate,
        reset: () => dispatch({ type: 'RESET' }),
        setNumOfCourts: numOfCourts =>
          dispatch({ type: 'SET_NUM_OF_COURTS', payload: { numOfCourts }}),
        setNumOfRounds: numOfRounds =>
          dispatch({ type: 'SET_NUM_OF_ROUNDS', payload: { numOfRounds }}),
        setShowProgResults: showProgResults =>
          dispatch({ type: 'SET_SHOW_PROG_RESULTS', payload: { showProgResults }}),
        addTeam: team =>
          dispatch({ type: 'ADD_TEAM', payload: { team }}),
        removeTeam: team =>
          dispatch({ type: 'REMOVE_TEAM', payload: { team }}),
      },
      schedule: {
        isGenerating,
        ...schedule,
      },
    }}>
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleContext;