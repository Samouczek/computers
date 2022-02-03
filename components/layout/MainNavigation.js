import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Komputery</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>lista komputerów</Link>
          </li>
          <li>
            <Link href='/komputer/dodaj'>dodaj komputer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
