import plusSign from "./assets/plusSign.webp";
import minusSign from "./assets/minusSign.png";

import { useDispatch } from "react-redux";
import { add, remove } from "./redux/CardSlice";

const Button = ({ sign }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (sign === "minus") {
      dispatch(remove());
    } else {
      dispatch(add());
    }
  };

  const image = sign === "minus" ? minusSign : plusSign;

  return (
    <button onClick={handleClick} className="boton-imagen-bkg">
      <img className="boton-imagen" alt="botón signo menos" src={image} />
    </button>
  );
};

const Buttons = () => {
  return (
    <div className="button-container">
      <Button sign="minus" />
      <Button sign="plus" />
    </div>
  );
};

export default Buttons;
