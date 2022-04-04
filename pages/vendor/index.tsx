import { Grid } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import BlogCard from "@/components/dashboard/BlogCard";
import SalesOverview from "@/components/dashboard/SalseOverview";
import DailyActivity from "@/components/dashboard/DailyActivity";
import ProductPerfomance from "@/components/dashboard/ProductPerfomance";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "@/assets/theme/theme";
import FullLayout from "@/assets/layouts/FullLayout";
import { NextPageWithLayout } from "@/interfaces/index";
import { VendorLayout } from "layouts";

const Vendor: NextPageWithLayout = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
  );
};

Vendor.Layout = VendorLayout;

export default Vendor;
