import styled from 'styled-components';

export const Container = styled.div`
  & > *:nth-child(n + 2) {
    margin-top: 2rem;
  }
`;
