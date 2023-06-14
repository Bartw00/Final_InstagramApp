import Grid from "@mui/material/Grid";
import Layout from "../features/dashboard/components/layout/layout";
import FeedPanel from "../features/dashboard/components/rightPanel/FeedPanel";

const Dashboard = () => {
  return (
    <Layout>
      <Grid container spacing={1}>
        <Grid
          item
          xl={12}
          lg={11}
          md={8}
          sm={4}
          sx={
            {
              width: "100%",
            }
          }
        >
          <FeedPanel />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
