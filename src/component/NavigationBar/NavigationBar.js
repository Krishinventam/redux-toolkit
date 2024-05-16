import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { FormControl, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = [
  { label: "Technology", route: "/technology" },
  { label: "Project", route: "/project" },
];

function NavigationBar() {
  const [dropdown, setDropdown] = React.useState("");
  const navigate = useNavigate();

  const handleNav = (route) => {
    navigate(route);
  };
  const handleChange = (event) => {
    setDropdown(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Stack flexDirection={"row"} gap={2}>
        {pages.map((page) => (
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              sx={{ cursor: "pointer" }}
              onClick={() => handleNav(page.route)}
              onChange={handleChange}
            >
              {page?.label}
              <ArrowDropDownIcon />
            </Typography>
          </Toolbar>
        ))}
      </Stack>
    </FormControl>
  );
}
export default NavigationBar;
