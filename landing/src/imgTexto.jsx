import "./imgTextoStyle.css";

function ImgTexto({ imageSrc, text }) {
  return (
    <div className="It-container">
      <img src={imageSrc} alt={text} />
      <p>{text}</p>
    </div>
  );
}

export default ImgTexto;
