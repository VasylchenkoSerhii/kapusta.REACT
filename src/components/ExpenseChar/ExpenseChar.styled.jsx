import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (min-width: 768px) {
    padding-bottom: 80px;
    padding-top: 16px;
  }
`;

export const CharContainer = styled.div`
  @media screen and (min-width: 769px) {
    display: flex;
    align-items: center;
    width: 704px;
    height: 422px;
    background: #ffffff;
    margin-right: auto;
    margin-left: auto;
    border-radius: 30px;
    box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);
  }
`;
