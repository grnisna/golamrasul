import Homepage from "./FixedComponent/HomePage/Homepage";

import menuBG from "../src/Assets/menuBG.png";
import MenuSection from "./SharedComponent/MenuSection/MenuSection";

function App() {
  return (
    <section className="lg:flex justify-items-center">
      {/* Menu Aread */}
      <div
        style={{
          background: `url(${menuBG})`,
          backgroundSize: "cover",
        }}
        className="lg:w-[20%] hidden lg:block fixed min-h-screen"
      >
        <MenuSection />
      </div>
{/* content Area */}
      <div>
        <Homepage />
      </div>
    </section>
  );
}

export default App;
