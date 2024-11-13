import { helix } from "ldrs";
import "./Loader.css";
export const LoaderComponent = () => {
  helix.register();
  return (
    <div className="loader">
      <l-helix size="70" speed="2.5" color="white"></l-helix>
    </div>
  );
};
