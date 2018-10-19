import SignupPage from '../components/Signup';
import styled from 'styled-components';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const signup = props => {
  return (
    <Columns>
      <SignupPage />
      <SignupPage />
      <SignupPage />
    </Columns>
  );
};

export default signup;
