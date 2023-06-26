import { createRoot } from 'react-dom/client';
import App from './app';

const contain = document.getElementById('root') as Element;
const root = createRoot(contain);

root.render(<App name="shijie" age={20} />);
