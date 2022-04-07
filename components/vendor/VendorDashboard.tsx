import React from "react";
import { Grid } from "@mui/material";
import BlogCard from "@/components/dashboard/BlogCard";
import SalesOverview from "@/components/dashboard/SalseOverview";
import DailyActivity from "@/components/dashboard/DailyActivity";
import ProductPerfomance from "@/components/dashboard/ProductPerfomance";

export const VendorDashboard = () => {
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
