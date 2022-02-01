import styled from "styled-components";

export const ArrowRowLeft = styled.div`
    position:absolute;
    z-index:98;
    width: 40px;
    height:225px;
    background-color:rgba(0,0,0,0.5);
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    opacity:0;
    transition: all ease 0.5s;
    @media (max-width:760px){
        opacity: 1;
    }
`;

export const ArrowRowRight = styled.div`
    position:absolute;
    width: 40px;
    z-index:98;
    height:225px;
    background-color:rgba(0,0,0,0.5);
    right:0;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    opacity:0;
    transition: all ease 0.5s;
    @media (max-width:760px){
        opacity: 1;
    }
`;

export const Container = styled.main`
    margin-bottom: 30px;
    h2{
        margin:0 0 0 30px;
    }
    &:hover{
        ${ArrowRowLeft} , ${ArrowRowRight} {
            opacity: 1;
        }
    }
`;

export const MovieItem = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;
    img{
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
        &:hover{
            transform: scale(1);
        }
    }
`;

export const MovieRow = styled.div`
    transition: all ease 0.5s;
`;

export const ContainerMovieRow = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;
