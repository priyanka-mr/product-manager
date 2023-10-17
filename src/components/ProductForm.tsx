import React, { useEffect, useState } from 'react';
import { Button, FormControl, FormLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_STATE } from '../constants/productConstants';
import { createProduct, editProduct, Product, setDialogMap, setSelectedEntry } from '../productReducer';
import { RootState } from '../store';


const ProductForm = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.productList);
    const { selectedEntry } = state;
    const [formData, setFormData] = useState<Product>(DEFAULT_STATE);

    useEffect(() => {
        if (selectedEntry && selectedEntry?.id !== '') {
            setFormData(selectedEntry);
        } else {
            setFormData(DEFAULT_STATE);
        }
    }, [selectedEntry]);

    const handleFormSubmit = () => {
        if (formData.id) {
            dispatch(editProduct(formData));
        } else {
            formData.id = Math.floor(Math.random() * 100).toString();
            dispatch(createProduct(formData));
        }
        resetForm();
    };

    const resetForm = () => {
        dispatch(setDialogMap({ key: 'formDialog', value: false }));
        dispatch(setSelectedEntry(undefined));
    };

    const handleTextFieldChange = (field: keyof Product) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        })
    };

    const handleSelectChange = (field: keyof Product) => (event: SelectChangeEvent) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        })
    };
    const onCancel = () => {
        dispatch(setDialogMap({ key: 'formDialog', value: false }));
        dispatch(setSelectedEntry(undefined));
    };

    let keys = Object.keys(formData) as (keyof Product)[];
    keys.shift();

    return (
        <div>
            {keys.map((key, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, gap: 10 }}>
                    <FormLabel style={{ textTransform: 'capitalize' }}>{key}</FormLabel>
                    {key === 'canExpire' || key === 'isSpecial' ? (
                        <FormControl sx={{ minWidth: 195 }}>
                            <Select onChange={handleSelectChange(key)} value={formData[key] as any}>
                                <MenuItem value={true as any}>True</MenuItem>
                                <MenuItem value={false as any}>False</MenuItem>
                            </Select>
                        </FormControl>
                    ) : (
                        <TextField name={key} onChange={handleTextFieldChange(key)} value={formData[key]}></TextField>
                    )
                    }
                </div>
            ))}
            <Button onClick={handleFormSubmit}>Submit</Button> <Button onClick={onCancel}>Cancel</Button>
        </div>
    );
};

export default ProductForm;