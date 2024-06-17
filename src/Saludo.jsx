 
import './App.css';

function Holi(props) {
  return (
    <div id="contenedor">
      {/* encabezado */}
      <div className="texto">
        <h1>{props.lugar}</h1>
      </div>
      {/* encabezado */}
      <div id="parrafo">
        <center>
          <div className='texto2'></div>
          <h3>Nuestro menú en {props.lugar} es variado y delicioso, perfecto para el invierno que se viene en la ciudad de {props.ciudad}. Ven y degusta de nuestra variedad en repostería.</h3>
          <h1>SOLO EN {props.lugar}</h1>
        </center>
      <div id='lista'>
         <div className='texto3'></div>
         <h2>{props.comida} de {props.sabor1}</h2>
         <p> 50.{props.precio} </p>
         <h2>{props.comida} de {props.sabor2} </h2>
         <p> 60.{props.precio}</p>
         <h2>{props.comida} de {props.sabor3}</h2>
         <p>70.{props.precio}</p>
         <h2>{props.comida} de {props.sabor4}</h2>
         <p>80.{props.precio}</p>
         <h2>{props.comida} de {props.sabor5}</h2>
         <p>90.{props.precio}</p>
      </div>
        </div>
        </div>
       
      
    
  );
}


export default Holi;