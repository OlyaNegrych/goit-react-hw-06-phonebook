import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from '../Filter/Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  }

  return (
    <FilterLabel>
      Find contacts by name
      <br />
      <FilterInput
        type="text"
        value={filter}
        onChange={changeFilter}
      ></FilterInput>
    </FilterLabel>
  );
};

export default Filter;
