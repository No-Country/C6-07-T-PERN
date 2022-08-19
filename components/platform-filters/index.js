import { PlatformFilterButton } from "../../ui/buttons";
import { AmazonIcon, DisneyIcon, HboIcon, NetflixIcon } from "../../ui/icons";
import css from "./index.module.css";

export default function PlatformFilters() {
  return (
    <div className={css.divPlatformFilters}>
      <PlatformFilterButton platform="Netflix">
        <NetflixIcon></NetflixIcon>
      </PlatformFilterButton>
      <PlatformFilterButton platform="HBO Go">
        <HboIcon></HboIcon>
      </PlatformFilterButton>
      <PlatformFilterButton platform="Disney Plus">
        <DisneyIcon></DisneyIcon>
      </PlatformFilterButton>
      <PlatformFilterButton platform="Amazon Prime Video">
        <AmazonIcon></AmazonIcon>
      </PlatformFilterButton>
    </div>
  );
}
