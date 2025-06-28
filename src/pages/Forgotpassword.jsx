import { TextField } from "@mui/material";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { RingLoader} from "react-spinners";

const Forgotpassword = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [loaderback, setLoaderback] = useState(false);
  const [loader, setLoader] = useState(false);

  const [emailvalid, setEmailvalid] = useState(false);

const [dna, setDna] = useState(false)
 

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerror("");
  };

  const resetbtn = () => {
    if (!email) {
      setEmailerror("Enter your Email");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailerror("Enter valid email");
        setEmailvalid(false);
      } else {
        setEmailvalid(true);
      }
    }
    if (email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
   

          
      sendPasswordResetEmail(auth, email)
     

        .then(() => {
          toast.success("Successful reset. Please check your email");
        
            setDna(true)
            setTimeout(() => {
              setDna(false)
            }, 2000);
            setEmail("")

            
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
      
    }
  };

  const backtologin = () => {
    setLoaderback(true);
    setTimeout(() => {
      navigate("/login");
    }, 100);
  };
  return (
    <div className="bg-primary h-screen flex justify-center items-center">
      <ToastContainer
        position="top-center"
        autoClose={2000}
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
      <div className="bg-white w-[600px] h-[300px] rounded-[10px] py-5 px-5">
       <div className="flex items-center justify-center py-5">
         {
          dna ? (<RingLoader
        color={"#11175D"}
        loading={true}
        cssOverride={""}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />):
        (<h2 className="font-primary text-3xl text-center capitalize font-bold mb-5">
          {" "}
          forgot password
        </h2>)
        }
       </div>
        <div className=" relative">
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

        <div className="flex justify-evenly mt-10">
          <div>
            <button
              onClick={backtologin}
              className="relative py-[10px] px-[15px] bg-[#1E1E1E] font-primary text-[21px] font-semibold text-[#FFFFFF] rounded-[10px] cursor-pointer shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[200px]"
            >
              {" "}
              {loaderback ? (
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
                "Back to Login"
              )}
            </button>
          </div>
          <div>
            <button
              onClick={resetbtn}
              className="relative py-[10px] px-[15px] bg-[#1E1E1E] font-primary text-[21px] font-semibold text-[#FFFFFF] rounded-[10px] cursor-pointer shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
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
                "Reset"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
