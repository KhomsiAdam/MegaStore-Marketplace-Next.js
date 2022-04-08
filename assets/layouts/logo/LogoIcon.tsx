import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "@/assets/logos/logo-dark.svg";

const LogoIcon = ({ user }: { user: object }) => {

  console.log(user);
  

  return (
    <Link href="/">
      <Image width="50" height="50" src={user?.store?.thumbnail[0].src} alt={LogoDark} />
    </Link>
  );
};

export default LogoIcon;
