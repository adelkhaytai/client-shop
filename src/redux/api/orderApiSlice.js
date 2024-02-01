import { apiSlice } from "./apiSlice";
import { ORDERS_URL, PAYPAL_URL } from "../constants";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: `${ORDERS_URL}`,
        method: "POST",
        body: order,
      }),
    }),

    getOrderDetails: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
      }),
    }),

    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: "PUT",
        body: details,
      }),
    }),

    getPaypalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
     
    }),

    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),

    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL,
      }),
    }),

    deliverOrder: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/deliver`,
        method: "PUT",
      }),
    }),

    getTotalOrders: builder.query({
      query: () => `${ORDERS_URL}/total-orders`,
    }),

    getTotalSales: builder.query({
      query: () => `${ORDERS_URL}/total-sales`,
    }),

    getTotalSalesByDate: builder.query({
      query: () => `${ORDERS_URL}/total-sales-by-date`,
    }),



    //seller
    SellerCreateOrder: builder.mutation({
      query: (order) => ({
        url: SELLERORDERS_URL,
        method: "POST",
        body: order,
      }),
    }),

    SellerGetOrderDetails: builder.query({
      query: (id) => ({
        url: `${SELLERORDERS_URL}/${id}`,
      }),
    }),

    SellerPayOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${SELLERORDERS_URL}/${orderId}/pay`,
        method: "PUT",
        body: details,
      }),
    }),

    SellerGetPaypalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
    }),

    SellerGetMyOrders: builder.query({
      query: () => ({
        url: `${SELLERORDERS_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),

    SellerGetOrders: builder.query({
      query: () => ({
        url: SELLERORDERS_URL,
      }),
    }),

    SellerDeliverOrder: builder.mutation({
      query: (orderId) => ({
        url: `${SELLERORDERS_URL}/${orderId}/deliver`,
        method: "PUT",
      }),
    }),

    SellerGetTotalOrders: builder.query({
      query: () => `${SELLERORDERS_URL}/total-orders`,
    }),

    SellerGetTotalSales: builder.query({
      query: () => `${SELLERORDERS_URL}/total-sales`,
    }),

    SellerGgetTotalSalesByDate: builder.query({
      query: () => `${SELLERORDERS_URL}/total-sales-by-date`,
    }),
  }),
});

export const {
  //seller
  useSellerCreateOrderMutation,
  useSellerDeliverOrderMutation,
  useSellerGetMyOrdersQuery,
  useSellerGetOrderDetailsQuery,
  useSellerGetOrdersQuery,
  useLazyGetMyOrdersQuery,
  useSellerGetPaypalClientIdQuery,
  useSellerPayOrderMutation,
  //total
  useGetTotalOrdersQuery,
  useGetTotalSalesQuery,
  useGetTotalSalesByDateQuery,

  useSellerGetTotalOrdersQuery,
  useSellerGetTotalSalesQuery,
  useSellerGgetTotalSalesByDateQuery,

  // ------------------
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
  useGetMyOrdersQuery,
  useDeliverOrderMutation,
  useGetOrdersQuery,
} = orderApiSlice;
