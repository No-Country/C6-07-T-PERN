import { useState } from "react";
import { OutlinedButton, PrimaryButton } from "../../ui/buttons";
import { H4, H5 } from "../../ui/text";
import Comment from "../comment";
import css from "./index.module.css";
export default function CommentsSection(props) {
  const [showTextArea, setShowTextArea] = useState();
  const comments = props.comments;

  return (
    <div className={css.commentsSectionContainer}>
      <div className={css.userCommentSection}>
        {showTextArea ? (
          <>
            <H5>Deja tu comentario:</H5>
            <form className={css.commentsForm} onSubmit={props.submit}>
              <textarea
                className={css.commentsTextArea}
                name="message"
              ></textarea>
              <div className={css.commentsSubmitButton}>
                <OutlinedButton
                  onClick={() => {
                    setShowTextArea(false);
                  }}
                >
                  Cancelar
                </OutlinedButton>
                <PrimaryButton>Enviar</PrimaryButton>
              </div>
            </form>
          </>
        ) : null}
      </div>
      <div className={css.containerTitle}>
        <H4>Comentarios:</H4>
        {!showTextArea ? (
          <PrimaryButton onClick={() => setShowTextArea(true)}>
            Comentar
          </PrimaryButton>
        ) : null}
      </div>
      <div className={css.commentsBox}>
        {comments.length > 0
          ? comments.map((item) => {
              return (
                <Comment
                  className={css.comment}
                  key={item.id}
                  message={item.message}
                  user={item.user}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
