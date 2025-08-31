import { useState } from "react";

function Titulo({ nome, p }){
    const [texto, setTexto] = useState("Um titulo do estado inicial");
    const [inputText, setInputText] = useState("");

    function clicou(){
        setTexto(inputText);
    }

    return (
        <div>
             <h1>{texto}</h1>
             <h1></h1>
             <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text"></input>
             <button onClick={clicou}>Enviar texto</button>
             <button onClick={()=>{setTexto("Mudei via botão")}}>Mudar</button>
            <h2>Oi eu sou {nome ? nome : "Z"}</h2>
            {
            p ?
            <p>Paragrafo</p>
            :
            <p>Sem Paragrafo</p>
            }
        </div>
        
    )
  }
  
  export default Titulo;