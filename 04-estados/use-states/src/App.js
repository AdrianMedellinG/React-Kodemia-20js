//import Agua from './components/Agua'
import stylesApp from './App.module.css'; 
import Calculadora from './components/calculadora/Calculadora'
function App() {
  return (
    <div className={stylesApp.app}>
      <Calculadora number={0}/>
    </div>
  );
}

export default App;