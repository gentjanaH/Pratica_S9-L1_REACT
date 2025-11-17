
import './App.css'
import ButtonComponents from "./components/ButtonComponents"
import ImageComponent from "./components/ImageComponent"
import InputField from "./components/InputField"

function App() {


  return (
    <>
      <div>
        <h1>La mia prima pagina con REACT</h1>
        <ImageComponent image="https:/placebear.com/400/400" imageDescription="Immagine Orso" />
      </div >
      <h1>Bottoni </h1>
      <div className="card">
        <InputField className="inputField" formName="il tuo nome" formSurname="il tuo cognome" formEmail="la tua mail" formPassword="scegli una password" btnHolder="INVIA" />
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
