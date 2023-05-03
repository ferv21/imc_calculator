import { useState } from "react"

const Formulario = () =>{

    let [altura, setAltura]= useState(0);//desestruturação
    let [peso, setPeso]= useState(0);
    
    const resultado = () => {
        
        altura = altura / 100;
        let imc  = peso / (altura * altura);
        imc = imc.toFixed(2);
        
        let resultado = "";
        
        switch (true) {
          case (imc < 18.50):
            resultado = `O resultado do IMC é: ${imc}, Abaixo do Peso`;
            break;
          case (imc > 18.50 && imc < 24.99):
            resultado = `O resultado do IMC é: ${imc}, Peso Normal`;
            break;
          case (imc > 24.99 && imc < 29.99):
            resultado = `O resultado do IMC é: ${imc}, Excesso de Peso`;
            break;
          case (imc >= 30):
            resultado = `O resultado do IMC é: ${imc}, Obeso`;
            break;
          default:
            resultado = "";
        }
        
        return resultado;

    }


    return (
        <>
        <div className="container">
        <h1>Calculadora IMC</h1>
        <div className="formulario">
        <form action="">
            <label htmlFor="">Altura (cm) </label>
            <input type="number" onChange={({target}) => setAltura(target.value)} /> 
            <label htmlFor="">Peso (kg) </label>
            <input type="number" onChange={({target}) => setPeso(target.value)} />
            <p>{resultado()}</p>
        </form>
        </div>
        </div>
        </>
    )


}

export default Formulario;
