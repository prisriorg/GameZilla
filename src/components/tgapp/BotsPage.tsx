import React, { useState } from "react";
import Loader from "./Loader";

const BotsPage = () => {
  const bots = [
    {
      name: "LinkyZilla Bot",
      description: "Shorten your URLs effortlessly with LinkyZilla's Telegram bot.",
      link: "https://t.me/LinkyZillaBot",
    },
    {
      name: "CryptoAlert Bot",
      description: "Get instant alerts on cryptocurrency price movements.",
      link: "https://t.me/CryptoAlertBot",
    },
    {
      name: "TaskManager Bot",
      description: "Manage your tasks and projects directly from Telegram.",
      link: "https://t.me/TaskManagerBot",
    },
  ];

  return bots === undefined ? <Loader /> : <div className="mt-8">
    <div className="bots-page px-6 pb-24">
      {/* Header */}
      <div className="pt-8 space-y-2">
        <h1 className="text-3xl font-bold">Telegram Bots</h1>
        <p className="text-[#868686]">
          Explore and interact with powerful bots designed for productivity and fun.
        </p>
      </div>

      {/* Bots List */}
      <div className="mt-6 space-y-6">
        {bots.map((bot, index) => (
          <div
            key={index}
            className="flex items-center gap-1 border p-4 rounded-md shadow-md transition"
          >
            {/* <img
              src={bot.icon}
              alt={`${bot.name} icon`}
              className="h-12 w-12 rounded-md mr-4"
            /> */}
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{bot.name}</h2>
              <p className="text-[#868686]">{bot.description}</p>
            </div>
            <a
              href={bot.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black py-2 px-4 rounded-md font-bold transition"
            >
              Start Bot
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>;
};

export default BotsPage;
