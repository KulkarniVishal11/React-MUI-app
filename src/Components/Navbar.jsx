import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React,{useState} from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { Box } from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";

export const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "38%",
  }));

  const Icons = styled(Box)((theme) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
   
  }));

  // const UserBox = styled(Box)((theme) => ({
  //   display: "flex",
  //   gap: "10px",
  //   alignItems: "center",
   
  // }));
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          VKGRAM
        </Typography>
        <SentimentSatisfiedAltIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} onClick={e=>setOpenMenu(true)}/ >
        </Icons>
      </StyledToolbar>
{/* Menu bar */}

<Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"

        open={openMenu}
        onClose={e=>setOpenMenu(false)}  
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
