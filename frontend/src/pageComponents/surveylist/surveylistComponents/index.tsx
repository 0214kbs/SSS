"use client";
import Banner from "./components/banner";
import Cardlist from "./components/cardlist";
import Plusbutton from "./components/plusbutton";

const SurveylistComponents = (props: any) => {
  const path = props.selectBtn;
  const bgcolor = path === "1" ? "rgba(142, 105, 255, 0.20)" : "rgba(255, 250, 174, 0.20)";

  return (
    <div style={{ backgroundColor: bgcolor }}>
      <Banner selectBtn={path} />
      <Cardlist selectBtn={path} />
      <Plusbutton selectBtn={path} />
    </div>
  );
};
export default SurveylistComponents;