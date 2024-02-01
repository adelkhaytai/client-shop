import { PRODUCT_URL, SELLERPRODUCT_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword }) => ({
        url: `${PRODUCT_URL}`,
        params: { keyword },
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      query: (productId) => `${PRODUCT_URL}/${productId}`,
      providesTags: (result, error, productId) => [
        { type: "Product", id: productId },
      ],
    }),

    allProducts: builder.query({
      query: () => `${PRODUCT_URL}/allProducts`,
    }),

    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    createProduct: builder.mutation({
      query: (productData) => ({
        url: `${PRODUCT_URL}`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      query: ({ productId, formData }) => ({
        url: `${PRODUCT_URL}/${productId}`,
        method: "PUT",
        body: formData,
      }),
    }),

    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
        method: "DELETE",
      }),
      providesTags: ["Product"],
    }),

    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.productId}/reviews`,
        method: "POST",
        body: data,
      }),
    }),

    getTopProducts: builder.query({
      query: () => `${PRODUCT_URL}/top`,
      keepUnusedDataFor: 5,
    }),

    getNewProducts: builder.query({
      query: () => `${PRODUCT_URL}/new`,
      keepUnusedDataFor: 5,
    }),

    getFilteredProducts: builder.query({
      query: ({ checked, radio }) => ({
        url: `${PRODUCT_URL}/filtered-products`,
        method: "POST",
        body: { checked, radio },
      }),
    }),


    
    //seller
    SellerGetProducts: builder.query({
      query: ({ keyword }) => ({
        url: `${SELLERPRODUCT_URL}`,
        params: { keyword },
      }),
      keepUnusedDataFor: 5,
      providesTags: ["SellerProducts"],
    }),

    SellerGetProductById: builder.query({
      query: (productId) => `${SELLERPRODUCT_URL}/${productId}`,
      providesTags: (result, error, productId) => [
        { type: "Product", id: productId },
      ],
    }),

    SellerAllProducts: builder.query({
      query: () => `${SELLERPRODUCT_URL}/allProducts`,
    }),

    SellerGetProductDetails: builder.query({
      query: (productId) => ({
        url: `${SELLERPRODUCT_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    SellerCreateProduct: builder.mutation({
      query: (productData) => ({
        url: `${SELLERPRODUCT_URL}`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["SellerProduct"],
    }),

    SellerUpdateProduct: builder.mutation({
      query: ({ productId, formData }) => ({
        url: `${SELLERPRODUCT_URL}/${productId}`,
        method: "PUT",
        body: formData,
      }),
    }),

    SellerUploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${SELLERPRODUCT_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    SellerDeleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${SELLERPRODUCT_URL}/${productId}`,
        method: "DELETE",
      }),
      providesTags: ["SellerProducts"],
    }),

    SellerCreateReview: builder.mutation({
      query: (data) => ({
        url: `${SELLERPRODUCT_URL}/${data.productId}/reviews`,
        method: "POST",
        body: data,
      }),
    }),

    SellerGetTopProducts: builder.query({
      query: () => `${SELLERPRODUCT_URL}/top`,
      keepUnusedDataFor: 5,
    }),

    SellerGetNewProducts: builder.query({
      query: () => `${SELLERPRODUCT_URL}/new`,
      keepUnusedDataFor: 5,
    }),

    SellerGetFilteredProducts: builder.query({
      query: ({ checked, radio }) => ({
        url: `${SELLERPRODUCT_URL}/filtered-products`,
        method: "POST",
        body: { checked, radio },
      }),
    }),
  }),
});

export const {
  //seller
  useSellerAllProductsQuery,
  useSellerCreateProductMutation,
  useSellerDeleteProductMutation,
  useSellerGetFilteredProductsQuery,
  useSellerGetNewProductsQuery,
  useSellerGetProductByIdQuery,
  useSellerGetProductDetailsQuery,
  useSellerGetProductsQuery,
  useSellerGetTopProductsQuery,
  useSellerUpdateProductMutation,
  useSellerUploadProductImageMutation,
  useSellerCreateReviewMutation,
  //others
  useGetProductByIdQuery,
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
  useGetNewProductsQuery,
  useUploadProductImageMutation,
  useGetFilteredProductsQuery,
} = productApiSlice;
