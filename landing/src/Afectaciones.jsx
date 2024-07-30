import reactLogo from "./assets/images/logo_1.png";

function Afectaciones({ imageSrc, text }) {
  return (
    <div className="image-container">
      <img src={imageSrc} alt={text} />
      <p>{text}</p>
    </div>
  );
}

export default Afectaciones;
