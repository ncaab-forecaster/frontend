import React, { useEffect, useState } from "react";
import "../styles/SearchForm.css";

export default function SearchForm(props) {
  const setSearchResults = props.setDataToDisplay;

  const [searchTerm, setSearchTerm] = useState("");
  const [dataToSearch] = useState(props.data);

  const handleChange = event => setSearchTerm(event.target.value);

  useEffect(() => {
    const awayResults = dataToSearch.filter(team =>
      team.away_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const homeResults = dataToSearch.filter(team =>
      team.home_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(awayResults.concat(homeResults));
  }, [searchTerm, setSearchResults, dataToSearch]);

  return (
    <form className="search-form">
      <input placeholder="Search" value={searchTerm} onChange={handleChange} />
    </form>
  );
}
