import { BrowserRouter } from "react-router-dom";
import AuthenticatedRoute from "./route/AuthenticatedRoute";
import UnAuthenticatedRoute from "./route/UnAuthenticatedRoute";
import { useRecoilState } from "recoil";
import { tokenState } from "./store/userAtoms.js";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
    </>
  );
}

export default App;
