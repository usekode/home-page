import logo from './logo.svg';
import './App.css';
import Kode, {useCode} from './Kode';
import { useEffect, useState,  } from 'react';

const App = () => {
  return (
    <div className="App">
      <div className='import-statement'>
        import{' '}
        <span className='light'>
          &#123;{' '}
          <span 
          className='import-error'
          title='useCode are comming...' 
          >useCode</span>{' '}
          &#125;
        </span> from <span className='light'>‘kode’</span>;
      </div>
      
      <Kode />
    </div>
  );
}

export default App;
