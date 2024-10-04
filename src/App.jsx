import NavBar from "./components/NavBar"
import Test from "./components/Test"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Technologies from "./components/Technologies"

function App() {
  return (
    <div className="overflow-x-hidden text-white antialiased selection:bg-purple-900 selection:text-cyan-200 relative">
      {/* Background */}
      <div className="fixed top-0 left-0 -z-10 h-screen w-full">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-8">
        <NavBar />
        <Hero />
        <AboutMe />
        <Technologies />
      </div>
    </div>
  );

}

export default App