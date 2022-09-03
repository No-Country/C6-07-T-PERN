import { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import MyListPage from "../../components/myListPage";
import { isLogged } from "../../lib";
import { getLists } from "../../lib/list";
import { movieBuilder } from "../../store/object-builders/movies";
import { serieBuilder } from "../../store/object-builders/series";
import { H2 } from "../../ui/text";

export default function WatchList() {
  const [list, setList] = useState([]);
  const [media, setMedia] = useState();
  //effect que llama la lista
  useEffect(() => {
    async function constructor() {
      const logged = await isLogged();
      if (logged.logged) {
        const res = await getLists();
        console.log("r", res);
        setList(res);
      }
    }
    constructor();
  }, []);
  //efect que buildea el objeto media con las movies y series
  useEffect(() => {
    async function builder(list) {
      const filtered = list.filter((item) => item.my_list || item.watched);
      const res = await Promise.all(
        filtered.map(async function (item) {
          if (item.media.mediaType == "movie") {
            return await movieBuilder(item.media.mediaId, list, "ar");
          }
          if (item.media.mediaType == "serie") {
            return await serieBuilder(item.media.mediaId, list, "ar");
          }
        })
      );
      setMedia(res);
    }
    builder(list);
  }, [list]);

  return (
    <Layout filterless={true}>
      <MyListPage media={media} />
    </Layout>
  );
}
