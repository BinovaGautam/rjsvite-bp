"use client";
import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { store } from "@/Store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
function ReduxStoreProvider({ children }: any) {
  const [client] = useState(new QueryClient());

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <SnackbarProvider>{children}</SnackbarProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default ReduxStoreProvider;
