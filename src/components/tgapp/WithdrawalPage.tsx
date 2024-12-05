import { useState } from "react";

const WithdrawalPage = () => {
  const [selectedMethod, setSelectedMethod] = useState<"UPI" | "Bitcoin">("UPI");
  return (
    <div className={`withdrawal-page px-6 pb-24 transition-all duration-300`}>
      {/* Header Section */}
      {/* <div className="pt-8 space-y-2">
        <h1 className="text-3xl font-bold">Withdraw Funds</h1>
        <p className="text-gray-600">Choose your preferred withdrawal method.</p>
      </div> */}

      {/* Method Selection */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Select Method</h2>
        <p className="text-gray-500">2000 views = 1.0$</p>
        <div className=" mt-4">
          {[
            { name: "UPI", icon: "/icons/upi.svg"},
            { name: "Bitcoin", icon: "/icons/bitcoin.svg"},
            // { name: "Binance", icon: "/icons/binance.svg" },
          ].map((method) => (
            <button
              key={method.name}
              onClick={() => setSelectedMethod(method.name as "UPI" | "Bitcoin")}
              className={`w-full my-4 border px-6 py-3 flex items-center rounded-md font-medium  ${
                selectedMethod === method.name ? "bg-white text-black" : ""
              }`}
            >
              <img
                src={method.icon}
                alt={`${method.name} icon`}
                className="h-6 w-6 mr-2"
              />
              {method.name}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Form */}
      <div className="mt-8">
      <form className="space-y-4">
            <h3 className="text-lg font-bold">{selectedMethod ==="UPI"?"UPI Withdrawal":"Bitcoin Withdrawal"}</h3>
            <div>
              <label htmlFor="upi-id" className="block text-lg font-medium">
                {selectedMethod ==="UPI"?"UPI ID":"Bitcoin Address"}
              </label>
              <input
                type="text"
                id="upi-id"
                placeholder={`Enter your ${selectedMethod ==="UPI"?"UPI ID":"Bitcoin Address"}` }
                className="w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg px-4 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-md font-bold text-lg  transition"
            >
              Withdraw via {selectedMethod==="UPI"?"UPI":"Bitcoin"}
            </button>
          </form>
      </div>
    </div>
  );
};

export default WithdrawalPage;
