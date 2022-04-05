


function App() {
  const sumar=()=>{

    const numero=5;

    if(numero>5){
      console.log('Si es mayor');
    }else{
      console.log('no es mayor');
    }

    console.log(2+2)
  }
  sumar();
  const edad=16;

  return (
    <>
      <div>
        {edad>=18 ?' Eres mayor de edad':'No eres mayor de edad'}
        <h1>{'Hi world'.toUpperCase()}</h1>
        <p>Un parrafo</p>
      </div>
      <div>
        <h1>Hi world</h1>
        <p>Un parrafo</p>
      </div>
     
    </>
  )
}

export default App
