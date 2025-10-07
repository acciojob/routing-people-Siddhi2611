import React from "react";
import './../styles/App.css';
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  const [route, setRoute] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      {route === "/" ? (
        <UserList navigate={navigate} />
      ) : route.startsWith("/users/") ? (
        <UserDetails route={route} />
      ) : null}
    </div>
  );
};

export default App;
