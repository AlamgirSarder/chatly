
import Container from "../components/layout/Container";
import regi_image from "../assets/registration.png";
import { TextField } from "@mui/material";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router";


const Registration = () => {
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

    if(email && fullname && password){
      console.log("Registration Successful");
      setEmailvalid(false)
      setNamevalid(false)
      setPasswordvalid(false)
      setEmail("")
      setFullname("")
      setPassword("")
      
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

            <button
              onClick={submitRegistration}
              className="relative py-[19px] w-full bg-[#1E1E1E] font-primary text-[21px] font-semibold text-[#FFFFFF] rounded-[86px] after:content-[''] after:absolute after:w-[71px] after:h-[28px] after:rounded-[86px] after:bg-[#5B36F5] after:top-1/2 after:left-1/2 after:blur-[43px] after:-translate-1/2 after:-z-1 z-1 cursor-pointer shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-[52px]"
            >
              Sign up
            </button>

            <p className="mt-[35px] text-center text-[#03014C] font-secondary text-[13px]">
              Already have an account ?{" "}
              <Link to="/login" className="text-[#EA6C00] font-secondary font-bold text-[13px]">
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
