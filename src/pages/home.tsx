import Chefs from "../components/Chefs/Chefs";
import Maps from "../components/Maps/Maps";
import Panel from "../components/Panel/Panel";
import Intro from "../components/Intro/Intropage";

const index = () => {
  return (
    <>
      <Intro />
      <Panel />
      <Chefs />
      <Maps />
    </>
  );
};

export default index;
