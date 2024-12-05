import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import PostBox from "@/components/PostBox";
import config from "@/lib/config";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: config.SiteName,
  description: config.Description,
  keywords: config.Keywords,
  openGraph: {
    url: config.SiteUrl,
    type: "website",
    title: config.SiteName,
    description: config.Description,
    images: [
      {
        url: config.SiteLogo,
        width: 1200,
        height: 630,
        alt: config.SiteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.SiteName,
    description: config.Description,
    creator: "@amitakitchen",
    site: "@amitakitchen",
    images: [
      {
        url: config.SiteLogo,
        width: 1200,
        height: 630,
        alt: config.SiteName,
      },
    ],
  },
  alternates: {
    canonical: config.SiteUrl,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:px-[8%] my-4 md:flex ">
        <section className="py-4 px-4 md:px-0">
          <div className="flex flex-wrap gap-4 transition-all duration-800 justify-center">
            {Array.from({ length: 100 })
              .slice(0, 100)
              .map((_, index) => (
                <PostBox
                  key={index}
                  name={"_.title"}
                  url={"_.url"}
                  image={"_.image"}
                />
              ))}
          </div>
        </section>
        {/* <SideBar /> */}
      </main>
      <Pagination activePage={1} totalPage={19} />
      <Footer />
    </>
  );
}
