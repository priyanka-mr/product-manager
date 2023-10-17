import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setSelectedCategory } from '../productReducer';

const SearchFilter = () => {
    const state = useSelector((state: RootState) => state.productList);
    const { products } = state;
    const dispatch = useDispatch();
    let filterOptions = ['All'];

    const uniqueCategories = products.map((product) => product.category).filter((value, index, self) => self.indexOf(value) === index);
    filterOptions = [ ...filterOptions, ...uniqueCategories];

    const onChangeCategory = (event: SelectChangeEvent) => {
        dispatch(setSelectedCategory(event.target.value))
    }
    return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>Category</InputLabel>
            <Select label={'Category'} onChange={onChangeCategory}>
                {filterOptions.map((item) => (
                   <MenuItem value={item}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SearchFilter;