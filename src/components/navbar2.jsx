import BelowNav from "./../components/svg-components/belowNav";
import RightBtnHeader from "../components/rightBtnHeader";
import MenueBar from "../components/menuebar";

const Navbar2 = () => {
  return (
    <>
      <div className="container-fluid be-purple">
        <MenueBar />
        <RightBtnHeader />
      </div>
      <BelowNav />
    </>
  );
};

export default Navbar2;
