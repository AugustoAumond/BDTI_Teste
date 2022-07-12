import styled from "styled-components";
import { useState, useEffect } from "react";

import {edit} from "../../../store/lists/list.actions";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { ListFinished, RemoveAction } from "../list.action";

function Finished(){
    const [list, setList] = useState();
    const [check, setCheck] =useState();

    const tasks = useSelector((state)=>state.list);

    const dispatch = useDispatch();

    useEffect(() =>{

        setList(tasks)

    },[tasks, check])

    // Marcar e desmarcar o checkbox;
    function ChangeCheck(value){
        let check = value; 
        let newList = tasks;
        newList.forEach(e =>{
          if (check.id === e.id){
                newList[e.id].finished = !newList[e.id].finished;
            }  
        })  
        dispatch(edit(tasks, newList)); 
        localStorage.setItem('list', JSON.stringify(newList));
        setCheck(value);
    }


     // Remover o item da lista baseado no id e reorganizar ids;
    function Remove(id){
        let newList = RemoveAction(id, list);
        if (newList.length === 0){
            newList[0] = {id: 0, name: 'Nenhuma tarefa pendente', finished: false};  
            document.querySelectorAll('#check').style.display = 'none';
        }
        dispatch(edit(list, newList));
        setList(newList);
      }


    return(
        <DivFinished className="itemsbackground">
            <div id="title">
               <h2 className="color" id="size">Tarefas Concluidas</h2> 
            </div>            
            <ol className="color">
                {ListFinished(list) ? ListFinished(list).map((e, index)=>(
                    <li key={index}> 
                        <input id="check"  value={e.finished} onClick={(()=> ChangeCheck(e))} type="checkbox" checked={e.finished === true} />
                        {e.name}
                        <div id="align">
                            <button id="remove" className="color itemsbackground" onClick={(()=> Remove(e.id))}> Remover </button>
                        </div>
                        
                    </li>
                )) : <p> Nenhuma tarefa encontrada </p>}
            </ol>   
        </DivFinished>
    )
}
export default Finished;

const DivFinished = styled.div`
width: 47%;
border: solid 1px #b3addf;

    #title {
        display: flex;
        width: 100%;
        aligne-items: center;
        justify-content: center;
        height: 40px;
    }

    ol {
        margin-top: 30px;
        width: 96%;
        font-size: 20px;
    }

    li {
        position: relative;
        left: -21px;
        font-size: 16px; 
        text-decoration: line-through;
        margin: 5px;
        word-break: break-word;
        margin-bottom: 10px;
        justify-content: space-between;
        width: 94%;
        display: flex;
        list-style: none;
        border-bottom: solid 1px linear-gradient(45deg,#a6c7f3,#b3addf);
    }

    #check {
        cursor: pointer;
        position: relative;
        left: -13px;
        display: flex;
        margin: 5px;
        width: 5%;
    }

    #align {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    button {
        font-size: 12px;
        width: 70px;
    }

    @media (max-width: 900px){
        margin: 0 auto; 
        width: 80%;
        margin-bottom: 30px;
    }

    @media (max-width: 600px){
        min-width: 300px;

        size {
            font-size: 16px;
        }

        li {
            width: 90%;
            font-size: 10px;
        }

        button {
            font-size: 8px;
            width: 50px;
            height: 18px;
        }
    }

`