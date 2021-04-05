import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/common.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import { KAKAO_JAVASCRIPT_KEY } from './config';

window.Kakao.init(KAKAO_JAVASCRIPT_KEY);
console.log(window.Kakao.isInitialized());
ReactDOM.render(<Routes />, document.getElementById('root'));
