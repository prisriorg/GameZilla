// import AdBanner from "./AdsBanner";
// import CategorySection from "./CategorySection";
// import RecentPost from "./RecentPosts";

export default function SideBar() {
  return (
    <aside className="md:pt-20 md:w-[30%] p-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
      />
      {/* <CategorySection /> */}
      <div className="my-4 flex-grow border-t-2 border-black"></div>
      {/* <RecentPost showPosts={1} onPage={6}/> */}
      <div className="my-4 flex-grow border-t-2 border-black"></div>

      {/* <AdBanner data-ad-slot="8954792256" 
      data-ad-format="autorelaxed" 

      data-ad-slot="3041056370" 
      data-ad-format="auto" 
      data-full-width-responsive="true" /> */}
    </aside>
  );
}
