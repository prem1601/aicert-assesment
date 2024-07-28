import axios from "axios";
import { useState } from "react";

const Verify = () => {
  const [response, setResponse] = useState({
    message: "",
    data: {},
  });

  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("id length", id.length);

    try {
      const responseData = await axios.get(
        import.meta.env.VITE_BASE_URL + `/verify-certificate/?id=${id}`
      );
      setResponse(responseData.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error verifying certificate ->", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {response.data.id ? (
        <div className="min-h-[10rem] min-w-[12rem] max-w-full">
          <h2 className="text-3xl font-semibold mb-5 capitalize">
            {response.message}
          </h2>
          <ul className="text-lg">
            <li className="flex gap-5">
              <div>ID</div>
              <div>:</div>
              <div>{response.data.id}</div>
            </li>
          </ul>
        </div>
      ) : response.data?._id ? (
        <div className="min-h-[10rem] min-w-[12rem] max-w-full">
          <h2 className="text-3xl font-semibold mb-5 capitalize">
            {response.message}
          </h2>
          {response.data?._id && (
            <ul className="text-lg">
              <li className="flex gap-5">
                <div className="basis-3/12">ID</div>
                <div>:</div>
                <div className="basis-6/12">{response.data._id}</div>
              </li>
              <li className="flex gap-5">
                <div className="basis-3/12">Recipient Name</div>
                <div>:</div>
                <div className="basis-6/12">{response.data.recipientName}</div>
              </li>
              <li className="flex gap-5">
                <div className="basis-3/12">Course Name</div>
                <div>:</div>
                <div className="basis-6/12">{response.data.courseName}</div>
              </li>
              <li className="flex gap-5">
                <div className="basis-3/12">Issuer Name</div>
                <div>:</div>
                <div className="basis-6/12">{response.data.issuerName}</div>
              </li>
              <li className="flex gap-5">
                <div className="basis-3/12">Date Of Issue </div>
                <div>:</div>
                <div className="basis-6/12">
                  {response.data.dateOfIssue.split("-").reverse().join("-")}
                </div>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Enter Id to Verify
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-3">
              <input
                type="text"
                name="recipient"
                id="recipient"
                required
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="mt-2 rounded-md text-black focus:outline-none p-2"
              />
              <div className="basis-6/12">
                <button
                  type="submit"
                  disabled={loading}
                  className={`border-2 border-white  ease-linear transition-all rounded-md font-medium px-6 py-2
                    ${!loading && "hover:bg-white hover:text-black"}`}
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </div>
            </div>
          </form>
          {response.message && (
            <p className="my-4 text-red-600 font-semibold text-lg">
              {response.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Verify;
