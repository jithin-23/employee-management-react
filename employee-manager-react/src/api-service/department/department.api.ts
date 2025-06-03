import baseApi from "../api";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDepartments: builder.query({
      query: () => "/department",
    }),
  }),
});

export const { useGetAllDepartmentsQuery } = departmentApi;
