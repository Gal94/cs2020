import styled from 'styled-components';

export const ModulesContainer = styled.div`
  color: #0F9D58;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    
    @media screen and (max-width: 768px) and (max-height: 1024px){
      font-size: 13px;
    }
    
    @media screen and (max-width: 1024px) and (max-height: 1366px){
      font-size: 11px;
      margin-bottom: 5%;
    }
`;

export const ModulesDisplayContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: .5rem;
    padding-right: .5rem;
    max-width: 50rem;
    &>*{
      margin:.5rem;
    }
`;