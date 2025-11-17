
import './App.css'
import ButtonComponents from "./components/ButtonComponents"
import ImageComponent from "./components/ImageComponent"
import InputField from "./components/InputField"

function App() {


  return (
    <>
      <div>
        <ImageComponent image="https:/placebear.com/400/400" imageDescription="Immagine Orso" />
      </div >
      <h1>La mia prima pagina con REACT</h1>
      <div className="card">
        <InputField pHolder="il tuo nome" btnHolder="INVIA" />
        <ButtonComponents btnText="Premi qui"></ButtonComponents>
        <p>

          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
