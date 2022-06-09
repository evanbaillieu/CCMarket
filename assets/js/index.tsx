import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import './i18n';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript
root.render(<Router><App /></Router>);
