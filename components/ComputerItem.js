import { useRouter } from 'next/router';

import { item, content, actions } from './ComputerItem.module.css';
import Card from './ui/Card';

export function ComputerItem(props) {
  const router = useRouter();
  const { name, price } = props;

  const handleClick = (() => {
    router.push(`/komputer/${props.id}`)
  });

  return (
    <li className={item}>
      <Card>
        <h3 className={content}>{name}</h3>
        <p className={content}>Cena: {price} zł</p>
        <button className={actions} onClick={handleClick}>Pokaż szczegóły</button>
      </Card>
    </li>
  )
}
