
import { useState ,useEffect} from "react";
import Error from "./Error";

// console.log(name);
//no colocarse dentro de condicionales o return 
// setName('hook')

const Formulario = ({patients,setPatients,patient,setPatient}) => {
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptoms, setSymptoms] = useState('')

  const [error, setError] = useState(false)
  
  useEffect(() => {

      if(Object.keys(patient).length>0){
        
        setName(patient.name);
        setOwner(patient.owner)
        setEmail(patient.email)
        setDate(patient.date)
        setSymptoms(patient.symptoms)

      }
    
  }, [patient])
  

  const generateID = () => {
     //content
     const ramdom=Math.random().toString(36).substr(2);
     const fecha=Date.now().toString(36);
     return ramdom+fecha
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name,owner,email,date,symptoms].includes('')) {
      console.log('Tiene al menos un campo vacio');
      setError(true)
      return;
    }
    setError(false)

    const ObjetoPaciente={
      name,
      owner,
      email,
      date,
      symptoms,
      
    }

    if (patient.id) {

      ObjetoPaciente.id=patient.id

      const patientUpdate=patients.map(
        
      patientState=> patientState.id === patient.id
      ?ObjetoPaciente:patientState)
      setPatients(patientUpdate)
      setPatient({})
      

    }else{
      // console.log('nuevo');
      ObjetoPaciente.id=generateID();
      setPatients([...patients,ObjetoPaciente])
    }
     console.log(console.log('Enviando formulario'));
     setName('')
     setOwner('')
     setEmail('')
     setDate('')
     setSymptoms('')
      };
  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 ml-10">
        <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>
        <p className="text-lg text-center mt-5 mb-10">
          Add patients and{" "}
          <span className="text-indigo-600 font-bold">Manage them</span>
        </p>

        <hr />
        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          {error &&<Error><p>Todos los campos son obligatorios</p></Error>}

          <div className="mb-5">
            <label
              htmlFor="mascota"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre de mascota
            </label>
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la Macosta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              // onChange={(e)=>console.log(e.target.value)}

            />
          </div>


          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre Propietario
            </label>
            <input
              id="propietario"
              type="text"
              placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={owner}
              onChange={(e)=>setOwner(e.target.value)}

            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-bold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Contacto del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}

            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="alta"
              className="block text-gray-700 uppercase font-bold"
            >
              Alta
            </label>
            <input
              id="alta"
              type="date"
              placeholder="Email Contacto del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={date}
              onChange={(e)=>setDate(e.target.value)}

            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="sintomas"
              className="block text-gray-700 uppercase font-bold"
            >
              Sintomas
            </label>
            <textarea
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los Sintomas"
              value={symptoms}
              onChange={(e)=>setSymptoms(e.target.value)}

            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 
            cursor-pointe transition-all"
            value={patient.id?"Editar paciente":"Agregar Paciente"}
          />

          {/* <label>Nombre de Propietario</label>
            <input 
                type="text" 
                placeholder="Nombre del Propietario"
            
            />
            <label>Nombre de Propietario</label>
            <input type="email" />
            <label>Alta</label>
            <input type="date" />
            <label>Sintomas</label>
            <input type="text" /> */}
        </form>
      </div>
    </>
  );
};

export default Formulario;
