import { BrowserRouter } from "react-router-dom";
import AuthenticatedRoute from "./route/AuthenticatedRoute";
import UnAuthenticatedRoute from "./route/UnAuthenticatedRoute";

function App() {
  const isUserLoggedIn = true;
  return (
    <>
      <BrowserRouter>
        {isUserLoggedIn ? <AuthenticatedRoute /> : <UnAuthenticatedRoute />}
      </BrowserRouter>
    </>
  );
}

export default App;
