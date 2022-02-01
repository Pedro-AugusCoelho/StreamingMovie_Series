import styled from "styled-components";

export const Footer = styled.footer`
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px 0;
    margin-bottom:30px;
    p{
        margin-bottom:10px;
        font-size:18px;
        @media(max-width:375px){
            font-size:14px;
        }
        a{
            color:#FFF;
            text-decoration:none;
            font-weight:bold;
        }
    }
`;