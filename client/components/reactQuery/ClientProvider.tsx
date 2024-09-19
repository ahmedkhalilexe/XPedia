"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ClientProvider({ children }: Props) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default ClientProvider;
