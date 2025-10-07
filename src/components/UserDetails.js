import React, { useEffect, useState } from "react";

const UserDetails = ({ route }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = route.split("/users/")[1];

  useEffect(() => {
    setLoading(true);

    // Fetch user details
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // Add a short delay to ensure "Loading..." is visible
        setTimeout(() => {
          setUser(data);
          setLoading(false);
        }, 300);
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetails;
