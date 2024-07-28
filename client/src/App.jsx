import { Outlet, useLocation } from "react-router-dom";
import BackToHome from "./components/BackToHome";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="bg-gray-700 text-white px-4 md:px-6">
      <div className="min-h-screen max-w-screen-xl mx-auto">
        <div className="flex flex-wrap min-h-screen">
          <div className="basis-auto md:basis-8/12 lg:basis-7/12 m-auto">
            {pathname !== "/" && <BackToHome />}
            <div className="p-8 md:p-12 lg:p-16">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
