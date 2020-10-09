import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../store/actions/MovieActions';
import { makeSelectPageMovie } from '../../store/selectors/MovieSelector';

const MoviePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { id } = router.query;

  const handleFetch = useCallback(() => dispatch(getMovie(id)));
  const movie = useSelector(makeSelectPageMovie);

  useEffect(() => {
    handleFetch();
  }, []);

  if (!movie) return null;

  return (
    <div>
      <h2>{movie.title} </h2>
      <p>{movie.genre}</p>
      <p>{movie.description}</p>
      <p>This page was viewed {movie.pageViews} times.</p>
    </div>
  );
};

export default MoviePage;
