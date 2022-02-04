import { ComputerItem } from './ComputerItem';
import classes from './ComputerList.module.css';

export function ComputerList(props) {
  const { computers } = props;

  return (
    <ul className={classes.list}>
      {computers.map(({ id, name, description, price }) => (
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
