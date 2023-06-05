import LeftPanel from "../features/dashboard/components/leftPanel/LeftPanel";
import Grid from "@mui/material/Grid";
import RightPanel from "../features/dashboard/components/rightPanel/FeedPanel";
import useCuratedPhotos from "../features/dashboard/components/hook/useCuratedPhotos";
import Layout from "../features/dashboard/components/layout/layout";
import FeedPanel from "../features/dashboard/components/rightPanel/FeedPanel";

const Dashboard = () => {
  // const {data} = useCuratedPhotos();

  // console.log(data);
  return (
    <Layout>
      <Grid container spacing={1}>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          sx={{
            // height: "100vh",
            // width: "100vw",
          }}
        >
          <FeedPanel />
        </Grid>
      </Grid>
      {/* <FeedPanel /> */}
    </Layout>
    // <Grid
    //   container
    //   spacing={1}
    //   sx={{
    //     height: "100vh",
    //     width: "100vw",
    //     // maxWidth: "none",
    //   }}
    // >
    //   <Grid
    //     item
    //     xl={3}
    //     lg={4}
    //     md={4}
    //     sm={4}
    //     sx={{
    //       height: "100vh",
    //       width: "100vw",
    //     }}
    //   >
    //     <LeftPanel />
    //   </Grid>
    //   <Grid
    //     item
    //     xl={9}
    //     lg={8}
    //     md={8}
    //     sm={8}
    //     sx={{
    //       height: "100vh",
    //       width: "100vw",
    //     }}
    //   >
    //     <RightPanel />
    //   </Grid>
    // </Grid>
  );
};

export default Dashboard;
