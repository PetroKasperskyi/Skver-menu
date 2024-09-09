import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { LabelSearchContact, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilter = event => dispatch(setFilter(event.currentTarget.value));
  return (
    <LabelSearchContact>
      Find contact by name
      <FilterInput
        type="text"
         name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Search Name"
      />
    </LabelSearchContact>
  );
};