import "swiper/css";
import App from "./App.tsx";
import { store } from "store";
import "assets/styles/index.scss";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "react-phone-input-2/lib/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);
