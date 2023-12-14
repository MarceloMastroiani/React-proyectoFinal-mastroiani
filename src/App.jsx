import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { MainRouter } from "./routes/MainRouter";

import { CartProvider } from "./context";

const App = () => {
  return (
    <div>
 
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </div>
  );
};

export default App;