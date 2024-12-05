import React, { useState } from "react";
import Loader from "./Loader";

const HistoryPage = () => {
  const [data, setData] = useState<
    {
      views: number;
      title: string;
    }[]
  >([{ views: 0, title: "" }]);

  return data === undefined ? (
    <Loader />
  ) : (
    <div className="mt-8">
      <div className="mt-8 m-4">
        <h2 className="text-2xl font-semibold">History</h2>
        <div className="mt-4 space-y-3">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center border p-4 rounded-md shadow-md"
            >
              <div>
                <p className="text-lg font-medium">
                  Method: {"selectedMethod"}
                </p>
                <p className="text-[#868686]">Date: 2024-12-01</p>
              </div>
              <p className="text-red-500 font-bold">- ₹{(index + 1) * 100}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
