import { useEffect, useState } from "react";

import { H2 } from "../../ui/text";
import Card from "../card";
import { list } from "./mockList.js";
import css from "./index.module.css";
import { Loading } from "../../ui/icons";
import { getLists } from "../../lib/list";
import { isLogged } from "../../lib";
export default function MyListPage(props) {
  return (
    <div className={css.myListContainer}>
      <div className={css.titleContainer}>
        <div className={css.titleWrapper}>
          <H2 className={css.title}>Mi lista</H2>
        </div>
        <div className={css.titleWrapper}></div>
      </div>
      <div className={css.divCardContainer}>
        {props.media ? (
          <>
            {props.media.map((element, index) => {
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
