import NavigationBar from "@/components/tgapp/NavigationBar";
import TabContainer from "@/components/tgapp/TabContainer";
import { TabProvider } from "@/contexts/TabContext";
const TgApp = () => {
  return (
    <TabProvider>
      <main className="overflow-hidden max-w-sm mx-auto min-h-screen bg-black text-white">
        {/* <CheckFootprint /> */}
        <TabContainer />
        <NavigationBar />
      </main>
    </TabProvider>
  );
};

export default TgApp;
