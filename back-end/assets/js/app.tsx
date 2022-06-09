import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './view/Home';
import './i18n';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript
root.render(<Router><Home /></Router>);
