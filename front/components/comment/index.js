import { H3, H4, H5 } from "../../ui/text";
import css from "./index.module.css";

export default function Comment(props) {
  const user = props.user ? props.user.username : "";
  return (
    <div className={props.className}>
      <H5 className={css.gray}>{user}</H5>
      <H5>{props.message}</H5>
    </div>
  );
}
