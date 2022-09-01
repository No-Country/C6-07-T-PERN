import { useState } from "react";
import { SavedIcon, SeenIcon, UnsavedIcon, UnseenIcon } from "../../ui/icons";
import css from "./index.module.css";
export default function SinopsisHeader(props) {
  const [showSaved, setShowSaved] = useState(false);
  const [showSeen, setShowSeen] = useState(false);
  return (
    <div className={css.divSinopsisHeader + " " + props.className}>
      {showSaved ? (
        <SavedIcon
          onClick={() => {
            setShowSaved(false);
          }}
        />
      ) : (
        <UnsavedIcon
          onClick={() => {
            setShowSaved(true);
          }}
        />
      )}
      <h2 style={{ padding: "0px 15px", textAlign: "center" }}>
        {props.title}
      </h2>
      {showSeen ? (
        <SeenIcon
          onClick={() => {
            setShowSeen(false);
          }}
        />
      ) : (
        <UnseenIcon
          onClick={() => {
            setShowSeen(true);
          }}
        />
      )}
    </div>
  );
}
