import React from "react";
import { Box, Heading } from "grommet";
import Socials from "./Socials";
import Body from "./Body";
// import Arrows from './Arrows'
import Images from "./Images";

const Home = ({
  darkMode,
  setDarkMode,
  setAnimationType,
  size,
  animationType,
}) => {
  const props = {
    main: {
      fill: true,
      alignSelf: "center",
      height: { min: "large" },
      width: { max: "1200px" },
      justify: "center",
      pad: "large",
      className: "Home",
    },
    header: {
      darkMode,
      setDarkMode,
    },
  };

  return (
    <Box {...props.main}>
      <Images />
      {/* <Arrows /> */}
      <Box direction="row" justify="between" align="center">
        <Box width="xxsmall"></Box>
        <Body
          animationType={animationType}
          size={size}
          setAnimationType={setAnimationType}
        />
        <Socials direction="column" color="#003060" selector="socials-end" />
      </Box>
      <div className="socials-start">
        <Heading level={4}></Heading>
      </div>
    </Box>
  );
};

export default Home;
