import React, { useEffect, useState } from "react";
import Form from 'antd/es/form';
import 'antd/es/form/style/css';
import Input from 'antd/es/input';
import 'antd/es/input/style/css';
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
    <Form className="search-form">
      <Input placeholder="Search" value={searchTerm} onChange={handleChange} />
    </Form>
  );
}
