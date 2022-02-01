import styled from "styled-components";

interface BlackProps{
    Black: boolean;
}

export const Container = styled.div<BlackProps>`
    position:fixed;
    z-index:99;
    top:0;
    left:0;
    right:0;
    width:100%;
    height: 70px;
    padding:10px 0px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:${(Props) => Props.Black ? '#141414' : 'transparent'};
    transition: all ease 1s;
    .Logo{
        width: 150px;
        height: 25px;
        margin:0 10px;
        img{
            height: 100%;
        }
    }
    .Icon{
        width: 35px;
        height: 35px;
        margin:0 10px;
        img{
            height: 100%;
            border-radius:10px;
        }
    }
    .black{
        background-color:#141414;
    }
`;