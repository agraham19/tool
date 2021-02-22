import React, {useContext} from 'react';
import {TeamsContext} from '../contexts/TeamsContext';

function Result() {
  const { selectedTeams } = useContext(TeamsContext);
  const formattedBase64Uuids= selectedTeams.map(uuid => `/${uuid}`).join(',');

  return (
    <div>
      <div>RESULT</div>
      <div class="uuid-results">{formattedBase64Uuids}</div>
    </div>
  )
}

export default Result;
