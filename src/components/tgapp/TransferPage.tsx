import React from "react";

const TransferPage = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const recipient = (
      e.currentTarget.elements.namedItem("recipient") as HTMLInputElement
    ).value;
    const amount = (
      e.currentTarget.elements.namedItem("amount") as HTMLInputElement
    ).value;
    console.log("Recipient ID: ", recipient);
    console.log("Amount: ", amount);
  };
  return (
    <div className={`transfer-page px-6 pb-24 transition-all duration-300`}>
      {/* Header Section */}
      <div className="pt-8 space-y-2">
        <h1 className="text-3xl font-bold">View Transfer</h1>
        <p className="text-gray-600">
          Transfer your earnings or views seamlessly.
        </p>
      </div>

      {/* Transfer Details */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Transfer Details</h2>
        <form onSubmit={onSubmit} className="mt-4 space-y-4">
          {/* Recipient Input */}
          <div>
            <label htmlFor="recipient" className="block text-lg font-medium">
              Recipient ID
            </label>
            <input
              type="text"
              id="recipient"
              className="w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg px-4 py-2"
              placeholder="Enter recipient ID"
            />
          </div>

          {/* Amount Input */}
          <div>
            <label htmlFor="amount" className="block text-lg font-medium">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              className="w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg px-4 py-2"
            />
          </div>

          {/* Transfer Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-md font-bold text-lg  transition"
          >
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferPage;
