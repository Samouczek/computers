import MainNavigation from './MainNavigation';
import { main } from './Layout.module.css';

export default function Layout(props) {
  return (
    <div>
      <MainNavigation/>
      <main className={main}>{props.children}</main>
    </div>
  );
}
