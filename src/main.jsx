import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Add this import
import { reducer, initialState } from "./Utility/reducer.jsx";

import App from "./App.jsx";
import { DataProvider } from "./Components/DataProvider/DataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Amazon-Clone">
      <DataProvider reducer={reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
