import { H3, H4, H5 } from "../../ui/text";

export default function Comment(props) {
  return (
    <div className={props.className}>
      <H4>{props.user}</H4>
      <H5>{props.message}</H5>
    </div>
  );
}
