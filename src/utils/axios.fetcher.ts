import globalAxios from "axios";

export const getAPIEndpointGraphql = (): string => {
  if (process.env.NODE_ENV !== "production") {
    return process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
  } else {
    return process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
  }
};

export const getAPIEndpointRestApi = (): string => {
  if (process.env.NODE_ENV !== "production") {
    return process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
  } else {
    return process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
  }
};

export function axiosGraphQL<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const { data: response } = await globalAxios.post(getAPIEndpointGraphql(), {
      query,
      variables,
    });

    const { data, errors } = response;

    if (errors) {
      throw errors;
    }

    return data;
  };
}

const axios = globalAxios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
});

export default axios;
