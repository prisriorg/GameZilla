import { useEffect, useState } from "react";
import Loader from "./Loader";
import TransferPage from "./TransferPage";
import WithdrawalPage from "./WithdrawalPage";

const HomeDashboard = () => {
  const [activeTab, setActiveTab] = useState<"transfer" | "withdrawal">(
    "transfer"
  );
  const [shorting, setShorting] = useState<boolean>(false);
  const [page, setPage] = useState<"transfer" | "withdrawal" | "home">();
  const [activeFilter, setActiveFilter] = useState<"today" | "week" | "month">(
    "today"
  );
  const [data, setData] = useState<
    {
      views: number;
      title: string;
    }[]
  >();
  const shortLinkButton = () => {
    setShorting(true);
    setTimeout(() => {
      setShorting(false);
    }, 2000);
  }
  useEffect(() => {
    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data: any) => setData(data.data));
  }, []);
  return data === undefined ? (
    <Loader />
  ) : page === "transfer" ? (
    <TransferPage />
  ) : page === "withdrawal" ? (
    <WithdrawalPage />
  ) : (
    <div className="mt-8">
      <div className="flex justify-center items-center gap-1 text-center">
        <div className="text-white text-xl">Balance</div>
      </div>
      <div className="flex justify-center items-center gap-1 text-center">
        <div className="text-3xl font-bold mb-1">45678646</div>
        <div className="text-white text-lg">Views</div>
      </div>

      <div className="flex gap-2 mt-6 mx-2">
        <button
          onClick={() => {
            setActiveTab("transfer");
            setPage("transfer");
          }}
          className={`flex-1 py-2 px-4 rounded-lg text-sm border font-medium transition duration-300 
                        ${
                          activeTab === "transfer"
                            ? "bg-white text-black"
                            : "bg-[#151515] text-white"
                        }`}
        >
          Transfer
        </button>
        <button
          onClick={() => {
            setActiveTab("withdrawal");
            setPage("withdrawal");
          }}
          className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium flex items-center justify-center gap-2 transition duration-300 
                        ${
                          activeTab === "withdrawal"
                            ? "bg-white text-black"
                            : "bg-[#151515] text-white"
                        }`}
        >
          Withdrawal
        </button>
      </div>
      <div className="border-t-0 border-gray-500 my-4 mx-2 mb-4"></div>
      <div className="flex flex-col gap-1 text-[#868686] rounded-full px-4 py-1.5 cursor-pointer">
        <span>QUICK SHORT</span>
      </div>

      <div className="w-full mt-4 px-4">
        <input
          type="text"
          className="w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg px-4 py-2"
          placeholder="Enter your URL"
        />
        <div className="border-t-0 border-gray-500 my-4"></div>
        <button
          onClick={shortLinkButton}
          className={`py-2 px-6 text-sm rounded-lg border font-semibold transition-all bg-white text-black`}
          disabled={shorting}
        >
          {shorting? "Shorting":"Short"}
        </button>
      </div>

      <div className="flex flex-col gap-1 text-[#868686] rounded-full px-4 py-1 cursor-pointer mt-8">
        <span>DASHBOARD</span>
      </div>
      <div className="grid grid-cols-3 w-full gap-4 mt-4 px-4">
        {["today", "week", "month"].map((filter) => (
          <button
            key={filter}
            onClick={() =>
              setActiveFilter(filter as "today" | "week" | "month")
            }
            className={`py-2 px-6 text-sm rounded-lg border font-semibold transition-all ${
              activeFilter === filter
                ? "bg-white text-black"
                : "bg-black text-gray-300"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 m-4 gap-4">
        {data?.map((item, index) => (
          <div key={index} className={`w-full border rounded-md p-4`}>
            <div className="flex gap-2 justify-center items-center text-center">
              <div className="text-2xl font-bold mb-1">{item.views}</div>
            </div>
            <div className="flex gap-2 justify-center items-center text-center">
              <span className="text-base">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDashboard;
