import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <DataProvider>
      <App />
    </DataProvider>
 
);
