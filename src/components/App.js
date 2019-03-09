import React from "react";
import SimpleAppBar from "./AppBar";
import SchoolTable from "./SchoolTable";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";

const App = () => (
  <div>
    <SimpleAppBar />
    <Grid container>
      <Grid item xs={12}>
        <SchoolTable />
      </Grid>
      <Grid item xs={3} />
    </Grid>
    <Footer />
  </div>
);

export default App;
