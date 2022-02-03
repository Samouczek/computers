import {useRouter} from 'next/router';

import classes from './ComputerItem.module.css';
import Card from './ui/Card';

export function ComputerItem(props) {
  const router = useRouter();

  const handleClick = (() => {
    router.push(`/komputer/${props.id}`)
  });

  return (
    <li className={classes.item}>
      <Card>
        <h3 className={classes.content}>{props.name}</h3>
        <p className={classes.content}>Cena: {props.price} zł</p>
        <button className={classes.actions} onClick={handleClick}>Pokaż szczegóły</button>
      </Card>
    </li>
  )
}
