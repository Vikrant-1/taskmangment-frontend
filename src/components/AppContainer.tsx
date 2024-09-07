import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="w-full h-full bg-amber-500">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AppContainer;
