import styled from 'styled-components'
import {useEffect  } from 'react';
import {useSelector} from 'react-redux';

import { Pendenting } from './status.action';

function Status(){
    const tasks = useSelector((state)=>state.list);

    useEffect(() => {
 
    },[tasks]);


    return (
        <DivStatus>

            <h1 className='color'> Status das tarefas </h1>

            <div className='color'>
                
                Você tem {Pendenting(tasks)} tarefas por concluir
                
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
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
border: solid 1px #b3addf;
background: #c6ddff;

    div {
        position: relative;
        margin: 20px;
    }
    
`