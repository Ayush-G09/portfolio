import Header from "./Header/Header";
import Home from "./Home/Home";
import Information from "./Information/Information";


function App() {
  return (
    <>
      <div className="w-screen h-screen cursor-pointer">
        <Header/>
        <Home/>
        <Information/>
      </div>
    </>
  );
}

export default App;
