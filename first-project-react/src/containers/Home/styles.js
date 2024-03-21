import styled from "styled-components";
import background from '../../assets/bg.svg';

export const Container = styled.div`
background: url("${background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;


`;
export const Image = styled.img`
margin-top: 20px;
`;

export const InputLabel = styled.p`
color: #eeeeee;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px;
margin-left: 25px;


`;
export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
width: 342px;
height: 58px;
margin-bottom: 34px;
outline: nome;
padding-left: 25px;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: #ffffff;


`;
