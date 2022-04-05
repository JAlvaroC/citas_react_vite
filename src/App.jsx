import { useState,useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

// import 'App.css'



function App() {
const [patients, setPatients] = useState([])
const [patient, setPatient] = useState({})

useEffect(() => {
  const obtenerLs = () => {
     const pacientesLS=JSON.parse(localStorage.getItem('patients')??[])
     setPatients(pacientesLS);
  };
  obtenerLs();
  
}, [])

useEffect(() => {
  
    console.log('cambio componente ');
    localStorage.setItem('patients',JSON.stringify(patients))

  
}, [patients])


const eliminarPaciente = (id) => {
  //  console.log('Eliminado',id);
  const pacienteUpdate=patients.filter(patient=>patient.id!==id);
  setPatients(pacienteUpdate);
};


  return (
    <div className="container mx-auto mt-20">
      <Header

      />
      <div className="mt-12 md:flex">

        <Formulario
          patient={patient}
          patients={patients}
          setPatients={setPatients}
          setPatient={setPatient}
        />
        <ListadoPacientes 
          patients={patients}
          setPatient={setPatient}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
     
    </div>
  )
}

export default App

