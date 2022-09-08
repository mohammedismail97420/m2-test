import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./OverlayMenus/Cart";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "./OverlayMenus/SignIn";
import ForgotPassword from "./OverlayMenus/ForgotPassword";
import { useEffect, useState } from "react";
import { apis } from "../config/apis";
import { getHost, getHostConfig } from "../config/configMethods";
import { config as conf } from "../redux/slices/configSlice";
import useFetch from "../hooks/useFetch";

const Layout = ({ children }) => {
  const showOverlay = useSelector((store) => store.overlayReducer.overlay);
  const dispatch = useDispatch();
  const [fileConfig, setFileConfig] = useState(null);
  const [completeConfig, setCompleteConfig] = useState(null);

  //Fetching token
  const { res: token, executeFetch: executeToken } = useFetch(
    "post",
    apis?.admin_bearer_token,
    null,
    false
  );

  //Fetching API config
  const { res: apiConfig, executeFetch: executeConfig } = useFetch(
    "get",
    apis?.get_store_config + fileConfig?.code,
    {
      Authorization: `Bearer ${token?.data}`,
    },
    false
  );

  //Fetching file config
  useEffect(() => {
    const host = getHost(window.location.hostname);
    setFileConfig(getHostConfig(host));
  }, []);

  //Executing token
  useEffect(() => {
    executeToken({
      password: process.env.NEXT_PUBLIC_PASSWORD,
      username: process.env.NEXT_PUBLIC_USERNAME,
    });
  }, []);

  //Executing API config
  useEffect(() => {
    if (fileConfig !== null && token !== null) {
      executeConfig(null);
    }
  }, [fileConfig, token]);

  //Setting complete config
  useEffect(() => {
    apiConfig &&
      setCompleteConfig({ ...fileConfig, store_config: apiConfig.data[0] });
  }, [apiConfig, fileConfig]);

  //Dispatching complete config
  useEffect(() => {
    completeConfig && dispatch(conf(completeConfig));
  }, [completeConfig]);

  //Setting token in localstorage
  useEffect(() => {
    token && localStorage.setItem("token", token?.data);
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="relative">
        {showOverlay === "cart" && <Cart />}
        {showOverlay === "signIn" && <SignIn />}
        {showOverlay === "forgotPassword" && <ForgotPassword />}
        {children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
