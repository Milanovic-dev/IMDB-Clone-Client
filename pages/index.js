import React, { useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../store/actions/MovieActions';
import { makeSelectMovieList } from '../store/selectors/MovieSelector';
import { debounce } from '../utils/debounce';

const Index = () => {
  const dispatch = useDispatch();
  const movies = useSelector(makeSelectMovieList);
  const inputRef = useRef();

  const handleFetch = useCallback(() =>
    dispatch(getMovies({ limit: 3, page: 0, title: inputRef.current.value }))
  );
  const handleChange = debounce(() => {
    handleFetch();
  }, 750);
  return (
    <div>
      <input ref={inputRef} onChange={handleChange} placeholder="Search..." />
      <MovieList items={movies} />
    </div>
  );
};

const MovieList = ({ items }) => (
  <table>
    {items.map((item) => (
      <ul key={item.title}>
        <li>{`${item.title}  ${item.description}`}</li>
      </ul>
    ))}
  </table>
);

MovieList.propTypes = {
  items: Array
};

export default Index;
