import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout, Home, Skidki, Jurnal, Kategor, Karzina, PerKarzinka } from "./routes/Router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading . . .</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading . . .</div>}>
            <Home />
          </Suspense>
        ),
      },

      {
        path: "skidki",
        element: (
          <Suspense fallback={<div>Loading . . .</div>}>
            <Skidki />
          </Suspense>
        ),
      },

      {
        path: "jurnal",
        element: (
          <Suspense fallback={<div>Loading . . .</div>}>
            <Jurnal />
          </Suspense>
        ),
      },

      {
        path: "kategor",
        element: (
          <Suspense fallback={<div>Loading . . .</div>}>
            <Kategor />
          </Suspense>
        ),
      },

      {
        path: "karzina",
        element: (
          <Suspense fallback={<div>Loading . . .</div>}>
            <Karzina />
          </Suspense>
        ),
      },

      {
        path: "perKarzinka",
        element: (
          <Suspense fallback={<div>Loading . . .</div>}>
            <PerKarzinka />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
