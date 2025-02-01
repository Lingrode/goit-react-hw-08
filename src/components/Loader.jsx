import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed bg-black/30 inset-0 flex justify-center items-center">
      <ScaleLoader color="#fff" height={50} width={6} />
    </div>
  );
};

export default Loader;
