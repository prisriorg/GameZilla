import AdReward from "@/components/AddReward";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
export const runtime = 'edge';
export default function Page({ params }: { params: { id: string } }) {
  // Call the function from the second step

  // Effect function

  return (
    <>
      <Header />
      <main className="md:px-[10%] my-4 md:flex ">
        <section className="md:w-[70%] py-4 px-4 md:px-0">
          <h1 className="text-2xl font-bold">{params.id}</h1>
          <AdReward />
          <div className="my-4 flex-grow border-t-2 border-black"></div>
        </section>
        <SideBar />
      </main>
      <Footer />
    </>
  );
}
