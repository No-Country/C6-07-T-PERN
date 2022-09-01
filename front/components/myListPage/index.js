import { useEffect, useState } from "react";
import { movieBuilder } from "../../store/object-builders/movies";
import { H2 } from "../../ui/text";
import Card from "../card";
import { list } from "./mockList.js";
import css from "./index.module.css";
import { Loading } from "../../ui/icons";
export default function MyListPage() {
  const [watchedMovies, setWatchedMovies] = useState(null);
  useEffect(() => {
    async function constructor() {
      const array = [];
      const movie1 = await movieBuilder(361743, "ar");
      const movie2 = await movieBuilder(94997, "ar");
      const movie3 = await movieBuilder(629176, "ar");
      array.push(movie1, movie2, movie3);
      setWatchedMovies(array);
    }

    constructor();
  });
  return (
    <div className={css.myListContainer}>
      <div className={css.titleContainer}>
        <div className={css.titleWrapper}>
          <H2 className={css.title}>Mi lista</H2>
        </div>
        <div className={css.titleWrapper}></div>
      </div>
      <div className={css.divCardContainer}>
        {watchedMovies ? (
          <>
            {watchedMovies.map((element, index) => {
              return (
                <Card
                  key={element.id + element.type}
                  media={element}
                  priority={index == 0 ? true : false}
                  actors={element.actors}
                  sinopsis={element.overview}
                  title={element.title}
                  director={element.director}
                  delay={index <= 5 ? index : 5}
                />
              );
            })}
          </>
        ) : (
          <>
            <Loading></Loading>
            <Loading></Loading>
            <Loading></Loading>
            <Loading></Loading>
          </>
        )}
      </div>
    </div>
  );
}
