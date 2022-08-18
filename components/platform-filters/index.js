import { PlatformFilterButton } from "../../ui/buttons";
import { AmazonIcon, DisneyIcon, HboIcon, NetflixIcon } from "../../ui/icons";
import css from "./index.module.css";

export default function PlatformFilters() {
  return (
    <div className={css.divPlatformFilters}>
      <PlatformFilterButton>
        <NetflixIcon></NetflixIcon>
      </PlatformFilterButton>
      <PlatformFilterButton>
        <HboIcon></HboIcon>
      </PlatformFilterButton>
      <PlatformFilterButton>
        <DisneyIcon></DisneyIcon>
      </PlatformFilterButton>
      <PlatformFilterButton>
        <AmazonIcon></AmazonIcon>
      </PlatformFilterButton>
    </div>
  );
}
