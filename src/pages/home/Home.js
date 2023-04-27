import React from "react";
import { useAuth } from "../../context/AuthContext";
import Carrousel from "./Carrousel";
import Text from "./Text";

function Home() {

  return (
    <div>
      <Carrousel/>
      <Text></Text>
    </div>
  );
}

export default Home;
