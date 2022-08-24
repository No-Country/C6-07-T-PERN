import { useRouter } from "next/router";
import { H2, H4 } from "../../ui/text";
import Card from "../card";
import css from "./index.module.css";

export default function DetailsPage(props) {
  const media = props.media;
  console.log(media);
  return (
    <div className={css.mainContainer}>
      <H2 className={css.title}>{media.title}</H2>
      <div className={css.detailsContainer}>
        <div className={css.cardContainer}>
          <Card
            media={media ? media : null}
            priority={true}
            actors={media?.actors}
            sinopsis={media?.overview}
            title={media?.title}
            director={media?.director}
            delay={1}
          />
        </div>
        <div className={css.videoContainer}>
          <H4 className={css.noMargin}>Trailer</H4>
          <iframe
            width="100%"
            height="186"
            src={`https://www.youtube.com/embed/${media.trailer}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <H4 className={css.noMargin}>Comentarios</H4>
      </div>
    </div>
  );
}
