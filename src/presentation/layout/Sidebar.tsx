import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, User } from 'lucide-react';
import clsx from 'clsx';
import styles from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: LayoutDashboard, label: t('navigation.dashboard'), path: '/dashboard' },
        { icon: FileText, label: t('navigation.reports'), path: '/reports' },
        { icon: Settings, label: t('navigation.settings'), path: '/settings' },
        { icon: User, label: t('navigation.profile'), path: '/profile' },
    ];

    return (
        <aside className={clsx(styles.sidebar, className)}>
            <div className={styles.logo}>
                <div className={styles.logoIcon} />
                <span className={styles.logoText}>{t('navigation.appName')}</span>
            </div>

            <nav className={styles.nav}>
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={clsx(styles.navItem, location.pathname === item.path && styles.active)}
                        onClick={() => navigate(item.path)}
                    >
                        <item.icon size={20} />
                        <span className={styles.navLabel}>{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className={styles.footer}>
                <div className={styles.userProfile}>
                    <div className={styles.avatar}>U</div>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>{t('user.name')}</span>
                        <span className={styles.userRole}>{t('user.role')}</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};
