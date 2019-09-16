import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import SegundoComponente from './componentes/SegundoComponente'
// import { CompA, CompB } from './componentes/VariosComponentes'
// import { MultiDiv, MultiFrag, MultiArray} from './componentes/MultiElementos'
// import FamiliaJeager from './componentes/FamiliaJeager'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elementos = <div>
                    <Familia sobrenome="Uchiha">
                      <Membro nome="Sasuke"></Membro>
                      <Membro nome="Itachi"></Membro>
                    </Familia>
                    {/* <PrimeiroComponente valor="Valor do primeiro componente."/>
                    <SegundoComponente idade={22}/>
                    <CompA valor="Sou o componente A"/>
                    <CompB valor="Sou o componente B"/>
                    <MultiArray value="Componente Array"></MultiArray>
                    <MultiDiv value="Componente Div"></MultiDiv>
                    <MultiFrag value="Componente Fragment"></MultiFrag> 
                    <FamiliaJeager></FamiliaJeager> 
                    <Familia sobrenome="Borges">
                      <Membro nome="Weslley"></Membro>
                      {/* <Membro nome="Eren" sobrenome="Locke"></Membro> 
                    </Familia>*/}
                  </div>
const elemento = document.getElementById('root')
ReactDOM.render(elementos, 
                elemento)
