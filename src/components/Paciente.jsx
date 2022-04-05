

const Paciente = ({patients,setPatient,eliminarPaciente}) => {
  console.log(patients);
  const {name,  owner,  email,  date,  symptoms,id}=patients;
  const handleEliminar = () => {
    //  console.log('Eliminando')
    const  respuesta=confirm('Debes eliminar este paciente ?');
    if(respuesta){

      eliminarPaciente(id)
    }

  };
  
  console.log(name);
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas{" "}
        <span className="font-normal normal-case">
          {symptoms}
        </span>
      </p>
      <div className="flex justify-between mt-10">
        <button type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase
        rounded-lg"
        onClick={()=>setPatient(patients)}
        >Editar</button>
        <button type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase
        rounded-lg"
        onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
