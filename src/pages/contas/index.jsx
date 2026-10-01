import './index.scss';
import { Link } from 'react-router';
import { useState } from 'react';

export default function Contas() {

    const[descricao,setdescricao] = useState('');

    function mudar(e){
        let novovalor = e.target.value;
        setdescricao(novovalor);
    }

    const[descricao1,setdescricao1] = useState('?');
    const[descricao2,setdescricao2] = useState ('?');

    const[cor,setcor] = useState ('?');
    function mudarcor(e){
        let novovalor = e.target.value
        setcor (novovalor)

    }


    function trocar (){
        setdescricao2(descricao1)
    }

    function texto1(e){
       let novovalor = e.target.value
        setdescricao1(novovalor)
    }

    const[caixa,setcaixa] = useState (true)
  

    function mudarcaixa (e){
     setcaixa(e.target.checked)
    }

    
 



    return(
        <div className="contas" style={{backgroundColor:cor}} >
            <h1>Contas</h1>
            <Link to="/contato">Contato</Link>
            <br />
            <Link to="/">Inicio</Link>


            <section className=' escrita'>
                <h2>Alterar Escrita</h2>
                <h1>{descricao}</h1>
                <input type="text" onChange={mudar}/>
            </section>

            <section className='botao'>
            <h2>Alterar a partir de um botao</h2>
            <h1>{descricao2}</h1>
            <input type="text" onChange={texto1} />
            <button onClick={trocar}>mudar</button>
            </section>


            <section className='cor'>
            <h2>Alterar a cor</h2>
            <h1>A cor é {cor}</h1>
            <input type="color" onChange={mudarcor} />
            </section>

            <section className='box'>
            <h2>checkbox</h2>
            <h1>Voce gosta de informatica?{caixa?"sim":"Nao"}</h1>
            <input type="checkbox" onChange={mudarcaixa} />
            </section>
            
        </div>
    )
    
}