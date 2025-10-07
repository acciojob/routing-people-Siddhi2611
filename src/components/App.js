
import React, { useState } from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import "../styles/App.css";

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (id, e) => {
    e.preventDefault(); // prevent full reload
    setSelectedUserId(id);
  };

  const handleBack = () => {
    setSelectedUserId(null);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>User List</h1>
      {!selectedUserId ? (
        <UserList onUserClick={handleUserClick} />
      ) : (
        <UserDetails userId={selectedUserId} onBack={handleBack} />
      )}
    </div>
  );
};

export default App;
