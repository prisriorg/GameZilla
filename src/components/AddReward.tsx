"use client";

const AdReward = () => {
  const waitForAdFunction = async () => {
    if (typeof (window as any).show_8569082 === "function") {
      try {
        await (window as any).show_8569082().then(() => {
          // alert('You have seen the ad!');
        });
        // Reward logic here
        // alert('You have seen the ad!');
      } catch (error) {
        console.error("Error displaying ad:", error);
      }
    } else {
      console.warn("Ad function not available yet.");
    }
  };

  return <div onClick={waitForAdFunction}>Ad will be displayed shortly...</div>;
};

export default AdReward;
