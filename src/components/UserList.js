import React, { useEffect, useState } from "react";

const UserList = ({ onUserClick }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href={`/users/${user.id}`} onClick={(e) => onUserClick(user.id, e)}>
                {user.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;

