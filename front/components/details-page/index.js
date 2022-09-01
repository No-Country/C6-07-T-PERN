import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getComments, postComment } from "../../lib";
import { H2, H4 } from "../../ui/text";
import Card from "../card";
import CommentsSection from "../commentsSection";
import css from "./index.module.css";

export default function DetailsPage(props) {
  const media = props.media;
  const [comments, setComments] = useState();
  const [newComment, setNewComment] = useState(false);
  console.log(media);
  useEffect(() => {
    getComments(props.type, media.id).then((response) => setComments(response));
  }, [media, newComment]);

  async function handleSubmit(e) {
    e.preventDefault();
    const comment = {
      message: e.target.message.value,
      type: props.type,
      mediaId: media.id,
      // user: e.target.userName.value,
    };
    await postComment(comment);
    setNewComment(!newComment);
  }

  return (
    <div className={css.mainContainer}>
      <H2 className={css.title}>{media.title}</H2>
      <div className={css.detailsContainer}>
        <div className={css.movieDetailsContainer}>
          <div className={css.cardContainer}>
            <Card
              type={media.type}
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
              height="100%"
              src={`https://www.youtube.com/embed/${media.trailer}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <H4 className={css.noMargin}>Comentarios</H4>
          {comments ? (
            <CommentsSection comments={comments} submit={handleSubmit} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
