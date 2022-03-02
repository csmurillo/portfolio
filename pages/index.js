import styled from 'styled-components';
import Header from '../components/Header';

export default () => (
  <div>
    <Header></Header>
    <Title>My First Next.js Page</Title>
  </div>
);

const Title = styled.h1`
  color: blue;
`;



