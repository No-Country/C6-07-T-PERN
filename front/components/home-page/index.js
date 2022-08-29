import { H2 } from "../../ui/text";
import CardsContainer from "../cardsContainer";
import PlatformFilters from "../platform-filters";
import FilterContainer from "../filterContainer";
import {Login, SignUp} from "../login";
import css from "./index.module.css";
export default function HomePage() {
  return (
    <div className={css.homePage}>
      <PlatformFilters></PlatformFilters>
      <Login />
	  <SignUp />
      <FilterContainer />
      <H2>Populares</H2>
      <CardsContainer></CardsContainer>
    </div>
  );
}
