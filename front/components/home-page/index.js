import { H2 } from "../../ui/text";
import CardsContainer from "../cardsContainer";
import PlatformFilters from "../platform-filters";
import FilterContainer from "../filterContainer";
import { Login, SignUp } from "../login";
import css from "./index.module.css";
import { useEffect } from "react";
export default function HomePage() {
  return (
    <div className={css.homePage}>
      <CardsContainer></CardsContainer>
    </div>
  );
}
