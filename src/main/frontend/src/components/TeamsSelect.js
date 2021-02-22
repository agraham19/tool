import {TeamsContext, TeamsProvider} from "../contexts/TeamsContext";
import React, {useContext, useState} from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import Tree from "./Tree";

const filterEmptyUnits = (units) => {
  return units.filter(unit => unit.children);
};

const TeamsSelect = () => {
  const { data, status, selectedTeams, setSelectedTeams } = useContext(TeamsContext);

  const [filterText, setFilterText] = useState('');
  const [hideEmptyUnits, setHideEmptyUnits] = useState(true);

  let filteredData = data;

  if(hideEmptyUnits) {
    filteredData = filterEmptyUnits(data);
  }

  return (<div>
    <div>Status: {status}</div>
    <label for="filterText">Filter: </label>
    <input
      id="filterText"
      name="filterText"
      type="text"
      value={filterText}
      onChange={event => setFilterText(event.target.value)}
    />
    <label for="hideEmptyUnits">Hide Empty Units: </label>
    <input onClick={() => setHideEmptyUnits(!hideEmptyUnits)} checked={hideEmptyUnits} type="checkbox" name="hideEmptyUnits"/>

    <Tree data={filteredData}
          filterText={filterText}
          rootNode='Units'
          checkedItems={selectedTeams}
          setCheckedItems={setSelectedTeams}
    />
  </div>)
};

export default TeamsSelect;
