import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModalProvider } from "./providers/ModalProvider.tsx";
import { StorageProvider } from "./providers/StorageProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ModalProvider>
    <StorageProvider>
      <App />
    </StorageProvider>
  </ModalProvider>
);
