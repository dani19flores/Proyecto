import React from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe } from 'lucide-react';
import { Button } from '../components/common/Button';
import styles from './Header.module.css';

interface HeaderProps {
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <header className={styles.header}>
            <h2 className={styles.title}>{t('dashboard.title')}</h2>
            <div className={styles.actions}>
                <Button variant="ghost" onClick={toggleLanguage} className={styles.iconBtn}>
                    <Globe size={20} />
                    <span className={styles.langText}>{i18n.language.toUpperCase()}</span>
                </Button>
                <Button variant="ghost" onClick={onToggleTheme} className={styles.iconBtn}>
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </Button>
            </div>
        </header>
    );
};
