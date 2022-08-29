import { H2 } from "../../ui/text";
import CardsContainer from "../cardsContainer";
import PlatformFilters from "../platform-filters";
import FilterRating from "../filterRating";
import css from "./index.module.css";
export default function HomePage() {
  return (
    <div className={css.homePage}>
      <PlatformFilters></PlatformFilters>
      <FilterRating />
      <H2>Populares</H2>
      <CardsContainer></CardsContainer>
    </div>
  );
}
