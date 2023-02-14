import React from 'react';
import Toolbar from '../../Components/Toolbar';
import BurgerBuilder from '../BurgerBuilder';
import css from './style.module.css';


function App() {
  return (
    <div>
      <Toolbar/>
      <main className={css.Content}>
        <BurgerBuilder/>
      </main>
    </div>
  );
}

export default App;
