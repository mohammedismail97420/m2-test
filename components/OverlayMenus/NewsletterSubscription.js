import OverlayMenu from "./OverlayMenu";
import { useDispatch } from "react-redux";
import { overlay } from "../../redux/slices/overlaysSlice";

const NewsletterSubscription = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <OverlayMenu>
        <button onClick={() => dispatch(overlay(null))}>
          <i className="fa-solid fa-arrow-left text-darkgray text-14"></i>
          <span className="uppercase text-green font-bold text-14 ml-10">
            account information
          </span>
        </button>
        <h1 className="text-24 font-bold mt-10">Newsletter Subscription</h1>

        <div className="flex items-center my-20 border border-darkgray rounded-sm py-20 px-10">
          <i className="fa-solid fa-check-circle text-green mr-10 my-10 self-start"></i>
          <div>
            <p className="text-14 font-semibold">
              Subscribe to General Subscription
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, odit?
            </p>
          </div>
        </div>

        <button className="btn w-[100%] my-10 text-14 font-semibold">
          Save
        </button>
        <div className="w-[100%] text-center">
          <button
            onClick={() => dispatch(overlay(null))}
            className="mx-auto text-14 font-semibold"
          >
            Cancel
          </button>
        </div>
      </OverlayMenu>
    </div>
  );
};
export default NewsletterSubscription;
