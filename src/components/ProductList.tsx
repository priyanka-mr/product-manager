import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import MaterialReactTable from 'material-react-table';
import { useDispatch, useSelector } from 'react-redux';
// import { TABLE_COLUMNS } from '../constants/productConstants';
import { deleteProduct, Product, setDialogMap, setSelectedEntry } from '../productReducer';
import { RootState } from '../store';
import useStyles from './styles';
import FormDialog from './FormDialog';
import SearchFilter from './SearchFilter';

const ProductList = () => {
    const state = useSelector((state: RootState) => state.productList);
    const dispatch = useDispatch();
    const { products, selectedCategory } = state;
    const classes = useStyles();
    const [filterProducts, setFilterProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        if (selectedCategory && selectedCategory !== 'All') {
            setFilterProducts(products.filter((product) => 
            product.category === selectedCategory));
            return;
        }
        setFilterProducts(products);
    }, [products, selectedCategory]);

    const onAddClick = () => {
        dispatch(setDialogMap({ key: 'formDialog', value: true }));
    };

    const onDeleteClick = (productId: string) => {
        dispatch(deleteProduct(productId));
    };

    const onEditClick = (product: Product) => {
        dispatch(setDialogMap({ key: 'formDialog', value: true }));
        dispatch(setSelectedEntry(product));
    }

    return (
        <div className={classes.outerContainer}>
            <SearchFilter />
            <Button onClick={onAddClick}>Add New Product</Button>
            <div className={classes.tableContainer}>
                {/* <MaterialReactTable columns={TABLE_COLUMNS} data={products} /> */}
                <TableContainer style={{ maxHeight: '90vh' }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableCell>ID</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Can Expire</TableCell>
                            <TableCell>Expiry Date</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>On Special</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableHead>
                        <TableBody>
                            {filterProducts.map((product: Product) => (
                                <TableRow hover key={product.id} style={{ backgroundColor: product.isSpecial ? '#90EE90' : 'transparent' }}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>{product.canExpire ? 'Yes' : 'No'}</TableCell>
                                    <TableCell>{product.expiryDate}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>
                                        <Checkbox checked={product.isSpecial} />
                                    </TableCell>
                                    <TableCell><Button onClick={() => onEditClick(product)}>Edit</Button><Button onClick={() => onDeleteClick(product.id)}>Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <FormDialog />
        </div>
    );
};

export default ProductList;

