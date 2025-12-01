import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import styles from './SettingsPage.module.css';

export const SettingsPage: React.FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t('settings.title')}</h1>

            <div className={styles.grid}>
                <Card title={t('settings.language')}>
                    <div className={styles.options}>
                        <Button
                            variant={i18n.language === 'en' ? 'primary' : 'secondary'}
                            onClick={() => changeLanguage('en')}
                        >
                            English
                        </Button>
                        <Button
                            variant={i18n.language === 'es' ? 'primary' : 'secondary'}
                            onClick={() => changeLanguage('es')}
                        >
                            Español
                        </Button>
                    </div>
                </Card>

                <Card title={t('settings.theme')}>
                    <div className={styles.options}>
                        <p>Use the toggle in the header to switch themes.</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};
