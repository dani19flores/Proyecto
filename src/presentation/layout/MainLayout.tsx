import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.main}>
                <Header theme={theme} onToggleTheme={toggleTheme} />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};
