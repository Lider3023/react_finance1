import { AnimatePresence } from "framer-motion";
import React, { type FC } from "react";
import { useLocation, useOutlet } from "react-router-dom";

const AnimateLayout: FC = () => {
  const location = useLocation();
  const outlet = useOutlet();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={location.pathname}>{outlet}</div>
      </AnimatePresence>
    </>
  );
};

export default AnimateLayout;
