import Canvas from "./Canvas/index" // or "./Canvas"
import Customizer from "./Pages/Customizer"
import Home from "./Pages/Home"

//called from main.jsx
function App() {
  return (
    <main className="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customizer/>
    </main>
  );
}

export default App;
