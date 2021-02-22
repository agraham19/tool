import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

const TeamsContext = createContext();

export const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
};

const TeamsProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(REQUEST_STATUS.LOADING);
  const [selectedTeams, setSelectedTeams] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:2222/unit')
        .then(response => {

          console.log(JSON.stringify(response.data));

        const units = response.data.map(unit =>
          ({label: unit.displayName,
            active: unit.active,
            value: `u-${unit.uuid}`,
            children: unit.teams
              .map(team => ({
                label: team.displayName,
                value: team.base64Uuid,
                uuid: team.uuid
              }))
          }))
          .map(unit => {
            console.log(JSON.stringify(unit));
            if (unit.children.length === 0) {
              delete unit.children;
            }
            return unit;
          });

        setData(units);
        setStatus(REQUEST_STATUS.SUCCESS);
      }).catch(e => {
      setStatus(REQUEST_STATUS.ERROR);
      console.log('error: ' + JSON.stringify(e));
    });

  }, []);


  const state = {data, status, selectedTeams, setSelectedTeams};

  return (
    <TeamsContext.Provider value={state}>
      {children}
    </TeamsContext.Provider>
  )
};

export { TeamsContext, TeamsProvider };
