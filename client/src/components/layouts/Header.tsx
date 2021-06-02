import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [title, setTitle] = useState<string>('');

  const addTodo = () => {
    console.log('Submitted');
  };

  const handleChange = (event: any) => {
    event.preventDefault();
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        {
          // eslint-disable-next-line
        }
        <Link className='navbar-brand' to='/'>
          My Todos
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='/navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse'
          style={{ justifyContent: 'flex-end' }}
          id='navbarColor01'
        >
          {/* <ul className='navbar-nav me-auto'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle show'
                data-bs-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='true'
              >
                Dropdown
              </a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='/'>
                  Action
                </a>
                <Link className='dropdown-item' to='/'>
                  Another action
                </Link>
                <Link className='dropdown-item' to='/'>
                  Something else here
                </Link>
                <div className='dropdown-divider'></div>
                <Link className='dropdown-item' to='/'>
                  Separated link
                </Link>
              </div>
            </li>
          </ul> */}
          <form className='d-flex'>
            <input
              className='form-control me-sm-2'
              type='text'
              placeholder='Add Todo ...'
              name='title'
              onChange={handleChange}
            />
            <button
              className='btn btn-secondary my-2 my-sm-0'
              type='submit'
              onClick={addTodo}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
