import styled from "styled-components";

function Header (){
    return (
        <DivHeader className="basic">
            <h1 className="color title"> Lista de Tarefas </h1>
        </DivHeader>
    )
}
export default Header;

const DivHeader = styled.header`
position: relative;
top: 30px;
width: 95%;
height: 80px;
border: solid 1px #b3addf;
border-radius: 15px;
background: #c6ddff;;

    .title {
        font-family: 'Open Sans', sans-serif;
        text-align: center;
    }

    h1 {
        color: #7f7cf9;
        font-family: 'Open Sans', sans-serif;
    }

    @media (max-width: 900px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`