import styled from "styled-components";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux/es/exports";

import Pending from "./pending/pending";
import Finished from "./finished/finished";

function List(){
    const [controler, setControler] = useState(false);

    const tasks = useSelector((state)=>state.list);

    useEffect(() => {
        setTimeout(()=>{
         Controler();   
        }, 100)
    }, [controler, tasks]);

    function Controler (){
        let list = JSON.parse(localStorage.getItem('list'));
        for (let i = 0; i < tasks.length; i++){
            if (tasks[i].finished !== 0) {
                setControler(!controler);
            }
        }
    }

    return (
        <DivList>
            <Pending />
            <Finished />
        </DivList>
    )
}
export default List;

const DivList = styled.div`
position: relative;
top: 60px;
width: 90%;
display: flex;
margin: 0 auto;
justify-content: space-around;

    @media (max-width: 900px){
        flex-direction: column; 
    }
`