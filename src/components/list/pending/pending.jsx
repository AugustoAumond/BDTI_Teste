import styled from "styled-components";
import { useState, useEffect } from "react";

import {edit} from "../../../store/lists/list.actions";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { ListPendenting, RemoveAction } from "../list.action";

function Pending(){
    const [list, setList] = useState();
    const [check, setCheck] = useState();
    const [open, setOpen] = useState(true);
    const [Identificator, setIdentificator] = useState();
    const [text, setText] = useState();

    const tasks = useSelector((state)=>state.list);

    const dispatch = useDispatch();

    useEffect(()=>{

        setList(tasks);    

    },[tasks])

    // Marcar e desmarcar o checkbox;
    function ChangeCheck(value){
        let check = value; 
        let newList = tasks;
        newList.forEach(e =>{
          if (check.id === e.id){
                newList[e.id].finished = !newList[e.id].finished
            }  
        })  
        setCheck(value);
        localStorage.setItem('list', JSON.stringify(newList));
        dispatch(edit(tasks, newList)); 
    }

    // Abrir fechar o nome da tarefa, abrir input, fechar botão remover, editar e adicionar a lista (redux/localStorage);
    function Edit (id, name){
        let newList = list;
        setOpen(!open);
        if (open === true){
            setText(name);
            setIdentificator(id);
            document.querySelector('#iedit').style.display = 'flex';
            document.querySelector('#task').style.display = 'none';
            document.querySelector('#remove').style.display = 'none';
        } else{
            newList[id].name = text === '' ? window.alert('Insira uma tarefa') : text ;
            dispatch(edit(list, newList));
            document.querySelector('#iedit').style.display = 'none';
            document.querySelector('#task').style.display = 'flex';
            document.querySelector('#remove').style.display = 'flex';
        }
    }
    
    // Remover o item da lista baseado no id e reorganizar ids;
    function Remove(id){
        let newList = RemoveAction(id, list);
        if (newList.length === 0){
            newList[0] = {id: 0, name: 'Nenhuma tarefa pendente', finished: false};
        }
        dispatch(edit(list, newList));
        setList(newList);
      }

    return(
        <DivPending className="itemsbackground">
            <div id="title">
               <h2 className="color" id="size">Tarefas Pendentes</h2> 
            </div>  

            <div id="task">
                <ol className="color">
                    {ListPendenting(tasks) ? ListPendenting(tasks).map((e, index)=>(
                        <li key={index}>
                            <input id="check"  value={e.finished} onClick={(()=> ChangeCheck(e))} type="checkbox" checked={e.finished === true} />

                            {e.name}
                            
                            <div id="align">
                                <button id="edit" className="color itemsbackground" onClick={(()=> Edit(e.id, e.name))}> Editar </button> 
                                <button id="remove" onClick={(()=> Remove(e.id))} className="color itemsbackground"> Remover </button>
                            </div>

                            
                        </li>
                    )) : <p> Nenhuma tarefa encontrada </p>}
                </ol> 
            </div>   

            <div id={`iedit`} >
                <input  value={text} onChange={((e)=> setText(e.currentTarget.value))}/>
                <button id="edit" className="color itemsbackground" onClick={(()=> Edit(Identificator, text))}> Editar </button> 
            </div>  
            

        </DivPending>
    )
}
export default Pending;

const DivPending = styled.div`
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
        margin: 5px;
        font-size: 16px;
        word-break: break-word;
        text-style: stroke 2px;
        margin-bottom: 10px;
        border-radius: 5px;
        justify-content: space-between;
        width: 94%;
        display: flex;
        border-bottom: solid 1px linear-gradient(45deg,#a6c7f3,#b3addf);
        list-style: none;
        
    }

    #check {
        position: relative;
        left: -13px;
        display: flex;
        margin: 5px;
        width: 5%;
        cursor: pointer;
    }

    #iedit {
        display: none;
        justify-content: center;
        align-items: center;
        margin: 45px;
    }

    #task {
        display: flex;
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

    #remove {
        display: flex;
        align-items: center;
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