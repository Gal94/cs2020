import styled from 'styled-components';

export const WideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3rem;
  height: 70px;
  background-color: #4285F4;
  
    @media screen and (min-width:561px){
    .ham-div{
      display: none;
      }
    }
    
  & .short {
    margin-bottom: 0;
    height: 55px;

    @media screen and (min-width: 561px) {
        margin-bottom: 3rem;
        height: 70px;
    }
  }
`;

export const BurgerIconContainer = styled.div`
      display: none;
      cursor: pointer;
      margin-right: 45px;
      margin-top: 15px;
      border: 1px solid white;
      border-radius: 6px;
      width: 50px;
      height: 35px;
      transition: 0.5s;

      @media screen and (max-width:560px){
        display: inherit;
      }
      @media screen and (min-width:561px){
        display: none;
      }
      .burger {
        margin: 2px 10px;
        color: white;
        transition: 0.5s;

      }

      &:hover {
        border-color: #F4B400;

        .burger {
          color: #F4B400;
        }
      }
`;

export const OptionsContainer = styled.div`
      width: 40%;
      height: 100%;
      display: flex;
      margin-right: 1rem;
      align-items: center;

      .option {
        color: white;
        cursor: pointer;
        font-size: 18px;
        margin: 1.5rem;
        font-weight: 500;
        opacity: 1;
        transition: 0.5s;

        &:hover {
          color: #F4B400;
        }
      }

      @media screen and (max-width:561px){
        display: none;
      }
      
      @media screen and (min-width:561px){
        display: flex;
        }
`;

export const MyLinksContainer = styled.div`
  display: none;
  background-color: #4285F4;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-bottom: 1rem;
  
  & .show {
  display: block;

  @media screen and (min-width: 561px) {
    display:none;
  }
}
`;

export const HamDivContainer = styled.div`
    margin-top: 10px;
    margin-right: 45px;


    .ham-option {
      width: 20%;
      color: white;
      transition: 0.5s;

      &:hover {
        color: #F4B400;
      }
    }
`;