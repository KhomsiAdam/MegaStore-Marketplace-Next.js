import { Button } from "@mui/material";
import React, { useState } from "react";
import CreationForm from "./storeSteps/CreationForm";

export const StoreCreation = () => {
  const [startCreation, setStartCreation] = useState(false);

  if(startCreation) {
    return (
      <CreationForm/>
    )
  }
  return (
    <div className="w-full flex h-full flex-col items-center">
      <iframe
        className="w-full"
        width={400}
        height={400}
        src="https://embed.lottiefiles.com/animation/78743"
      ></iframe>
      <span>
        <Button
          onClick={() => setStartCreation(true)}
          variant="contained"
          color="primary"
        >
          CREATE YOUR STORE NOW
        </Button>
      </span>
    </div>
  );
};
