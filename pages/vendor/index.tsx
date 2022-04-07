import React from "react";
import { NextPageWithLayout } from "@/interfaces/index";
import { VendorLayout } from "layouts";
import { VendorDashboard } from "@/components/vendor/VendorDashboard";
import { useAppSelector } from "@/redux/hooks";
import { StoreCreation } from "@/components/vendor/StoreCreation";

const Vendor: NextPageWithLayout = () => {
  const { User, isLogged } = useAppSelector((state) => state.user);

  console.log(User);
  

  if (User?.isSeller && isLogged) return <VendorDashboard />;
  return <StoreCreation />;
};

Vendor.Layout = VendorLayout;

export default Vendor;
