import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InputFile from './InputFile';
import SortableTable from './SortableTable';
import * as script from './Script.js';

ReactDOM.render(
  <div>
    <InputFile accept=".xlsx, .xls" name ="匯入Excel" />
    <SortableTable metadata={script.getMetadate()}/>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
