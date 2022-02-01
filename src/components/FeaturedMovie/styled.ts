import styled from "styled-components";


export const Container = styled.main`
    height:100vh;
    @media (max-width:325px){
        height: 110vh;
    }
`;

export const BoxShadowVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top , #111 10%, transparent )
`;

export const BoxShadowHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right , #111 20%, transparent );
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:0 4%;
    padding-bottom:150px;
    padding-top:70px;
`;

export const FeaturedName = styled.div`
    font-size:60px;
    font-weight: bold;
    @media (max-width:760px){
        font-size:40px;
    }
    @media (max-width:490px){
        text-align:center;

    }
    @media (max-width:325px){
        font-size:25px;
    }
`;

export const FeaturedInfo = styled.div`
    font-size:18px;
    font-weight:bold;
    margin: 10px 0;
    display:flex;
    justify-content:start;
    align-items:center;
    .rating , .year , .season{
        margin-right:15px;
    }
    .rating{
        color:#00ff00;    
        display:flex;
        p{
            margin-left:5px;
        }
    }
    @media (max-width:760px){
        font-size:16px;
    }
    @media (max-width:490px){
        flex-direction:column;
    }
`;

export const FeaturedDescription = styled.div`
    max-width:38%;
    margin-top:10px;
    font-size:18px;
    color:#CCC;
    @media (max-width:760px){
        font-size:16px;
        max-width:100%;
    }
`;

export const FeaturedButtons = styled.div`
    margin-top:15px;
    @media(max-width:375px){
        text-align:center;
    }
    .watch , .mylist{
        width: 10%px;
        padding:15px 25px; 
        border-radius:5px;
        display: inline-block;
        font-size:20px;
        font-weight:bold;
        text-decoration:none;
        margin-right:10px;
        opacity: 1;
        transition: all ease 0.2s;
        @media (max-width:760px){
        font-size:16px;
        margin-top:10px;
        }
    }
    .watch{
        background-color:#FFF;
        color:#000;
        &:hover{opacity:0.7}
    }
    .mylist{
        background-color:#333;
        color:#FFF;
        &:hover{opacity:0.7}
    }
`;

export const FeaturedGenres = styled.div`
    margin-top:10px;
    font-size:18px;
    color:#CCC;
    @media (max-width:760px){
        font-size:14px;
    }
    @media(max-width:375px){
        text-align:center;
    }
`;