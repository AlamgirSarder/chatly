import Container from "../components/layout/Container";
import login_image from "../assets/login.jpg";
import google_image from "../assets/google.png";

import { TextField } from "@mui/material";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { Link, Navigate, useNavigate } from "react-router";

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../slice/userSlice";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");

  const [show, setShow] = useState(false);

  const [emailvalid, setEmailvalid] = useState(false);
  const [passwordvalid, setPasswordvalid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerror("");
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

    if (email && password
      && /(?=.*[a-z])/.test(password)
      && /(?=.*[A-Z])/.test(password)
      && /(?=.*[0-9])/.test(password)
    ) {
      

      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
       
          dispatch(userLoginInfo(user))
          
          localStorage.setItem("userLoginInfo",JSON.stringify(user))
          
            setTimeout(() => {
            navigate("/");
          }, 2000);
        
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Invalid your email and password.");
          }
        });
    }
  };

  // google sign in
  const googlesignin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
                    
            setTimeout(() => {
            navigate("/");
          }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;

        console.log(errorCode);
      });
  };

  return (
    <Container>
      <div className="flex justify-between">
        <div className="w-[756px] pt-[120px] pl-[120px]">
          <h2 className="font-secondary text-[#03014C] text-[33px] font-bold mb-[30px]">
            Login to your account!
          </h2>

          <button
            onClick={googlesignin}
            className="flex items-center font-secondary rounded-[8.34px] border-[#03014C]/30 py-[23px] border-2 pl-[29px] pr-[42px] text-[13px] font-semibold tracking-[2%] mb-[32px] cursor-pointer"
          >
            {" "}
            <img
              className="mr-[10px] size-[19.26px]"
              src={google_image}
              alt="#google_image"
            />
            Login with Google
          </button>

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
                    borderRadius: "0px",

                    "& fieldset": {
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      borderBottomColor: emailvalid ? "green" : "#11175D",
                      borderWidth: "2px",
                      opacity: emailvalid ? "1" : "0.3",
                    },
                    "&:hover fieldset": {
                      borderBottomColor: "#11175D",
                      opacity: "0.3",
                    },
                    "&.Mui-focused fieldset": {
                      borderBottomColor: "#11175D",
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

            <div className="relative">
              {show ? (
                <IoIosEyeOff
                  onClick={() => setShow(!show)}
                  className="absolute top-1/2 right-0 -translate-1/2 cursor-pointer z-[1] text-[#03014C]/30"
                  size={25}
                />
              ) : (
                <IoIosEye
                  onClick={() => setShow(!show)}
                  className="absolute top-1/2 right-0 -translate-1/2 cursor-pointer z-[1] text-[#03014C]/30"
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
                    borderRadius: "0px",

                    "& fieldset": {
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      borderBottomColor: passwordvalid ? "green" : "#11175D",
                      borderWidth: "2px",
                      opacity: passwordvalid ? "1" : "0.3",
                    },
                    "&:hover fieldset": {
                      borderBottomColor: "#11175D",
                      opacity: "0.3",
                    },
                    "&.Mui-focused fieldset": {
                      borderBottomColor: "#11175D",
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

            <button
              onClick={submitRegistration}
              className="relative py-[19px] w-full bg-[#1E1E1E] font-primary text-[21px] font-semibold text-[#FFFFFF] rounded-[8.71px] cursor-pointer shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-[52px]"
            >
              Login to Continue
            </button>

            <p className="mt-[35px] text-[#03014C] font-secondary text-[13px]">
              Don't have an account ?{" "}
              <Link
                to="/registration"
                className="text-[#EA6C00] font-secondary font-bold text-[13px]"
              >
                Sign up
              </Link>
            </p>

            <p className="text-primary font-primary font-bold">
              <Link to="/forgotpassword">Forgot Password ?</Link>
            </p>
          </div>
        </div>

        <div className="w-[684px]">
          <img
            src={login_image}
            className="h-screen object-cover"
            alt="regi_image"
          />
        </div>
      </div>
    </Container>
  );
};

export default Login;
