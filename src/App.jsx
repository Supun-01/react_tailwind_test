import NavBar from "./components/NavBar"
import Test from "./components/Test"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="overflow-x-hidden  text-white antialiased selection:bg-purple-600 selection:text-white">

      <div className="flixed top-0 -z-0 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>



      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />

        {/* <Test /> */}
      </div>

    </div>
  )
}

export default App