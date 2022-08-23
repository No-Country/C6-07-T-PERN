import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMedia } from "../../store/actions";

function StoreTester() {
  const media = useSelector((state) => state.media);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMedia());
  }, []);

  return (
    <div>
      {media.map((title) => {
        return <h1 key={title.id}>{title.title}</h1>;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    media: state.media,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMedia: () => dispatch(getMedia()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreTester);
