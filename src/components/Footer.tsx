import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import config from "@/lib/config";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2 mb-4">
          <img
            src={config.SiteLogo}
            alt="Site Logo"
            width={100}
            height={100}
            title="Amita Kitchen Site Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-semibold">{config.SiteName}</span>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 mt-6 text-gray-400 text-sm">
          {config.pages.map((da, index) => (
            <Link
              key={index}
              title={da}
              href={
                config.SiteUrl + "/" + da.toLowerCase().replaceAll(" ", "-")
              }
              className="hover:text-white transition"
            >
              {da}
            </Link>
          ))}
        </div>
        <div className="mt-8 w-full border-t-2 border-gray-600"></div>
        <p className="mt-6 text-gray-500 text-xs md:text-sm text-center">
          &copy; {new Date().getFullYear()} {config.SiteName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
