function Titulo(){
    let nome = "nome javascript"
    const soma = 10 + 10;
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";

    return (
        <div>
            <h1>Titulo Componente variavel: {nome} , {soma}</h1>
            <p>Paragrafo</p>
            <img width={150} src={urlImg}/>
        </div>
        
    )
  }
  
  export default Titulo;