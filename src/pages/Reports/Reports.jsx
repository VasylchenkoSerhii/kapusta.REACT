import React from 'react';
import { Link } from 'react-router-dom';

export default function Reports() {
  return (
    <main>
      <Link></Link>
      <section>
        <div>
          <p>Current period:</p>
          <div>
            <button type='button'></button>
            <span>November 2019</span>
            <button type='button'></button>
          </div>
        </div>
        <div>
          <span>Balance:</span>
          <span>55 000.00 UAH</span>
        </div>
        <ul>
          <li>
            <span>Expenses:</span>
            <span>- 18 000.00 UAH.</span>
          </li>
          <li>
            <span>Income:</span>
            <span>+ 45 000.00 UAH.</span>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <button type='button'></button>
          <span>Expenses</span>
          <button type='button'></button>
        </div>
      </section>
    </main>
  );
}
