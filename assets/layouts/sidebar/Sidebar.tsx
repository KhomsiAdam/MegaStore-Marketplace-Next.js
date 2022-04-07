import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Link,
  Button,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import LogoIcon from "../logo/LogoIcon";
import Menuitems from "./MenuItems";
import Buynow from "./Buynow";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks";

const Sidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: any) => {
  const [open, setOpen] = React.useState<number | boolean>(true);

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const { isLogged, User } = useAppSelector((state) => state.user);

  const handleClick = (index: number) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };
  let curl = useRouter();
  const location = curl.pathname;

  const SidebarContent = (
    <Box p={2} height="100%">
      {isLogged && User.isSeller && <LogoIcon />}
      <Box mt={2}>
        <List>
          {isLogged && User.isSeller ? (
            Menuitems.map((item, index) => (
              <List component="li" disablePadding key={item.title}>
                <NextLink href={item.href}>
                  <ListItem
                    onClick={() => handleClick(index)}
                    button
                    selected={location === item.href}
                    sx={{
                      mb: 1,
                      ...(location === item.href && {
                        color: "white",
                        backgroundColor: (theme) =>
                          `${theme.palette.primary.main}!important`,
                      }),
                    }}
                  >
                    <ListItemIcon>
                      <FeatherIcon
                        style={{
                          color: `${location === item.href ? "white" : ""} `,
                        }}
                        icon={item.icon}
                        width="20"
                        height="20"
                      />
                    </ListItemIcon>
                    <ListItemText onClick={onSidebarClose}>
                      {item.title}
                    </ListItemText>
                  </ListItem>
                </NextLink>
              </List>
            ))
          ) : (
            <div className="inline-block">
              <div className="rounded-xl bg-grey-500 w-36 h-48 shadow-lg relative">
                <Skeleton
                  variant="rectangular"
                  className="rounded-xl"
                  animation="wave"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          )}
        </List>
      </Box>
    </Box>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
