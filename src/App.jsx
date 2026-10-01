import {useState} from 'react'
import './App.css'


function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setImc] = useState('')
  const [erro, setErro] = useState('')
  const [classificacao, setClassificacao] = useState('')


  function calcularIMC() {
    if (peso <= 0 || altura <= 0) {
      setErro('Preencha o peso e altura corretamente')
      setImc('')
      setClassificacao('')
      return
    }

    setErro('')

    const resultado = peso / (altura * altura)
   
    if (resultado < 18.5) {
  setClassificacao('IMC abaixo da faixa de referência')
} else if (resultado < 25) {
  setClassificacao('IMC dentro da faixa de referência')
} else if (resultado < 30) {
  setClassificacao('IMC acima da faixa de referência')
} else {
  setClassificacao('IMC em faixa mais elevada')
}

    setImc(resultado.toFixed(2))
  
  }
    function limpar() {
  setPeso('')
  setAltura('')
  setImc('')
  setErro('')
  setClassificacao('')
}
  return (
    <div className="calculadora">
      <h1>Calculadora de IMC</h1>

      <div className="campo">
      <label>Peso (kg):</label>
      
      <input 
      type= "number"
      value={peso}
      onChange={(event) => setPeso(event.target.value)}
      />
      </div>

    <div className= "campo" >
      <label> Altura (m):</label>

      <input 
      type= "number"
      value={altura}
      onChange={(event) => setAltura(event.target.value)}/>
  
     </div>
    
     
      <p><button onClick={calcularIMC}>
        Calcular IMC
        </button>
      </p>
      <button
      className="limpar"
      onClick={limpar}
      >
        Limpar
      </button>
{erro && (
  <p className="erro">{erro}</p>
)}
        {imc && (
          <div className="resultado">
            <span> Seu IMC é: </span>
            <strong> {imc}</strong>
            <small> {classificacao}</small> 
          </div>
        )}
      </div>

      
    )
  
  
}

export default App