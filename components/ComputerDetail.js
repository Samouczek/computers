import { row, title, text } from './ComputerDetail.module.css';
import Card from "./ui/Card";

export function ComputerDetail(props) {
  const { name, price, description } = props;

  return (
    <Card>
      <div className={row}>
        <p className={title}>Nazwa: </p>
        <p className={text}>{name}</p>
      </div>
      <div className={row}>
        <p className={title}>Cena: </p>
        <p className={text}>{price} zł</p>
      </div>
      <div className={row}>
        <p className={title}>Opis: </p>
        <p className={text}>{description}</p>
      </div>
    </Card>
  )
}
