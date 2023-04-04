import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import chakraTheme from "@/theme";
import NextNProgress from "nextjs-progressbar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={chakraTheme}>
        <NextNProgress />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
