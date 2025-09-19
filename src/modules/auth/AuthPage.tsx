import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useCreateUser } from "./hooks/useCreateUser";
import { DialogCadastroUsuario } from "./components/DialogCadastroUsuario";

const AuthPage = () => {
  const { onOpenCloseDialog, openCloseDialog } = useCreateUser();

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: 400, p: 1, borderRadius: 2 }}>
          <CardHeader
            sx={{ textAlign: "center" }}
            title={
              <>
                <Typography gutterBottom variant="h6">
                  Base Sign
                </Typography>
              </>
            }
            subheader={
              <>
                <Typography gutterBottom variant="body1">
                  Acesso ao sistema
                </Typography>
              </>
            }
          />
          <Divider sx={{ my: 2 }} />
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <TextField
                fullWidth
                label="E-mail"
                type="email"
                placeholder="Digite seu email"
              />

              <TextField
                fullWidth
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
              />

              <Button
                sx={{ backgroundColor: "#0094cf" }}
                variant="contained"
                fullWidth
              >
                Entrar
              </Button>
              <Button onClick={onOpenCloseDialog} variant="outlined" fullWidth>
                Cadastro
              </Button>
            </Box>
          </CardContent>
        </Card>

        <DialogCadastroUsuario
          openDialog={openCloseDialog}
          closeDialog={onOpenCloseDialog}
        />
      </Box>
    </>
  );
};

export default AuthPage;
