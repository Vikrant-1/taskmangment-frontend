import { BrowserRouter } from "react-router-dom";
import AuthenticatedRoute from "./route/AuthenticatedRoute";
import UnAuthenticatedRoute from "./route/UnAuthenticatedRoute";
import { useRecoilState } from "recoil";
import { tokenState } from "./store/userAtoms.js";
import { useEffect } from "react";

function App() {
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    if (!token) {
      const localToken: string = localStorage.getItem("token") ?? ""; 
      setToken(localToken);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        {token ? <AuthenticatedRoute /> : <UnAuthenticatedRoute />}
      </BrowserRouter>
    </>
  );
}

export default App;
