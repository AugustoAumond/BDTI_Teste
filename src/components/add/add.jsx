import styled from "styled-components";
import {useEffect, useState} from 'react';
import {edit, add} from "../../store/lists/list.actions";
import { useSelector, useDispatch } from "react-redux/es/exports";

function Add (){
    const [task, setTask] = useState('');

    const list = useSelector((state)=>state.list);

    const dispatch = useDispatch();

    useEffect(()=>{

    }, [list, task])

    // Adicionar a lista ao redux (se não houver list substituir pela tarefa insirita, caso haja adicionar a lista e adicionar ao localStorage para inicializar caso haja lista no loca) e zerar o input;
    function AddRedux(value){
       let obj = {id: list.name === null ? 0 : list.length , name: value, finished: false};
       let newList = [];
       if (value === '' || value.length < 7){
        window.alert('Insira a tarefa!')
       } else {
        if (list[0].name === 'Nenhuma tarefa pendente'){
            obj.id = 0;
            dispatch (edit(list, [obj]));
        } else {
            newList = list;
            newList.push(obj);
            dispatch (add(list, newList));
        }
       }    
       document.querySelector('#align').style.display = 'flex';
       document.querySelector('#check').style.display = 'flex';
        setTask('');
    }

    return (
        <DivAdd className="basic">
            <h2 className="color"> Adionar tarefa </h2>
            <div>
               <input className="color" type="text" value={task} onChange={((e) => setTask(e.currentTarget.value))} />  
               <button className="color itemsbackground" onClick={((e)=> AddRedux(task))}> Adicionar </button>
            </div>
        </DivAdd>
    )
}
export default Add;

const DivAdd = styled.div`
position: relative;
top: 100px;
display: flex;
flex-direction: column;
align-items: center;
width: 60%;
height: 120px;
background: #c6ddff;
border: solid 1px #b3addf;

    div {
        width: 100%;
        display: flex;
        justify-content: center;
        height: 27px;
    }

    @media (max-width: 600px){
        min-width: 300px;
        
        h3 {
            font-size: 16px;
        }

        input {
            width: 46%;
            height: 8px;
            margin-top: 10px;
        }

        button {
            width: 60px;
            height: 18px;
            font-size: 10px;
            margin-top: 10px;
        }
    }
`