import React from "react";

const Onboarding = ({ image }) => {
  const styles = {
    background: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
  };
  return <div className="slide" style={styles} />;
};

export default Onboarding;
