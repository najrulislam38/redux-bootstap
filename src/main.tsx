import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./redux/store.tsx";
import { RouterProvider } from "react-router";
import Router from "./routes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
