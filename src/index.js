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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
