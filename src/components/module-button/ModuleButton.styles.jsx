import styled, { css } from 'styled-components';

const buttonStyles = props =>{
    if (props.homeButton){
        return homePageStyles;
    } else {
        return DefaultButtonStyles
    }
};

const DefaultButtonStyles = css`
  color: #DB4437;
  border: 1px solid #DB4437;
  text-transform: uppercase;
  width: 200px;
  height: 75px;
  margin-left: 1%;
  margin-right: 1%;
  
  @media screen and (max-width: 1024px) and (max-height: 1366px){
    width: 150px;
    height: 75px;
    font-size: 14px;
    margin: 2%;
  }

  @media screen and (max-width: 768px){
    width: 130px;
    height: 67px;
    font-size: 12px;
    margin: 1%;
  }

  //for Galaxy S5 and smaller width sizes
  @media screen and (max-width: 410px){
    width: 105px;
    height: 60px;
    font-size: 10px;
    margin: 1%;
  }
  
    &:hover {
    background-color: #DB4437;
    color: #fff;
    border: 1px solid white;
  }
`;

const homePageStyles = css`
    text-transform: initial;
    height: 50px;
    width: 120px;
    border: 1px solid #0F9D58;
    color: #0F9D58;
    margin-left: 20px;
    margin-right: 0;

    &:hover{
        background-color: #0F9D58;
        border-color: #fff;
        color: white;
    }
`;

export const Button = styled.button`
  margin-top: 1%;
  letter-spacing: 0.3px;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: 1s ease all;
  text-align: center;
  ${buttonStyles};
`;
