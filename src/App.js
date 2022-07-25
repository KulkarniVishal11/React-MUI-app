import { Button, IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { color, margin } from "@mui/system";
function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
      >
        Contained
      </Button>
      <Button
        variant="outlined"
        disabled
        size="small"
        endIcon={<SettingsIcon />}
      >
        Outlined
      </Button>
      <IconButton>
        <FingerprintIcon />
      </IconButton>

      <Typography variant="h1" component="p">
        It use the h1 style but its a p tag
      </Typography>

      <Button
        variant="contained"
        sx={{
          background: "skyblue",
          color: "black",
          margin: "20px",
          padding: "10px",
          "&:hover": {
            background: "black",
            color: "white",
          },
        }}
      >
        custom color
      </Button>
    </div>
  );
}

export default App;
