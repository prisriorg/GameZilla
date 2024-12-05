import Link from "next/link";

const Pagination = ({
  activePage,
  totalPage,
}: {
  activePage: number;
  totalPage: number;
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center m-2 space-x-1 md:space-x-2">
      {Number(activePage) === 1 ? (
        <></>
      ) : (
        <Link href={`/page/${Number(activePage) - 1}`}>
          <button className="my-1 px-2 py-1 md:px-3 md:py-1 bg-gray-200 rounded disabled:opacity-50">
            Previous
          </button>
        </Link>
      )}

      {[...Array(Number(totalPage))].map((_, index) => (
        <Link key={index} href={`/page/${index + 1}`}>
          <button
            className={`my-1 px-2 py-1 md:px-3 md:py-1 rounded ${
              index + 1 === Number(activePage)
                ? "bg-black text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        </Link>
      ))}

      {Number(activePage) === Number(totalPage) ? (
        <></>
      ) : (
        <Link href={`/page/${Number(activePage) + 1}`}>
          <button className="my-1 px-2 py-1 md:px-3 md:py-1 bg-gray-200 rounded disabled:opacity-50">
            Next
          </button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
