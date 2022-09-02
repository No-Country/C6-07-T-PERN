import { H3, H4, H5 } from "../../ui/text";

export default function Comment(props) {
  const user = props.user ? props.user.username : "";
  return (
    <div className={props.className}>
      <H4>{user}</H4>
      <H5>{props.message}</H5>
    </div>
  );
}
