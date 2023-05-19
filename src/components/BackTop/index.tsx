import { BiArrowToTop } from "react-icons/bi";

const BackTop = () => {
  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <span
      className="inline-flex justify-center items-center w-[35px] h-[35px] border rounded-full fixed bottom-5 right-5 cursor-pointer hover:text-white"
      onClick={handleGoTop}
    >
      <BiArrowToTop size={20} />
    </span>
  );
};
export default BackTop;
