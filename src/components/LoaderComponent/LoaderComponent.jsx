import { helix } from "ldrs";
export const LoaderComponent = () => {
  helix.register();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "200px",
      }}
    >
      <l-helix size="70" speed="2.5" color="white"></l-helix>
    </div>
  );
};
