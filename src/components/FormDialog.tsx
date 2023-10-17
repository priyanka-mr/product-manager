import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogMap } from '../productReducer';
import { RootState } from '../store';
import ProductForm from './ProductForm';

const FormDialog = () => {
    const state = useSelector((s: RootState) => s.productList);
    const { dialogMap } = state;
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(setDialogMap({ key: 'formDialog', value: false }));
    };

    return (<Dialog open={dialogMap['formDialog']} onClose={onClose}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
           <ProductForm />
        </DialogContent>
    </Dialog>)
}

export default FormDialog;