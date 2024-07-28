import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="grid gap-10 text-center">
      <div>
        <h1 className="text-4xl font-semibold capitalize">
          Please select required sevice
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10 justify-center">
        <button
          className="border-2 border-white hover:bg-white hover:text-black hover:scale-110 ease-linear transition-all rounded-md font-medium px-6 py-2"
          onClick={() => navigate("/register-certificate")}
        >
          Register Certificate
        </button>
        <button
          className="border-2 border-white hover:bg-white hover:text-black hover:scale-110 ease-linear transition-all rounded-md font-medium px-6 py-2"
          onClick={() => navigate("/verify-certificate")}
        >
          Verify Certificate
        </button>
      </div>
    </div>
  );
};

export default Home;
