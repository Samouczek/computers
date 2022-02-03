import { ComputerItem } from './ComputerItem';
import classes from './ComputerList.module.css';

export function ComputerList(props) {
  return (
    <ul className={classes.list}>
      {props.computers.map(({id, name, description, price}) => (
        <ComputerItem
          key={id}
          id={id}
          name={name}
          description={description}
          price={price}
        />
      ))}
    </ul>
  )
}
