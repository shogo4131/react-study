import type { NextPage } from "next";
import Header from "../component/Header";

const About: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <h1>About</h1>
    </div>
  );
};

export default About;
