import { Button, IconButton, styled, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
function App() {
  const Customecolor = styled(Button)(({theme})=>({
    background: theme.palette.primary.main,
    color: "black",
    margin: "20px",
    padding: "10px",
    "&:hover": {
      background: "black",
      color: "white",
    },
  }));

  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="otherColor"
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


        <Customecolor>
          Customecolor
        </Customecolor>
      {/* Now if you see that we are writing the code and customizing the color of button beside doing that what we can do create our own custome button*/}
    </div>
  );
}

export default App;
