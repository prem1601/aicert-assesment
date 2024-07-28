import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [response, setResponse] = useState({
    message: "",
    id: "",
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    recipientName: "",
    courseName: "",
    issuerName: "",
    dateOfIssue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const responseData = await axios.post(
        import.meta.env.VITE_BASE_URL + "/register-certificate",
        data
      );
      // console.log("response responseData ->", responseData);
      setResponse(responseData.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error registering certificate ->", error);
    }
  };

  // Today's date is max to select
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const todayDate = getTodayDate();

  return (
    <div className="max-w-lg mx-auto">
      {response.id ? (
        <div className="min-h-[23rem] min-w-[12rem] max-w-full">
          <h2 className="text-3xl font-semibold mb-5 capitalize">
            {response.message}
          </h2>
          <p className="text-lg">
            Your ID of certificate is{" "}
            <span className="ms-1 font-medium">{response.id}</span>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <div>
              <label htmlFor="recipient">Recipient&#39;s Name</label>
              <input
                type="text"
                name="recipientName"
                id="recipientName"
                required
                value={data.recipientName}
                onChange={handleChange}
                className="mt-2 w-full rounded-md text-black focus:outline-none p-2"
              />
            </div>
            <div>
              <label htmlFor="course">Course Name</label>
              <input
                type="text"
                name="courseName"
                id="courseName"
                required
                value={data.courseName}
                onChange={handleChange}
                className="mt-2 w-full rounded-md text-black focus:outline-none p-2"
              />
            </div>
            <div>
              <label htmlFor="issuer">Issuer&#39;s Name</label>
              <input
                type="text"
                name="issuerName"
                id="issuerName"
                required
                value={data.issuerName}
                onChange={handleChange}
                className="mt-2 w-full rounded-md text-black focus:outline-none p-2"
              />
            </div>
            <div>
              <label htmlFor="dateOfIssue">Recipient&#39;s Name</label>
              <input
                type="date"
                name="dateOfIssue"
                id="dateOfIssue"
                required
                max={todayDate}
                value={data.dateOfIssue}
                onChange={handleChange}
                className="mt-2 w-full rounded-md text-black focus:outline-none p-2"
              />
            </div>
            <div className="mt-3">
              <button
                type="submit"
                disabled={loading}
                className={`border-2 border-white  ease-linear transition-all rounded-md font-medium px-6 py-2
                  ${!loading && "hover:bg-white hover:text-black"}`}
              >
                {loading ? "Please wait..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
