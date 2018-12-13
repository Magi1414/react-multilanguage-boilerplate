import React from 'react';
import changeLanguage from './changeLanguage';

const Header = ({updateLanguage}) => {


  return (
    <div>
        <header>
          choose language
          <select onChange={updateLanguage}>
            <option value="french">french</option>
            <option value="english">english</option>
            <option value="german">german</option>
          </select>
        </header>
    </div>
  );
};

export default changeLanguage(Header);