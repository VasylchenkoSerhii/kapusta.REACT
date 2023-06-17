import Sprite from '../../images/currentPeriod.svg';

export default function Categories() {
  const categories = [
    'Transport',
    'Products',
    'Health',
    'Alcohol',
    'Entertainment',
    'Housing',
    'Technique',
    'Communal, communication',
    'Sports, hobbies',
    'Education',
    'Other',
  ];

  return (
    <section>
      <div>
        <button type='button'></button>
        <span>Expenses</span>
        <button type='button'></button>
      </div>
      <ul>
        {categories.map((el, index) => (
          <li key={index}>
            <p>5 000.00</p>
            <svg width={56} height={56}>
              <use href={`${Sprite}#${el.toLowerCase()}`}></use>
            </svg>
            <p>{el}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
