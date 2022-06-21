import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import store from './store/store';
import './i18n';
import './scss/main.scss';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <Provider store={store}>
        <Router>
            <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Router>
    </Provider>,
);
