import React, { CSSProperties } from "react";
import { BounceLoader, ClipLoader } from "react-spinners";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-48">
      <BounceLoader

        color={"#ffffff"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
