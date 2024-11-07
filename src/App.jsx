import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { MainRouter } from "./routes/MainRouter";
import { ProductsProvider } from "./context/ProductContext";
import { CartProvider } from "./context";

const App = () => {
  return (
    <div>
      <CartProvider>
        <ProductsProvider>
          <MainRouter />
        </ProductsProvider>
      </CartProvider>
    </div>
  );
};

export default App;
