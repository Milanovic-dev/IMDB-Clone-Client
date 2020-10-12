import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../store/actions/MovieActions';
import { makeSelectMovieList } from '../store/selectors/MovieSelector';
import { debounce } from '../utils/debounce';
import { Link } from '../i18n';

const debounceWaitTime = 750;

const Index = () => {
  const dispatch = useDispatch();
  const movies = useSelector(makeSelectMovieList);
  const inputRef = useRef();

  const handleFetch = useCallback(() =>
    dispatch(getMovies({ page: 0, title: inputRef.current.value }))
  );

  const handleChange = debounce(() => {
    handleFetch();
  }, debounceWaitTime);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <input ref={inputRef} onChange={handleChange} placeholder="Search..." />
      <MovieList items={movies} />
    </div>
  );
};

const MovieList = ({ items }) => (
  <table>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td>
            <img src={item.image} alt="Img"></img>
          </td>
          <td>
            <Link href={`/movie/${item.id}`}>{item.title}</Link>
          </td>
          <td>{item.description}</td>
          <td>{item.genre}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Index;
