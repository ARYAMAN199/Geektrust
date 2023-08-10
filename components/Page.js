import axios from "axios";
import config from "../ipConfig.json";
import { useEffect, useState } from "react";
import Row from "./Row";

const UserPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isSearchBarEmpty, setIsSearchBarEmpty] = useState(true);
  const [usersToDisplay, setUsersToDisplay] = useState([]);
  useEffect(() => {
    performApiCall();
  }, []);
  const performApiCall = () => {
    const users = axios.get(`${config.url}`);
    setAllUsers(users);
    setUsersToDisplay(users);
  };
  const handleSearch = (query) => {
    // Perform search based on name, email, or role
    const searchResults = allUsers.filter(
      (user) =>
        user.name.includes(query) ||
        user.email.includes(query) ||
        user.role.includes(query)
    );
    setUsersToDisplay(searchResults);
  };
  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div className="header-row">
        <div className="header-column">
          <input type="checkbox" className="checkbox-input" />
        </div>
        <div className="header-column">Name</div>
        <div className="header-column">Email</div>
        <div className="header-column">Role</div>
        <div className="header-column">Action</div>
      </div>
      {isSearchBarEmpty
        ? allUsers.map((user) => {
            <Row
              key={user.id} // Make sure to add a unique key prop when mapping
              Name={user.name}
              Email={user.email}
              Role={user.role}
            />;
          })
        : usersToDisplay.map((user) => {
            <Row
              key={user.id} // Make sure to add a unique key prop when mapping
              Name={user.name}
              Email={user.email}
              Role={user.role}
            />;
          })}
    </div>
  );
};
