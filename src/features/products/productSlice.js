import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productService } from "./productService";

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (userData, thunkApi) => {
    try {
      return await productService.getProducts(userData, thunkApi);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addToWishlist = createAsyncThunk(
    "product/wishlist",
    async (prodId, thunkApi) => {
      try {
        return await productService.addToWishlist(prodId);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );
const productState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.info(action.error);
        }
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = "Product added to wishlist";
        if (state.isSuccess === true) {
          toast.info("Added to wishlist");
        }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
  },
});

export default productSlice.reducer;
