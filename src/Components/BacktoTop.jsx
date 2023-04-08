import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { useEffect } from "react";

const BacktoTop = () => {
  const [backtoButton, setBacktoButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBacktoButton(true);
      } else {
        setBacktoButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const BoxContainer = styled(Box)(({ theme }) => ({
    width: "40px",
    height: "40px",
    backgroundColor: "#0f1b4c",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    position: "fixed",
    zIndex: 2,
    bottom: "30px",
    right: "30px",
  }));

  return (
    <>
      {backtoButton && (
        <BoxContainer>
          <ExpandLessIcon onClick={scrollUp}></ExpandLessIcon>
        </BoxContainer>
      )}
    </>
  );
};

export default BacktoTop;
