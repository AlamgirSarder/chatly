import React from "react";
import Container from "../layout/Container";
import regi_image from "../../assets/registration.png";
import { TextField } from "@mui/material";

const Registration = () => {
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

          <form>
            <div className="w-[368px]">
              <div className="mb-[56px]">
                <TextField
                  label="Email Address"
                  variant="outlined"
                  type="text"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#11175D",
                        opacity:"0.3",
                    
                      },
                      "&:hover fieldset": {
                         borderColor: "#11175D",
                        opacity:"0.3",
                      },
                      "&.Mui-focused fieldset": {
                           borderColor: "#11175D",
                        opacity:"0.3",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "14px",
                      color: "#11175D",
                      opacity:"0.7",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#4ade80",
                    },
                  }}
                />
              </div>

              <div className="mb-[56px]"><TextField
                label="Full Name"
                variant="outlined"
                type="text"
                fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#11175D",
                        opacity:"0.3",
                    
                      },
                      "&:hover fieldset": {
                         borderColor: "#11175D",
                        opacity:"0.3",
                      },
                      "&.Mui-focused fieldset": {
                           borderColor: "#11175D",
                        opacity:"0.3",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "14px",
                      color: "#11175D",
                      opacity:"0.7",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#4ade80",
                    },
                  }}
          
              /></div>
              
             <div> <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
               sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#11175D",
                        opacity:"0.3",
                    
                      },
                      "&:hover fieldset": {
                         borderColor: "#11175D",
                        opacity:"0.3",
                      },
                      "&.Mui-focused fieldset": {
                           borderColor: "#11175D",
                        opacity:"0.3",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "14px",
                      color: "#11175D",
                      opacity:"0.7",
                    },
                    "& .Mui-focused .MuiInputLabel-root": {
                      color: "#4ade80",
                    },
                  }}
              /></div>

              <button className="relative py-[19px] w-full bg-[#1E1E1E] font-primary text-[21px] font-semibold text-[#FFFFFF] rounded-[86px] after:content-[''] after:absolute after:w-[71px] after:h-[28px] after:rounded-[86px] after:bg-[#5B36F5] after:top-1/2 after:left-1/2 after:blur-[43px] after:-translate-1/2 after:-z-1 z-1 cursor-pointer shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-[52px]">
                Sign up
              </button>

              <p className="mt-[35px] text-center text-[#03014C] font-secondary text-[13px]">
                Already have an account ?{" "}
                <span className="text-[#EA6C00] font-secondary font-bold text-[13px]">
                  Sign In
                </span>
              </p>
            </div>
          </form>
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
