import styled, {css} from 'styled-components';

const Description = css`
    color: #DB4437;
    margin-top: 1%;
`;

export const HomepageContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  overflow: hidden;

`;

export const HeadDescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .wrap {
      width: 40%;
      margin-left: 10%;

      .home-links{
        display: flex;
        margin-top: 1%;
        }
      }

    }
    .top {
      margin-bottom: 70px;
    }

    @media screen and (max-width: 840px) {
     display:block;

      .wrap {
        width: 90%;
      }
    }
  }
`;

export const DescriptionH3 = styled.h3`
${Description};
`;

export const DescriptionH2 = styled.h2`
${Description};
`;

export const TextContainer = styled.p`
    width:70%;
    line-height: 1.7;
    color: #0F9D58;
    font-size: 16px;
    font-weight: 500;
    margin-top: 5px;

    -moz-user-select: text;
    -khtml-user-select: text;
    -webkit-user-select: text;

    @media screen and (max-width: 840px) {
        width: 100%;
    }

    .mail {
      font-size: 14px;
    }
  }
`;