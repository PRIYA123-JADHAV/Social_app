import { useState } from "react";
import { auth, provider, signInWithPopup } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log("User:", result.user);
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="Profile" width={100} />
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
}

export default App;
