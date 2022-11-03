import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import { FilterLabel, FilterInput } from '../Filter/Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

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
