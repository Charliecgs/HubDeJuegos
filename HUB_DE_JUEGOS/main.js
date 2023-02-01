import './style.css';

import { printTemplate as headerTemplate } from './components/Header/Header';
import { printTemplate as loginTemplate} from './pages/Login/Login';
import { printTemplate as gamesTemplate} from './pages/Games/Games';

export const initContent = (route) => {
    switch (route) {
        case undefined:
            localStorage.getItem("user") ? gamesTemplate() : loginTemplate();
            break;
    }
}


headerTemplate();
initContent();