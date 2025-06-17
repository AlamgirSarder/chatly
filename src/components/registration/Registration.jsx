import React from "react";
import Container from "../layout/Container";
import regi_image from "../../assets/registration.png";
import { TextField } from "@mui/material";

const Registration = () => {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="w-[756px] pt-[225px] pl-[190px]">
          <h2 className="font-primary text-primary text-[35px] font-bold mb-[13px]">
            Get started with easily register
          </h2>
          <p className="font-primary text-black/50 text-[21px] mb-[61px]">
            Free register and you can enjoy it
          </p>

          <div className="w-[368px] flex flex-col gap-[56px]"> {/* adds spacing between inputs */}
            <TextField
              label="Email Address"
              variant="outlined"
              type="text"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#6366f1', // Tailwind indigo-500
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#4ade80', // Tailwind green-400
                  },
                },
                '& .MuiInputLabel-root': {
                  fontSize: '16px',
                  color: '#6b7280', // gray-500
                },
                '& .Mui-focused .MuiInputLabel-root': {
                  color: '#4ade80',
                },
              }}
            />
            <TextField
              label="Full Name"
              variant="outlined"
              type="text"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#6366f1',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#4ade80',
                  },
                },
                '& .MuiInputLabel-root': {
                  fontSize: '16px',
                  color: '#6b7280',
                },
                '& .Mui-focused .MuiInputLabel-root': {
                  color: '#4ade80',
                },
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#6366f1',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#4ade80',
                  },
                },
                '& .MuiInputLabel-root': {
                  fontSize: '16px',
                  color: '#6b7280',
                },
                '& .Mui-focused .MuiInputLabel-root': {
                  color: '#4ade80',
                },
              }}
            />
          </div>
        </div>

        <div className="w-[684px]">
          <img src={regi_image} className="h-screen object-cover" alt="regi_image" />
        </div>
      </div>
    </Container>
  );
};

export default Registration;
