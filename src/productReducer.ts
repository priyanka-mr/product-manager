import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SAMPLE_DATA } from "./constants/productConstants";

export interface Product {
    id: string;
    description: string;
    canExpire: boolean;
    expiryDate?: string;
    category: string;
    price: number;
    isSpecial: boolean;
}

export interface InitialState {
    products: Array<Product>;
    dialogMap: Record<string, boolean>;
    // newEntry: Product;
    selectedEntry?: Product;
}
export const initialState: InitialState = {
    products: SAMPLE_DATA,
    dialogMap: {
        'formDialog': false,
    },
    // newEntry: DEFAULT_STATE,
};


const productSlice = createSlice({
    name: 'product_list',
    initialState: initialState,
    reducers: {
        createProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        editProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            const index = state.products.findIndex((product) => product.id === action.payload);
            if (index !== -1) {
                state.products.splice(index, 1);
            }
        },
        setDialogMap: (state, action: PayloadAction<{ key: string; value: boolean }>) => {
            const { key, value } = action.payload;
            state.dialogMap[key] = value;
        },
        // setNewEntry: (state, action: PayloadAction<Product>) => {
        //     state.newEntry = action.payload;
        // },
        setSelectedEntry: (state, action: PayloadAction<Product | undefined>) => {
            state.selectedEntry = action.payload;
        }
    },
});

export const { createProduct, editProduct, deleteProduct, setDialogMap, setSelectedEntry } = productSlice.actions;

export default productSlice.reducer;