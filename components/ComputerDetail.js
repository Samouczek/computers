import classes from './ComputerDetail.module.css';
import Card from "./ui/Card";

export function ComputerDetail(props) {
  return (
    <Card>
      <div className={classes.row}>
        <p className={classes.name}>Nazwa: </p>
        <p className={classes.text}>{props.name}</p>
      </div>
      <div className={classes.row}>
        <p className={classes.name}>Cena: </p>
        <p className={classes.text}>{props.price} zł</p>
      </div>
      <div className={classes.row}>
        <p className={classes.name}>Opis: </p>
        <p className={classes.text}>{props.description}</p>
      </div>
    </Card>
  )
}
