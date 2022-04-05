// import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({patients,setPatient,eliminarPaciente}) => {
  // useEffect(() => {
  
  
  //   return () => {
  //     if (patients.length>0) {
        
  //       console.log('nuevoPaciente');
  //     }
  //   }
  // }, [patients])
  // console.log(patients);
  return (
    <div className=":w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients&&patients.length?(
        <>
          <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your {''} 
              <span className="text-indigo-600 font-bold ">patient and appointments </span> 
            </p>
            

            {patients.map((patients)=>{
                return(<Paciente 
                    key={patients.id}
                    patients={patients}
                    setPatient={setPatient}
                    eliminarPaciente={eliminarPaciente}
                  //  otra Forma
                  //  {...patients}
                  />
                )
              })}
        </>

        ):(
          <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando paciente {''} 
              <span className="text-indigo-600 font-bold ">y apareceran en este lugar</span> 
            </p>
  
          </>
        )}
        


    </div>

  );
};

export default ListadoPacientes;
