import { useState } from "react";
import { isLogged } from "../../lib";
import { SaveMovie } from "../../lib/list";
import { SavedIcon, SeenIcon, UnsavedIcon, UnseenIcon } from "../../ui/icons";
import css from "./index.module.css";
export default function SinopsisHeader(props) {
  const [showSaved, setShowSaved] = useState(false);
  const [showSeen, setShowSeen] = useState(false);
  async function handleSaved(type) {
    const actions = {
      saved: async () => {
        const media = {
          mediaType: props.type,
          mediaId: props.id,
          onList: false,
          list: "my_list",
        };
        const res = await SaveMovie(media);
        if (!res.error) {
          setShowSaved(false);
        }
      },
      unSaved: async () => {
        const media = {
          mediaType: props.type,
          mediaId: props.id,
          onList: true,
          list: "my_list",
        };
        const res = await SaveMovie(media);
        if (!res.error) {
          setShowSaved(true);
        }
      },
      Seen: async () => {
        const media = {
          mediaType: props.type,
          mediaId: props.id,
          onList: true,
          list: "watched",
        };
        const res = await SaveMovie(media);
        if (!res.error) {
          setShowSeen(false);
        }
      },
      unSeen: async () => {
        const media = {
          mediaType: props.type,
          mediaId: props.id,
          onList: false,
          list: "watched",
        };
        const res = await SaveMovie(media);
        if (!res.error) {
          setShowSeen(true);
        }
      },
    };
    const res = await isLogged();
    if (res.logged) {
      actions[type]();
    } else {
      alert("debes estar loggeado");
    }
  }

  return (
    <div className={css.divSinopsisHeader + " " + props.className}>
      {showSaved ? (
        <SavedIcon onClick={() => handleSaved("saved")} />
      ) : (
        <UnsavedIcon onClick={() => handleSaved("unSaved")} />
      )}
      <h2 style={{ padding: "0px 15px", textAlign: "center" }}>
        {props.title}
      </h2>
      {showSeen ? (
        <SeenIcon onClick={() => handleSaved("seen")} />
      ) : (
        <UnseenIcon onClick={() => handleSaved("unSeen")} />
      )}
    </div>
  );
}
