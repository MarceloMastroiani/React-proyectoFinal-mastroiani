import "./Button.css";
export const ButtonComponent = ({ text }) => {
  return (
    <button className="botonComponent">
      <a href={`/${text}`}>{text}</a>
    </button>
  );
};
