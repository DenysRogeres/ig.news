import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SingnInButton() {
    const isUserLogged = true;
    return isUserLogged ? (
        <button type="button" className={styles.signInButtonStyle}>
            <FaGithub color="#04D361"/>
            Denys Rogeres
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button type="button" className={styles.SignInButtonStyle}>
            <FaGithub color="#ebe417"/>
            Sing in with Github
        </button>
    )
}