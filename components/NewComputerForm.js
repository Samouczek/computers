import { useRef } from 'react';

import { form, control, actions } from './NewComputerForm.module.css';
import Card from './ui/Card';

export function NewComputerForm(props) {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();

  const handleClick = ((event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    const computerData = {
      name: enteredName,
      description: enteredDescription,
      price: enteredPrice,
    };

    props.onAddComputer(computerData);
  });

  return (
    <Card>
      <form className={form}>
        <div className={control}>
          <label htmlFor='name'>Nazwa</label>
          <input type='text' required id='name' ref={nameInputRef}/>
        </div>
        <div className={control}>
          <label htmlFor='price'>Cena</label>
          <input type='number' required id='price' ref={priceInputRef}/>
        </div>
        <div className={control}>
          <label htmlFor='description'>Opis</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          > </textarea>
        </div>
        <div className={actions}>
          <button onClick={handleClick}>Dodaj</button>
        </div>
      </form>
    </Card>
  )
}
