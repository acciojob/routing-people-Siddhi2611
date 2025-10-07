import React, { useEffect, useState } from "react";

const UserList = ({ navigate }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* use <a> tag for Cypress exact href check */}
            <a
              href={`/users/${user.id}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/users/${user.id}`);
              }}
            >
              {user.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
