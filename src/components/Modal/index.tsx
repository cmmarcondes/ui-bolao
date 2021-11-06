import React, { useCallback, useState } from 'react';
import {
  FormControlLabel,
 FormLabel,
 Radio, RadioGroup, Switch, TextField as MUITextField,
} from '@material-ui/core';

import TextField from '@mui/material/TextField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import { LocalizationProvider } from '@mui/lab';

import Button from 'elements/Button';
import Title from 'elements/Title';
import { BolaoService } from 'service/BolaoService';
import { ModalProps } from './config';
import { Container } from './styles';

const Modal: React.FC<ModalProps> = ({ state, toggleModalState }) => {
  const [value, setValue] = useState(new Date());

  const handlePostBolao = useCallback(async () => {
    const bolaoService = new BolaoService();
    await bolaoService.create({
      id: 5,
      data: '12/09/2021',
      metrica: 'outro',
      privado: false,
      title: 'teste',
    }).then(() => {
      toggleModalState();
    });
  }, []);

  return (
    <Container state={state}>
      <div className="modal">
        <form>
          <Title>Crie seu bolão</Title>
          <MUITextField label="Titulo" variant="standard" margin="normal" fullWidth />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disablePast
              label="Data de expiração"
              openTo="year"
              views={['year', 'month', 'day']}
              value={value}
              onChange={(newValue) => {
              if (newValue) {
                setValue(newValue);
              }
          }}
              renderInput={(params) => <TextField {...params} variant="standard" margin="normal" fullWidth />}
            />
          </LocalizationProvider>

          <FormLabel component="legend">Qual será a métrica do bolão?</FormLabel>
          <RadioGroup
            aria-label="Qual será a métrica do bolão?"
            defaultValue="numero"
            name="radio-buttons-group"
          >
            <FormControlLabel value="numero" control={<Radio />} label="Um número" />
            <FormControlLabel value="data" control={<Radio />} label="Uma data" />
            <FormControlLabel value="resultado" control={<Radio />} label="Um resultado" />
            <FormControlLabel value="outro" control={<Radio />} label="Outro" />
          </RadioGroup>

          <FormControlLabel control={<Switch defaultChecked />} label="Privado" />

          <br />
          <Button variant="contained" fullWidth onClick={() => handlePostBolao()}>Criar</Button>
        </form>
      </div>
    </Container>
  );
};

export default Modal;
