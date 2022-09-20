import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { overlay } from "../../redux/slices/overlaysSlice";

const OverlayMenu = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex absolute top-[-58px] bottom-[0] w-[100%] left-0 right-0 z-[20] overflow-y-scroll">
      <div
        className="flex-1 hidden sm:block bg-black bg-opacity-50"
        onClick={() => dispatch(overlay(null))}
      ></div>
      <div className="w-[100%] sm:w-[500px] relative bg-white p-15 md:p-30 overflow-y-auto">
        <i
          onClick={() => dispatch(overlay(null))}
          className="fa-solid fa-xmark absolute top-30 right-30 cursor-pointer"
        ></i>
        {children}
      </div>
    </div>
  );
};
export default OverlayMenu;
