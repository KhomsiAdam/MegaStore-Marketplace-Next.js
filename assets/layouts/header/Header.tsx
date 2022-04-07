import React, { useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
// Dropdown Component
import SearchDD from "./SearchDD";
import ProfileDD from "./ProfileDD";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";

const Header = ({ sx, customClass, toggleMobileSidebar, position }: any) => {
  const { User, isLogged } = useAppSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
  }, [isLogged]);

  return (
    <AppBar sx={sx} position={position} elevation={0} className={customClass}>
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          <FeatherIcon icon="menu" width="20" height="20" />
        </IconButton>
        {/* ------------------------------------------- */}
        {/* Search Dropdown */}
        {/* ------------------------------------------- */}
        <SearchDD />
        {/* ------------ End Menu icon ------------- */}

        <Box flexGrow={1} />

        <ProfileDD User={User} />
        {/* ------------------------------------------- */}
        {/* Profile Dropdown */}
        {/* ------------------------------------------- */}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  customClass: PropTypes.string,
  position: PropTypes.string,
  toggleSidebar: PropTypes.func,
  toggleMobileSidebar: PropTypes.func,
};

export default Header;
