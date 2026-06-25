import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) return <p>Loading...</p>;
  if (!user) return <Navigate to="/admin" />;

  return children;
}

export default ProtectedRoute;