import styled from 'styled-components'
import { useState } from 'react';
import {useSelector} from 'react-redux';

import { useEffect } from 'react';

import { Pendenting } from './status.action';

function Status(){
    const [pendenting, setPendenting] = useState();
    const [finished, setFinished] = useState();

    const list = useSelector((state)=>state.list);

    useEffect(() => {

        setPendenting(Pendenting(list));
 
    },[list, pendenting]);

    console.log(pendenting)

    return (
        <DivStatus>

            <h1 className='color'> Status das tarefas </h1>

            <div>
                <p>
                    {Pendenting(list) === 0 ? 'Não há nenhuma tarefa pendente' : ` Há ${Pendenting(list)} tarefas pendentes!`};
                </p>
            </div>

        </DivStatus>
    )
}
export default Status;

const DivStatus = styled.div`
position: relative;
top: 130px;
width: 80%;
border: solid;
display: flex;
justify-content: center;
margin: 0 auto;
border: solid 1px #b3addf;
background: #c6ddff;

    
`