import Modal from 'components/Modal';
import Button from 'elements/Button';
import React, { useState } from 'react';
import { Container } from './styles';

const Home = () => {
  const [state, setState] = useState(false);

  function toggleModalState() {
    setState(!state);
  }

  return (
    <Container>
      <Button type="button" variant="contained" onClick={() => toggleModalState()}>Criar meu bolão</Button>
      <Modal state={state} toggleModalState={toggleModalState} />
    </Container>
  );
};

export default Home;
