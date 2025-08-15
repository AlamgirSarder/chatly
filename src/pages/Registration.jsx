import Container from "../components/layout/Container";
import regi_image from "../assets/registration.png";
import { TextField } from "@mui/material";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

import { ToastContainer, toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

const Registration = () => {
  
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const [emailerror, setEmailerror] = useState("");
  const [nameerror, setNameerror] = useState("");
  const [passworderror, setPassworderror] = useState("");

  const [show, setShow] = useState(false);

  const [emailvalid, setEmailvalid] = useState(false);
  const [namevalid, setNamevalid] = useState(false);
  const [passwordvalid, setPasswordvalid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerror("");
  };

  const handleFullName = (e) => {
    setFullname(e.target.value);
    setNameerror("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderror("");
  };

  const submitRegistration = () => {
    if (!email) {
      setEmailerror("Enter your email address");
      setEmailvalid(false);
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailerror("Enter valid email");
        setEmailvalid(false);
      } else {
        setEmailvalid(true);
      }
    }
    if (!fullname) {
      setNameerror("Give your name");
      setNamevalid(false);
    } else {
      setNamevalid(true);
    }
    

    if (!password) {
      setPassworderror("Enter your password");
      setPasswordvalid(false);
    } else {
      if (!/(?=.*[a-z])/.test(password)) {
        setPassworderror("Lowercase alphabetical character");
        setPasswordvalid(false);
      } else if (!/(?=.*[A-Z])/.test(password)) {
        setPassworderror("Uppercase alphabetical character");
        setPasswordvalid(false);
      } else if (!/(?=.*[0-9])/.test(password)) {
        setPassworderror("Numeric character");
        setPasswordvalid(false);
      } else {
        setPasswordvalid(true);
      }
    }

    if (
      email &&
      fullname &&
      password &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      /(?=.*[a-z])/.test(password) &&
      /(?=.*[A-Z])/.test(password) &&
      /(?=.*[0-9])/.test(password)
    ) {
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          toast.success("Registration Successful. Please verify your email");

          updateProfile(auth.currentUser, {
            displayName: fullname
          }).then(()=>{


          sendEmailVerification(auth.currentUser);

          set(ref(db, "users/" + user.user.uid), {
            username: user.user.displayName,
            email: user.user.email,
          });

          setTimeout(() => {
            navigate("/login");
          }, 2000);

          setEmailvalid(false);
          setNamevalid(false);
          setPasswordvalid(false);
          setEmail("");
          setFullname("");
          setPassword("");
        })
          })

          


        .catch((error) => {
          const err = error.message;
          if (err.includes("auth/email-already-in-use")) {
            setEmailerror("your email is already exits");
            setLoader(false);
          } else if (err.includes("auth/weak-password")) {
            setPassworderror("Please password at lest 6 chatacter");
            setLoader(false);
          }
        });
    }
  };

  return (
    <Container>
      <div className="flex justify-between">
        <div className="w-[756px] pt-[120px] pl-[120px]">
          <h2 className="font-primary text-primary text-[35px] font-bold mb-[13px]">
            Get started with easily register
          </h2>
          <p className="font-primary text-black/50 text-[21px] mb-[61px]">
            Free register and you can enjoy it
          </p>

          <div className="w-[368px]">
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              // transition={Bounce}
            />

            <div className="">
              <div className="mb-[56px] relative">
                <TextField
                  label="Email Address"
                  variant="outlined"
                  type="text"
                  value={email}
                  fullWidth
                  onChange={handleEmail}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",

                      "& fieldset": {
                        borderColor: emailvalid ? "green" : "#11175D",
                        borderWidth: "2px",
                        opacity: emailvalid ? "1" : "0.3",
                      },
                      "&:hover fieldset": {
                        borderColor: "#11175D",
                        opacity: "0.3",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#11175D",
                        opacity: "0.3",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "14px",
                      color: "#11175D",
                      opacity: "0.7",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#4ade80",
                    },
                    "& label.MuiInputLabel-shrink": {
                      top: "1px",
                      left: "1px",
                      fontSize: "16px",
                      color: "#11175D",
                      backgroundColor: "#fff",
                      padding: "0 12px",
                      letterSpacing: "3px",
                    },
                  }}
                />

                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {emailerror}
                </p>
              </div>

              <div className="mb-[56px] relative">
                <TextField
                  label="Full Name"
                  variant="outlined"
                  type="text"
                  value={fullname}
                  fullWidth
                  onChange={handleFullName}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: namevalid ? "green" : "#11175D",
                        borderWidth: "2px",
                        opacity: namevalid ? "green" : "0.3",
                      },
                      "&:hover fieldset": {
                        borderColor: "#11175D",
                        opacity: "0.3",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#11175D",
                        opacity: "0.3",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "14px",
                      color: "#11175D",
                      opacity: "0.7",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#4ade80",
                    },
                    "& label.MuiInputLabel-shrink": {
                      top: "1px",
                      left: "1px",
                      fontSize: "16px",
                      color: "#11175D",
                      backgroundColor: "#fff",
                      padding: "0 12px",
                      letterSpacing: "3px",
                    },
                  }}
                />
                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {nameerror}
                </p>
              </div>

              <div className="relative">
                {show ? (
                  <IoIosEyeOff
                    onClick={() => setShow(!show)}
                    className="absolute top-1/2 right-0 -translate-1/2 cursor-pointer z-[1]"
                    size={25}
                  />
                ) : (
                  <IoIosEye
                    onClick={() => setShow(!show)}
                    className="absolute top-1/2 right-0 -translate-1/2 cursor-pointer z-[1]"
                    size={25}
                  />
                )}

                <TextField
                  label="Password"
                  variant="outlined"
                  type={show ? "text" : "password"}
                  value={password}
                  fullWidth
                  onChange={handlePassword}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: passwordvalid ? "green" : "#11175D",
                        borderWidth: "2px",
                        opacity: passwordvalid ? "green" : "0.3",
                      },
                      "&:hover fieldset": {
                        borderColor: "#11175D",
                        opacity: "0.3",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#11175D",
                        opacity: "0.3",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "14px",
                      color: "#11175D",
                      opacity: "0.7",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#4ade80",
                    },
                    "& label.MuiInputLabel-shrink": {
                      top: "1px",
                      left: "1px",
                      fontSize: "16px",
                      color: "#11175D",
                      backgroundColor: "#fff",
                      padding: "0 12px",
                      letterSpacing: "3px",
                    },
                  }}
                />
                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {passworderror}
                </p>
              </div>
            </div>

            <button
              onClick={submitRegistration}
              className="relative py-[19px] w-full bg-[#1E1E1E] font-primary text-[21px] font-semibold text-[#FFFFFF] rounded-[86px] after:content-[''] after:absolute after:w-[71px] after:h-[28px] after:rounded-[86px] after:bg-[#5B36F5] after:top-1/2 after:left-1/2 after:blur-[43px] after:-translate-1/2 after:-z-1 z-1 cursor-pointer shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-[52px]"
            >
              {" "}
              {loader ? (
                <div className="flex justify-center items-center">
                  <ColorRing
                    visible={true}
                    height="35"
                    width="35"
                    ariaLabel="color-ring-loading"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                </div>
              ) : (
                "Sign up"
              )}
            </button>

            <p className="mt-[35px] text-center text-[#03014C] font-secondary text-[13px]">
              Already have an account ?{" "}
              <Link
                to="/login"
                className="text-[#EA6C00] font-secondary font-bold text-[13px]"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <div className="w-[684px]">
          <img
            src={regi_image}
            className="h-screen object-cover"
            alt="regi_image"
          />
        </div>
      </div>
    </Container>
  );
};

export default Registration;
