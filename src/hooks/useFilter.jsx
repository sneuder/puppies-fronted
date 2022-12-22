import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '../redux/queries/queriesSlices';

const useFilter = () => {
  const dispatch = useDispatch();
  const selectedOrder = useSelector((state) => state.queries.order);

  const handleOrder = (e) => {
    let value = e.target.value;
    if (value === 'A-Z') value = 'asc';
    if (value === 'Z-A') value = 'desc';

    dispatch(
      updateQuery({
        keyQuery: 'order',
        valueQuery: value,
      })
    );
  };

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();

    dispatch(
      updateQuery({
        keyQuery: 'filter',
        valueQuery: value,
      })
    );
  };

  return {
    handleOrder,
    selectedOrder,
    handleFilter,
  };
};

export default useFilter;
