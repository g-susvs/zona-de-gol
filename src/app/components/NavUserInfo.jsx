import { useSelector } from "react-redux";

export const NavUserInfo = () => {
  const { nombre = "", correo, img } = useSelector((state) => state.auth);

  const urlImg = img;
  const nLength = 16;
  const cLength = 20;

  let nombreShort;
  let correoShort;

  nombre.length > nLength
    ? (nombreShort = nombre.slice(0, nLength) + "...")
    : (nombreShort = nombre);
  correo.length > cLength
    ? (correoShort = correo.slice(0, cLength) + "...")
    : (correoShort = correo);

  return (
    <header>
      <div className="image-text">
        <span className="image">
          <img src={urlImg} alt="user-img" />
        </span>

        <div className="text logo-text">
          <span className="name">{nombreShort}</span>
          <span className="profession">{correoShort}</span>
        </div>
      </div>
    </header>
  );
};
