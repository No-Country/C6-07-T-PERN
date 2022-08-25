import { PrimaryButton } from "../../ui/buttons";
import { H5 } from "../../ui/text";
import Comment from "../comment";
import css from "./index.module.css";
export default function CommentsSection(props) {
  const comments = props.comments;
  console.log(comments);
  return (
    <div className={css.commentsSectionContainer}>
      <div>
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
      <div>
        <H5>Deja tu comentario:</H5>
        <form className={css.commentsForm} onSubmit={props.submit}>
          <label>
            <H5 className={css.margin} aut>
              User Name:
            </H5>
            <input
              className={css.commentsInput}
              type={"text"}
              name="userName"
              autoComplete="off"
            />
          </label>
          <H5 className={css.margin}>Comentario:</H5>
          <textarea className={css.commentsTextArea} name="message"></textarea>
          <PrimaryButton>Enviar</PrimaryButton>
        </form>
      </div>
    </div>
  );
}
