import baseApi from "../api";
import type {
  CreateEmployeeResponse,
  CreateEmployePayload,
  UpdateEmployeeResponse,
  UpdateEmployePayload,
} from "./types";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployees: builder.mutation<
      CreateEmployeeResponse,
      CreateEmployePayload
    >({
      query: (payload) => ({
        url: "/employee",
        method: "POST",
        body: payload,
      }),
    }),

    updateEmployee: builder.mutation<
      UpdateEmployeeResponse,
      UpdateEmployePayload
    >({
      query: ({ payload, id }) => ({
        url: `/employee/${id}`,
        method: "PUT",
        body: payload,
      }),
    }),

    getEmployees: builder.query({
      query: () => "/employee",
      providesTags: ["EMPLOYEES"],
    }),

    getEmployeeById: builder.query({
      query: ({ id }) => `/employee/${id}`,
      providesTags: ["EMPLOYEES"],
    }),

    deleteEmployee: builder.mutation({
      query: ({ id }) => ({
        url: `employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
  }),
});

export const {
  useDeleteEmployeeMutation,
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useLazyGetEmployeeByIdQuery,
  useCreateEmployeesMutation,
  useUpdateEmployeeMutation,
} = employeeApi;
