import "./wdyr.js";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Application from "./Application.jsx";
import "./main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRootElement = document.querySelector("#root");
const root = createRoot(appRootElement);

const router = createBrowserRouter([
  {
    element: <Application />,
    children: [
      {
        path: "/search",
        lazy: async () => {
          const { default: SearchPage } = await import(
            "./components/pages/SearchPage.jsx"
          );
          return { Component: SearchPage };
        },
      },
      {
        path: "/search/result",

        lazy: async () => {
          const { default: ResultPage } = await import(
            "./components/pages/ResultPage.jsx"
          );
          return { Component: ResultPage };
        },
      },
      {
        path: "vinyl/:vinylId",
        lazy: async () => {
          const { default: VinylPage } = await import(
            "./components/pages/VinylPage.jsx"
          );
          return { Component: VinylPage };
        },
      },
      {
        path: "*",
        element: <h1>404</h1>,
      },
    ],
  },
]);

async function bootstrap() {
  const { worker } = await import("./mocks/browser.js");
  worker.start();
}
bootstrap().then(() => {
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
});
