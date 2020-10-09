import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  dislikeMovie,
  getMovie,
  likeMovie
} from '../../store/actions/MovieActions';
import {
  makeSelectLikeError,
  makeSelectPageMovie
} from '../../store/selectors/MovieSelector';

const MoviePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { id } = router.query;

  const handleFetch = useCallback(() => dispatch(getMovie(id)));
  const handleLike = useCallback(() => dispatch(likeMovie(id)));
  const handleDislike = useCallback(() => dispatch(dislikeMovie(id)));

  const movie = useSelector(makeSelectPageMovie);
  const error = useSelector(makeSelectLikeError);

  useEffect(() => {
    handleFetch();
  }, []);

  if (!movie) return null;

  return (
    <div>
      <h2>{movie.title} </h2>
      <p>{`${movie.likes} likes ${movie.dislikes} dislikes`}</p>
      <p>{movie.genre}</p>
      <p>{movie.description}</p>
      <p>This page was viewed {movie.pageViews} times.</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <p style={{ color: 'red', fontSize: 14 }}>{error}</p>
    </div>
  );
};

export default MoviePage;
