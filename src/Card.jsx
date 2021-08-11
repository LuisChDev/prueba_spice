import { useSelector } from "react-redux";

// toma un par de listas y retorna una sola lista de pares.
// si una de las listas es más larga que la otra, se rellena
// con espacios.
const zip = (arr1, arr2) => {
  const acc = [];
  const length = Math.max(arr1.length, arr2.length);
  for (let x in [...Array(length).keys()]) {
    acc.push([arr1[x] || "", arr2[x] || ""]);
  }

  return acc;
}

const CardRow = ({ingreso, egreso, ind}) => {
  return (
    <tr className="card-row">
      <th>{ingreso ? `Concepto ${ind}` : ""}</th>
      <th className="card-cell">{ingreso}</th>
      <th>{egreso ? `Concepto ${ind}` : ""}</th>
      <th className="card-cell">{egreso}</th>
    </tr>
  );
};

const Card = ({ data }) => {
  const total =
    data.ingresos.reduce((acc, cur) => acc + cur, 0) -
        data.egresos.reduce((acc, cur) => acc + cur, 0);

  const pairs = zip(data.ingresos, data.egresos);

  return (
    <div className="card-body">
      <table className="card-frame" border="1">
        <tbody>
          <tr className="card-titles">
            <th colSpan="2">Ingresos</th>
            <th colSpan="2">Egresos</th>
          </tr>

          <tr>
            <th>Concepto</th>
            <th>Valor</th>
            <th>Concepto</th>
            <th>Valor</th>
          </tr>

          {pairs.map(([x, y], i) => <CardRow key={`card${i}`} ind={i} ingreso={x} egreso={y}/>)}
        </tbody>
      </table>

      <p>
        Total: {total}
      </p>
    </div>
  );
};

const CardSlider = () => {
  const cards = useSelector((state) => state.card.value);

  return (
    <div className="card-slider">
      {cards.map((crd, i) => (
        <Card key={`card${i}`} data={crd} />
      ))}
    </div>
  );
};

export default CardSlider;
