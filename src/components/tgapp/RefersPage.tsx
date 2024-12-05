import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const RefersPage = ({id}:{id?:string}) => {
  const [referralLink] = useState<string>(
    "https://t.me/coinrushofficial_bot?start=" + id
  );
  const [data, setData] = useState([
    { level: 1, percentage: "Earn 4% for each friend who signs up using your link" },
    { level: 2, percentage: "Earn 3% for each friend who signs up using a friends referral link (who was referred by you)." },
    { level: 3, percentage: "Earn 2% for each friend who signs up using a friends referral link (who was referred by your Level 2 friend)." },
    { level: 4, percentage: "Earn 1% for each friend who signs up using a friends referral link (who was referred by your Level 3 friend)." },
  ]);
  const handleTelegramShare = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      referralLink
    )}&text=`;
    window.open(telegramUrl, "_blank");
  };
  return data === undefined ? (
    <Loader />
  ) : (
    <div className="">
      <div className={`friends-tab-con px-4 pb-24 transition-all duration-300`}>
        {/* Header Text */}
        <div className="pt-8 space-y-1">
          <h1 className="text-3xl font-bold">INVITE FRIENDS</h1>
          <div className="text-xl">
            <span className="font-semibold">SHARE</span>
            <span className="ml-2 text-gray-500">YOUR INVITATION</span>
          </div>
          <div className="text-xl">
            <span className="text-gray-500">LINK &</span>
            <span className="ml-2 font-semibold">GET {data.at(3)?.level}%, {data.at(2)?.level}%, {data.at(1)?.level}% </span>
            <span className="text-gray-500 text-xl">AND</span>
            <span className="ml-2 font-semibold">{data.at(0)?.level}%</span>
            <span className="ml-2 text-gray-500">OF FRIENDS VIEWS</span>
          </div>
          {/* <div className="text-gray-500 text-xl">FRIENDS VIEWS</div> */}
        </div>

        {/* Empty State */}
        <div className="mt-8 mb-2">
          {data.map(({ level, percentage }) => (
            <div key={level} className="bg-[#151516] w-full rounded-2xl p-8 flex flex-col items-center mb-2">
              <p className="text-lg text-[#8e8e93] text-center">
                Level {level}: {percentage}
              </p>
            </div>
          ))}
        </div>

        {/* Fixed Invite Button */}
        <div className="fixed bottom-[80px] left-0 right-0 py-2 flex justify-center">
          <div className="w-full max-w-sm px-4">
            <button 
            onClick={handleTelegramShare}
            className="w-full border  bg-white text-black py-4 rounded-xl text-lg font-medium">
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefersPage;
