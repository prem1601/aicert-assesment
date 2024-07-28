import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const BackToHome = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")} className="font-semibold">
      <BiArrowBack size={30} />
    </button>
  );
};

export default BackToHome;
