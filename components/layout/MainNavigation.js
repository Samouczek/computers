import Link from 'next/link';

import { header, logo } from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={header}>
      <div className={logo}>Komputery</div>
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
