import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="w-100 h-100  flex justify-center align-center bg-white">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
