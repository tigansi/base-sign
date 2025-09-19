import React from "react";
import type { DialogCadastroUsuarioProps } from "@/types/props/DialogCadastroUsuarioProps";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

export const DialogCadastroUsuario: React.FC<DialogCadastroUsuarioProps> = ({
  closeDialog,
  openDialog,
}) => {
  return (
    <>
      <Dialog open={openDialog} onClose={closeDialog} maxWidth="xs" fullWidth>
        <DialogTitle>Novos usuários</DialogTitle>
        <DialogContent dividers>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <TextField type="text" label="Nome" />
            <TextField type="text" label="E-mail" />
            <TextField
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              type="date"
              label="Nascimento"
            />
            <TextField type="password" label="Senha" />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} variant="contained" color="error">
            Fechar
          </Button>
          <Button variant="contained" autoFocus color="success">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
