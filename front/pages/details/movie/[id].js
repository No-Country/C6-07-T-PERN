import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailsPage from "../../../components/details-page";
import { Layout } from "../../../components/layout";
import { movieBuilder } from "../../../store/object-builders/movies";
import { Loading } from "../../../ui/icons";

export default function DetailsMovie() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState();
  console.log(id);
  useEffect(() => {
    async function getMovie() {
      const data = await movieBuilder(id, "ar");
      setMovie(data);
    }
    getMovie();
  }, [id]);
  return (
    <Layout>
      {movie ? <DetailsPage type="movie" media={movie} /> : <Loading></Loading>}
    </Layout>
  );
}
