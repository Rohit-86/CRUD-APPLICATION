import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/all" exact>
          All Users
        </Tabs>
        <Tabs to="/add" exact>
          Add User
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
