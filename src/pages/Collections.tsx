import { Grid2 } from "@mui/material";
import Header from "../molecules/Header";
import { navOurCollection } from "../constants";
import CollectionView from "../organisums/CollectionView";

const Collection: React.FC = () => {
  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Header currentPage={navOurCollection} />
      </Grid2>

      <Grid2 size={12}>
        <CollectionView />
      </Grid2>
    </Grid2>
  );
};
export default Collection;
