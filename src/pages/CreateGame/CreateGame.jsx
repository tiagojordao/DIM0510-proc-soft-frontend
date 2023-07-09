import * as React from "react";
import { useState } from 'react';

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import api from '../../services/api';

import LoginPage from "../../components/header/index.jsx";
import Footer from '../../components/footer/';

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const modalidades = [
  { label: "Handebol" },
  { label: "Futebol" },
  { label: "Basquete" },
];

const defaultTheme = createTheme();

export default function SignUp() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataFormData = new FormData(event.currentTarget);
    api.post('/match', {
      horarioInicio: dataFormData.get('horarioInicio'),
      horarioFinal: dataFormData.get('horarioFim'),
      data: dataFormData.get('date'),
      qtdParticipantes: dataFormData.get('quantidade'),
      modalidade: dataFormData.get('modalidade'),
      infos: dataFormData.get('detelhes')
    }, {
      headers: {
        token: true
      }
    }).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    })
  };

  const [resp, setResp] = useState();

  return (
    <ThemeProvider theme={defaultTheme}>
      <LoginPage />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Criar Partida
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid
              container
              spacing={2}
              alignContent="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    label="Horário inicial"
                    id="horarioInicio"
                    name="horarioInicio"
                    format="HH:mm"
                    required
                    fullWidth
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    label="Horário final"
                    id="horarioFim"
                    name="horarioFim"
                    format="HH:mm"
                    required
                    fullWidth
                  />
                </LocalizationProvider>
              </Grid>
              {/* <Grid item xs={12} md={12} lg={12}> */}
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TextField
                    label="Data"
                    id="date"
                    name="date"
                    placeholder="dd/MM/yyyy"
                    fullWidth
                    required
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="quantidade"
                  label="Quantidade minima de participantes"
                  type="number"
                  name="quantidade"
                  autoComplete="Quantidade minima de participantes"
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  options={modalidades}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Modalidade"
                      id="modalidade"
                      name="modalidade"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="detalhes"
                  label="Informações adicionais"
                  type="text"
                  name="detelhes"
                  autoComplete="Informações adicionais"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Criar Partida
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}
