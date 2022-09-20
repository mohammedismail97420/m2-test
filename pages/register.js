import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { apis } from "../config/apis";
import { useRouter } from "next/router";
import { overlay } from "../redux/slices/overlaysSlice";

const Register = () => {
  const [addType, setAddType] = useState("private");
  const [showPassword, setShowPassword] = useState(false);
  const [formVerified, setFormVerified] = useState(true);
  const [formAttributes, setFormAttributes] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordValid, setPasswordValid] = useState({
    passLength: false,
    hasCapital: false,
    hasSpecialChar: false,
    hasNumber: false,
    didMatch: true,
  });

  //Fetch config from redux
  const conf = useSelector((store) => store.configReducer.config);
  const router = useRouter();
  const dispatch = useDispatch();

  //Password regex check
  useEffect(() => {
    const validatePassword = () => {
      formAttributes.password.length >= 8
        ? setPasswordValid((data) => ({ ...data, passLength: true }))
        : setPasswordValid((data) => ({ ...data, passLength: false }));

      const specialPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

      specialPattern.test(formAttributes.password)
        ? setPasswordValid((data) => ({ ...data, hasSpecialChar: true }))
        : setPasswordValid((data) => ({ ...data, hasSpecialChar: false }));

      const capsPattern = /[A-Z]/;
      capsPattern.test(formAttributes.password)
        ? setPasswordValid((data) => ({ ...data, hasCapital: true }))
        : setPasswordValid((data) => ({ ...data, hasCapital: false }));

      const numberPattern = /[0-9]/;
      numberPattern.test(formAttributes.password)
        ? setPasswordValid((data) => ({ ...data, hasNumber: true }))
        : setPasswordValid((data) => ({ ...data, hasNumber: false }));
    };
    validatePassword();
  }, [formAttributes.password]);

  //Password = confirmPassword check
  useEffect(() => {
    if (formAttributes.password === formAttributes.confirmPassword) {
      setPasswordValid((data) => ({ ...data, didMatch: true }));
    } else {
      setPasswordValid((data) => ({ ...data, didMatch: false }));
    }
  }, [formAttributes.password, formAttributes.confirmPassword]);

  // Register hook definition
  const { res, error, loading, executeFetch } = useFetch(
    "post",
    apis?.customer_register,
    null,
    false
  );

  //Submit register data
  const handleRegister = async (e) => {
    //Prevent page reload
    e.preventDefault();
    //Get data to submit
    const formData = {
      customer: {
        lastname: formAttributes.lastName,
        firstname: formAttributes.firstName,
        email: formAttributes.email,
        store_id: conf?.store_config?.id,
        website_id: conf?.store_config?.website_id,
      },
      username: formAttributes.email,
      password: formAttributes.password,
    };
    //Send form data to API
    conf && (await executeFetch(formData));
    if (res?.status === 200) {
      //Reset form states
      setFormAttributes({
        lastName: "",
        firstName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
      //Reset password state
      setPasswordValid({
        passLength: false,
        hasCapital: false,
        hasSpecialChar: false,
        hasNumber: false,
        didMatch: false,
      });
    }
    if (res || error) window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (res?.status === 200) {
      router.push("/");
      dispatch(overlay("signIn"));
    }
  }, [res]); // eslint-disable-line react-hooks/exhaustive-deps

  // Verify form to enable register button
  // useEffect(() => {
  //   if (
  //     Object.values(passwordValid).every((item) => item === true) &&
  //     Object.values(formAttributes).every((item) => item !== "")
  //   ) {
  //     setFormVerified(false);
  //   } else {
  //     setFormVerified(true);
  //   }
  // }, [formAttributes, passwordValid]);

  return (
    <>
      <section className="commonContainer flex flex-col py-25 w-full md:w-[750px] lg:w-[800px] xl:w-[900px]">
        <div className="flex flex-col gap-12">
          {res?.status === 200 && res?.data && (
            <div className="bg-[#dff0d7] text-[#235b23] font-semibold rounded-sm px-10 py-15">
              <i className="fa-solid fa-check mr-10"></i>
              Registration was successful
            </div>
          )}
          {error && (
            <div className="bg-[#f2dede] text-[#ba5f55] font-semibold rounded-sm px-10 py-15">
              <i className="fa-solid fa-circle-exclamation mr-10"></i>
              {error?.response?.data?.message}
            </div>
          )}
          <h1 className="font-bold">Create an Account</h1>
          <p className="text-14 italic">
            Please enter the following information to create your account.
          </p>
          <div className="ml-14">
            <label className="relative font-medium text-14 w-auto" htmlFor="">
              Required Fields
              <span className="absolute -left-8 -top-5 text-26">*</span>
            </label>
          </div>
          <form
            className="align-middle flex flex-col gap-10"
            onSubmit={handleRegister}
          >
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
                <div className="mr-25 col-span-2 sm:col-span-1">
                  <label
                    className="relative font-medium text-14 w-auto"
                    htmlFor=""
                  >
                    Please Select:
                    <span className="absolute -right-8 -top-5 text-22">*</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 justify-between gap-20 col-span-2">
                  <div className="flex">
                    <input
                      className=""
                      type="radio"
                      id="addType"
                      name="addType"
                      checked={addType === "private"}
                      onChange={() => setAddType("private")}
                    />
                    <label
                      className="ml-10 font-medium text-14 flex-1 cursor-pointer"
                      htmlFor="addType"
                    >
                      Private Customer
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      className=""
                      type="radio"
                      id="addType2"
                      name="addType"
                      onChange={() => setAddType("company")}
                    />
                    <label
                      className="ml-10 font-medium text-14 flex-1 cursor-pointer"
                      htmlFor="addType2"
                    >
                      Business Customer
                    </label>
                  </div>
                </div>
              </div>
              {addType === "private" && (
                <div className="mt-14">
                  <div className="mb-2 flex flex-col">
                    <div>
                      <label
                        className="relative font-medium text-14 w-auto"
                        htmlFor="firstName"
                      >
                        First Name
                        <span className="absolute -right-8 -top-5 text-22">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-10 w-[100%] shadow-sm focus:shadow-md"
                      type="text"
                      required
                      name="firstName"
                      onChange={(e) =>
                        setFormAttributes((formAttributes) => ({
                          ...formAttributes,
                          firstName: e.target.value,
                        }))
                      }
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-2">
                    <div className="flex gap-10 flex-col sm:flex-row">
                      <div className=" flex flex-col flex-1">
                        <div>
                          <label
                            className="relative font-medium text-14 w-auto"
                            htmlFor="middleName"
                          >
                            Middle Name/Initial
                            <span className="absolute -right-16 -top-8 text-36 opacity-0">
                              *
                            </span>
                          </label>
                        </div>
                        <input
                          className="px-10 py-9 bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-10 w-[100%] shadow-sm focus:shadow-md"
                          type="text"
                          name="middleName"
                          autoComplete="off"
                        />
                      </div>
                      <div className="flex flex-col flex-2">
                        <div>
                          <label
                            className="relative font-medium text-14 w-auto"
                            htmlFor="lastName"
                          >
                            Last Name
                            <span className="absolute -right-8 -top-5 text-22">
                              *
                            </span>
                          </label>
                        </div>
                        <input
                          className="px-10 py-9 bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-10 w-[100%] shadow-sm focus:shadow-md"
                          type="text"
                          required
                          name="lastName"
                          onChange={(e) =>
                            setFormAttributes((formAttributes) => ({
                              ...formAttributes,
                              lastName: e.target.value,
                            }))
                          }
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex flex-col">
                    <div>
                      <label
                        className="relative font-medium text-14 w-auto"
                        htmlFor="email"
                      >
                        Email Address
                        <span className="absolute -right-8 -top-5 text-22">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                      type="email"
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      required
                      name="email"
                      onChange={(e) =>
                        setFormAttributes((formAttributes) => ({
                          ...formAttributes,
                          email: e.target.value,
                        }))
                      }
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-2 flex flex-col">
                    <div>
                      <label
                        className="relative font-medium text-14 w-auto"
                        htmlFor="mobile"
                      >
                        Mobile Number
                        <span className="absolute -right-8 -top-5 text-22">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                      type="text"
                      required
                      name="tel"
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-2 flex flex-col">
                    <div>
                      <label
                        className="relative font-medium text-14 w-auto"
                        htmlFor="password"
                      >
                        Password
                        <span className="absolute -right-8 -top-5 text-22">
                          *
                        </span>
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        className={`bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md`}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        onChange={(e) =>
                          setFormAttributes((formAttributes) => ({
                            ...formAttributes,
                            password: e.target.value,
                          }))
                        }
                        required
                        autoComplete="off"
                      />
                      <div
                        className="absolute inset-y-0 right-7 top-10 pr-3 flex items-center cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i
                          className={`h-20 w-20 fa-solid ${
                            showPassword
                              ? "fa-eye text-themeBlue"
                              : "fa-eye-slash text-darkgray"
                          } `}
                        ></i>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 mt-15 sm:w-[80%]">
                      <div className="text-14 flex items-center gap-5">
                        <i
                          className={
                            passwordValid.passLength
                              ? "fas fa-check text-green"
                              : "fas fa-times text-red"
                          }
                        ></i>
                        <p className="">8-20 characters</p>
                      </div>

                      <div className="text-14 flex items-center gap-5">
                        <i
                          className={
                            passwordValid.hasSpecialChar
                              ? "fas fa-check text-green"
                              : "fas fa-times text-red"
                          }
                        ></i>
                        <p className="validation-item">1 special character</p>
                      </div>

                      <div className="text-14 flex items-center gap-5">
                        <i
                          className={
                            passwordValid.hasCapital
                              ? "fas fa-check text-green"
                              : "fas fa-times text-red"
                          }
                        ></i>
                        <p className="validation-item">1 uppercase letter</p>
                      </div>

                      <div className="text-14 flex items-center gap-5">
                        <i
                          className={
                            passwordValid.hasNumber
                              ? "fas fa-check text-green"
                              : "fas fa-times text-red"
                          }
                        ></i>
                        <p className="validation-item">1 number</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex flex-col">
                    <div>
                      <label
                        className="relative font-medium text-14 w-auto"
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                        <span className="absolute -right-8 -top-5 text-22">
                          *
                        </span>
                      </label>
                    </div>
                    <input
                      className={`bg-inputBg border-[1.5px] rounded-[4px] outline-none text-14 p-10 w-[100%] shadow-sm focus:shadow-md ${
                        passwordValid.didMatch
                          ? "border-inputBorder"
                          : "border-red"
                      }`}
                      type="password"
                      onChange={(e) => {
                        setFormAttributes((formAttributes) => ({
                          ...formAttributes,
                          confirmPassword: e.target.value,
                        }));
                      }}
                      required
                      autoComplete="off"
                    />
                    {!passwordValid.didMatch && (
                      <p className="text-red">Password didn&apos;t match!</p>
                    )}
                  </div>
                </div>
              )}

              {addType === "company" && (
                <div className="grid sm:grid-cols-2 gap-15 mt-14">
                  <div className="w-[100%]">
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="firstName"
                        >
                          First Name
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <input
                        className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                        type="text"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <div className="flex flex-col flex-1">
                        <div>
                          <label
                            className="relative font-medium text-14 w-auto"
                            htmlFor="middleName"
                          >
                            Middle Name/Initial
                            <span className="absolute -right-16 -top-8 text-36 opacity-0">
                              *
                            </span>
                          </label>
                        </div>
                        <input
                          className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                          type="text"
                        />
                      </div>
                      <div className=" flex flex-col flex-2">
                        <div>
                          <label
                            className="relative font-medium text-14 w-auto"
                            htmlFor="lastName"
                          >
                            Last Name
                            <span className="absolute -right-8 -top-5 text-22">
                              *
                            </span>
                          </label>
                        </div>
                        <input
                          className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="email"
                        >
                          Email Address
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <input
                        className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                        type="email"
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                        required
                      />
                    </div>
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="mobile"
                        >
                          Mobile Number
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <input
                        className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                        type="text"
                        required
                        name="phone"
                      />
                    </div>
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="password"
                        >
                          Password
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          className={`bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md`}
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          required
                          autoComplete="off"
                        />
                        <div
                          className="absolute inset-y-0 right-7 top-10 pr-3 flex items-center cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <i
                            className={`h-20 w-20 fa-solid ${
                              showPassword
                                ? "fa-eye text-themeBlue"
                                : "fa-eye-slash text-darkgray"
                            } `}
                          ></i>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 mt-15">
                        <div className="text-14 flex items-center gap-5">
                          <i
                            className={
                              passwordValid.passLength
                                ? "fas fa-check text-green"
                                : "fas fa-times text-red"
                            }
                          ></i>
                          <p className="">8-20 characters</p>
                        </div>

                        <div className="text-14 flex items-center gap-5">
                          <i
                            className={
                              passwordValid.hasSpecialChar
                                ? "fas fa-check text-green"
                                : "fas fa-times text-red"
                            }
                          ></i>
                          <p className="validation-item">1 special character</p>
                        </div>

                        <div className="text-14 flex items-center gap-5">
                          <i
                            className={
                              passwordValid.hasCapital
                                ? "fas fa-check text-green"
                                : "fas fa-times text-red"
                            }
                          ></i>
                          <p className="validation-item">1 uppercase letter</p>
                        </div>

                        <div className="text-14 flex items-center gap-5">
                          <i
                            className={
                              passwordValid.hasNumber
                                ? "fas fa-check text-green"
                                : "fas fa-times text-red"
                            }
                          ></i>
                          <p className="validation-item">1 number</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="confirmPassword"
                        >
                          Confirm Password
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <input
                        className={`bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md ${
                          formAttributes.password.length > 0 &&
                          formAttributes.confirmPassword.length >=
                            formAttributes.password.length &&
                          formAttributes.confirmPassword !==
                            formAttributes.password
                            ? "border-red"
                            : "border-darkgray"
                        }`}
                        type="password"
                        required
                        autoComplete="off"
                      />
                      {formAttributes.password.length > 0 &&
                        formAttributes.confirmPassword.length >=
                          formAttributes.password.length &&
                        formAttributes.confirmPassword !==
                          formAttributes.password && (
                          <p className="text-red">
                            Password didn&apos;t match!
                          </p>
                        )}
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="firstName"
                        >
                          Company
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <input
                        className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                        type="text"
                        required
                      />
                    </div>
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="email"
                        >
                          Mobile / telephone number
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <input
                        className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                        type="text"
                        required
                      />
                    </div>
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="mobile"
                        >
                          House number and street name
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <input
                        className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                        type="text"
                        required
                      />
                    </div>
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="mobile"
                        >
                          Street address 2
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <input
                        className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-9 w-[100%] shadow-sm focus:shadow-md"
                        type="text"
                        required
                      />
                    </div>
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="mobile"
                        >
                          State / Province
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <select
                        className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-10 w-[100%] shadow-sm focus:shadow-md"
                        name="state"
                        id="state"
                      >
                        <option>Please select state or province</option>
                        <option value="state2">State 2</option>
                        <option value="state3">State 3</option>
                        <option value="state4">State 4</option>
                      </select>
                    </div>
                    <div className="mb-2 flex flex-col">
                      <div>
                        <label
                          className="relative font-medium text-14 w-auto"
                          htmlFor="mobile"
                        >
                          Country
                          <span className="absolute -right-8 -top-5 text-22">
                            *
                          </span>
                        </label>
                      </div>
                      <select
                        className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-10 w-[100%] shadow-sm focus:shadow-md"
                        name="country"
                        id="country"
                        defaultValue="country1"
                      >
                        <option value="country1">German</option>
                        <option value="country2">Country 2</option>
                        <option value="country3">Country 3</option>
                        <option value="country4">Country 4</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center py-4">
                <input
                  id="subscribe"
                  aria-describedby=""
                  name="subscribe"
                  type="checkbox"
                  className="focus:ring-themeBlue h-14 w-14 text-themeBlue border-gray-300 rounded mr-5"
                />
                <label
                  htmlFor="subscribe"
                  className="font-medium text-gray-700"
                >
                  Subscribe to Newsletter
                </label>
              </div>
              <p className="text-14">
                By subscribing to newsletter, I agree to the xTWO&apos;s &nbsp;
                <span className="underline">Terms & conditions</span> and
                <span className="underline"> privacy policy</span> in order to
                receive information about special offers, discounts and product
                recommendations.
              </p>
              <div className="mt-15">
                <button
                  // disabled={formVerified}
                  type="submit"
                  className="btn w-[100%] rounded-[4px] uppercase disabled:opacity-[0.6] disabled:cursor-not-allowed"
                >
                  {loading ? "registering..." : "create an account"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

export async function getServerSideProps({ req }) {
  if (req?.cookies?._SYS_USER_AUTH) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}
