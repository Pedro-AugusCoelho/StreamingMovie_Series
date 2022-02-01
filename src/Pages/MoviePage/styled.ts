import styled from "styled-components";

export const Main = styled.main`
    width:100%;
    margin:0 auto;
`;

export const ContainerFeaturedMovie = styled.div`
    height:100vh;
    width:100%;
    margin:0 auto;
    position:relative;
    @media(max-width:500px){
        height:92vh;
    }
`;

export const EffectBorder = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-image: linear-gradient(to top,#000, transparent 30%);
    z-index:98;
    display:flex;
    align-items:end;
    justify-content:center;
`;

export const ContainerInfo = styled.div`
    max-width:1300px;
    padding:0 10px;
    width: 100%;
`;

export const Title = styled.p`
    font-size: 50px;
    font-weight:bold;
    margin: 20px 0;
    @media(max-width:500px){
        text-align:center;
    }
`;

export const InfoEvaluative = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    font-size: 18px;
    margin-bottom:10%;
    .rating{
        margin-right:20px;
        width: auto;
        height: 30px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .season ,.year{
        margin: 0 20px;
    };
    @media(max-width:500px){
        flex-direction:column;
    }
`;

export const ContainerDescription = styled.div`
    max-width:1300px;
    margin:0 auto;
    padding:0 10px;
    width: 100%;
    background-color:rgb(20, 20, 21);
`;

export const OverView = styled.div`
    padding: 20px 2%;
    width: 100%;
    text-align:justify;
    font-size:24px;
    @media(max-width:500px){
        text-align:center;
    }
    @media(max-width:768px){
        font-size:18px;
    }
`;

export const ContainerMovieDescription = styled.div`
    width: 100%;
    margin-top:30px;
    margin-bottom:10px;
    display: flex;
    @media(max-width:700px){
        flex-direction:column;
    }
`;

export const Poster = styled.div`
    width: 250px;
    padding: 10px;
    img{
        width: 100%;
    }
    @media(max-width:700px){
        margin:0 auto;
    }
`;

export const MovieDescription = styled.div`
    flex: 4;
    line-height:2;
    font-size:24px;
    span{
        margin-left:10px;
    }
    @media(max-width:768px){
        font-size:18px;
    }
    @media(max-width:320px){
        font-size:15px;
    }
`;

export const Loadind = styled.div`
    position:fixed;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:99;
    img{
        width:100%;
    }
`;
