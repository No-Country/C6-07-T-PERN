import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isLogged } from "../../lib";
import { SaveMovie } from "../../lib/list";
import { SavedIcon, SeenIcon, UnsavedIcon, UnseenIcon } from "../../ui/icons";
import { Messages } from "../alertMessages";
import Login from "../login";
import css from "./index.module.css";
export default function SinopsisHeader(props) {
  const [showSaved, setShowSaved] = useState(false);
  const [showSeen, setShowSeen] = useState(false);
  const [showAlertLeft, setShowAlertLeft] = useState({});
  const [showAlertRight, setShowAlertRight] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (props.list) {
      setShowSaved(true);
    }
    if (props.watched) {
      setShowSeen(true);
    }
  }, [props.list, props.watched]);
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
          setShowAlertLeft({ show: true, text: "Quitada de la lista" });
          setTimeout(() => {
            setShowAlertLeft({ show: false, text: "" });
          }, 1200);
          setShowSaved(false);
        } else {
          console.log("error");
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
          setShowAlertLeft({
            show: true,
            text: "Agregada a la lista",
          });
          setTimeout(() => {
            setShowAlertLeft({ show: false, text: "" });
          }, 1200);
          setShowSaved(true);
        } else {
          console.log("error");
        }
      },
      seen: async () => {
        const media = {
          mediaType: props.type,
          mediaId: props.id,
          onList: false,
          list: "watched",
        };
        const res = await SaveMovie(media);
        if (!res.error) {
          setShowAlertRight({ show: true, text: "Marcada no vista" });
          setTimeout(() => {
            setShowAlertRight({ show: false, text: "" });
          }, 1500);
          setShowSeen(false);
        } else {
          console.log("error");
        }
      },
      unSeen: async () => {
        const media = {
          mediaType: props.type,
          mediaId: props.id,
          onList: true,
          list: "watched",
        };
        const res = await SaveMovie(media);
        if (!res.error) {
          setShowAlertRight({ show: true, text: "Marcada vista" });
          setTimeout(() => {
            setShowAlertRight({ show: false, text: "" });
          }, 1500);
          setShowSeen(true);
        } else {
          console.log("error");
        }
      },
    };
    const res = await isLogged();
    if (res.logged) {
      if (type == "saved" || type == "unSaved") {
        setShowAlertLeft({ show: true, loading: true });
      } else {
        setShowAlertRight({ show: true, loading: true });
      }

      actions[type]();
    } else {
      props.showLogin(true);
      // alert("debes estar loggeado");
    }
  }

  return (
    <>
      {props.icons ? (
        <div className={css.divSinopsisHeader + " " + props.className}>
          {showAlertLeft.show ? (
            <div className={css.leftalert}>
              <Messages
                text={showAlertLeft.text}
                loading={showAlertLeft.loading}
                click={setShowAlertLeft}
              />{" "}
            </div>
          ) : null}
          {showSaved ? (
            <>
              <SavedIcon onClick={() => handleSaved("saved")} />
            </>
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
          {showAlertRight.show ? (
            <div className={css.rightalert}>
              <Messages
                text={showAlertRight.text}
                loading={showAlertRight.loading}
                click={setShowAlertRight}
              />{" "}
            </div>
          ) : null}
        </div>
      ) : (
        <h2 style={{ padding: "0px 15px", textAlign: "center" }}>
          {props.title}
        </h2>
      )}
    </>
  );
}
