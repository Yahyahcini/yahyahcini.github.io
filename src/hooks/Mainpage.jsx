import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function mainpage() {

  let formtwo = document.getElementById('formtwo')
  console.log(formtwo)


  const gradientStyle = {
    position: 'absolute',
    top: '50%',
    left: '0%',
    transform: ' translate(-50%, 0%)',
    width: '800px',
    height: '800px',
    borderRadius: '50% 22% 40% 80%',
    filter: 'blur(100px)',
    background: 'radial-gradient(circle at 50% 50%,rgba(76, 0, 255, 1), rgba(76, 0, 255, 0))',
    opacity: '.3'
  }
  const gradientStyleright = {
    position: 'absolute',
    top: '-400px',
    right: '-400px',
    width: '800px',
    height: '800px',
    filter: 'blur(90px)',
    borderRadius: '50% 22% 40% 80%',
    background: 'radial-gradient(circle at 50% 50%,#db2777, rgba(76, 0, 255, 0))',
    opacity: '.3'
  }

  return (
    <div className="bg-slate-950  capitalize">
      <div className="radial-gradient z-0 " style={gradientStyle}></div>
      <div className=" " style={gradientStyleright}></div>

      <div className="">
        <Header />
        <div className="flex ">
          <LeftSideBar />
          <RightSideBar />
        </div>
        <Skills />
      <Contact />
      </div>
      <Footer />

    </div>
  );
}
export default mainpage;
