import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../components/common/Card';
import { Mail, Phone, MapPin, Calendar, CheckCircle, Activity } from 'lucide-react';
import { Button } from '../components/common/Button';

export const ProfilePage: React.FC = () => {
    const { t } = useTranslation();

    // Mock user data
    const user = {
        fullName: 'John Anderson',
        email: 'john.anderson@findash.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        joinedDate: 'January 15, 2023',
        bio: 'Crypto enthusiast and investor with 5+ years of experience in digital asset management. Passionate about blockchain technology and decentralized finance.',
        avatar: 'JA',
        stats: {
            totalInvestments: '$125,420',
            activePortfolios: '8',
            totalProfit: '$57,070',
            successRate: '78.5%',
        },
        lastLogin: 'Today at 9:15 AM',
        accountStatus: 'Active',
        verified: true,
        recentActivity: [
            {
                action: 'viewedDashboard',
                time: '2 hours ago',
            },
            {
                action: 'updatedPortfolio',
                time: '5 hours ago',
            },
            {
                action: 'completedTransaction',
                time: '1 day ago',
            },
            {
                action: 'changedSettings',
                time: '3 days ago',
            },
        ],
    };

    return (
        <div style={{ padding: '2rem' }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ margin: 0, marginBottom: '0.5rem', color: 'var(--color-text)' }}>{t('profile.title')}</h1>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem',
                }}
            >
                {/* Profile Card */}
                <div>
                    <Card>
                        <div style={{ padding: '2rem' }}>
                            {/* Avatar and Name */}
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <div
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1rem',
                                        fontSize: '48px',
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}
                                >
                                    {user.avatar}
                                </div>
                                <h2 style={{ margin: 0, marginBottom: '0.5rem', color: 'var(--color-text)' }}>{user.fullName}</h2>
                                <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '14px' }}>
                                    {t('user.role')}
                                    {user.verified && (
                                        <CheckCircle
                                            size={16}
                                            style={{
                                                color: 'var(--color-success)',
                                                marginLeft: '0.5rem',
                                                display: 'inline',
                                                verticalAlign: 'middle',
                                            }}
                                        />
                                    )}
                                </p>
                            </div>

                            {/* Personal Information */}
                            <h3
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    marginBottom: '1rem',
                                    color: 'var(--color-text)',
                                }}
                            >
                                {t('profile.personalInfo')}
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <Mail size={20} style={{ color: 'var(--color-text-muted)' }} />
                                    <div>
                                        <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                            {t('profile.email')}
                                        </p>
                                        <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: 'var(--color-text)' }}>
                                            {user.email}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <Phone size={20} style={{ color: 'var(--color-text-muted)' }} />
                                    <div>
                                        <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                            {t('profile.phone')}
                                        </p>
                                        <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: 'var(--color-text)' }}>
                                            {user.phone}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <MapPin size={20} style={{ color: 'var(--color-text-muted)' }} />
                                    <div>
                                        <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                            {t('profile.location')}
                                        </p>
                                        <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: 'var(--color-text)' }}>
                                            {user.location}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <Calendar size={20} style={{ color: 'var(--color-text-muted)' }} />
                                    <div>
                                        <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                            {t('profile.joinedDate')}
                                        </p>
                                        <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: 'var(--color-text)' }}>
                                            {user.joinedDate}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div style={{ marginTop: '1.5rem' }}>
                                <h4
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        marginBottom: '0.5rem',
                                        color: 'var(--color-text-muted)',
                                    }}
                                >
                                    {t('profile.bio')}
                                </h4>
                                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                                    {user.bio}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div
                                style={{
                                    marginTop: '2rem',
                                    display: 'flex',
                                    gap: '1rem',
                                }}
                            >
                                <Button variant="primary" size="md" style={{ flex: 1 }}>
                                    {t('profile.editProfile')}
                                </Button>
                                <Button variant="secondary" size="md" style={{ flex: 1 }}>
                                    {t('profile.changePassword')}
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Stats and Activity Section */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Account Statistics */}
                    <Card>
                        <div style={{ padding: '1.5rem' }}>
                            <h3
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '1.5rem',
                                    color: 'var(--color-text)',
                                }}
                            >
                                {t('profile.accountStats')}
                            </h3>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '1.5rem',
                                }}
                            >
                                <div>
                                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                        {t('profile.totalInvestments')}
                                    </p>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            color: 'var(--color-text)',
                                        }}
                                    >
                                        {user.stats.totalInvestments}
                                    </p>
                                </div>

                                <div>
                                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                        {t('profile.activePortfolios')}
                                    </p>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            color: 'var(--color-text)',
                                        }}
                                    >
                                        {user.stats.activePortfolios}
                                    </p>
                                </div>

                                <div>
                                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                        {t('profile.totalProfit')}
                                    </p>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            color: 'var(--color-success)',
                                        }}
                                    >
                                        {user.stats.totalProfit}
                                    </p>
                                </div>

                                <div>
                                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                        {t('profile.successRate')}
                                    </p>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            color: 'var(--color-text)',
                                        }}
                                    >
                                        {user.stats.successRate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Recent Activity */}
                    <Card>
                        <div style={{ padding: '1.5rem' }}>
                            <h3
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '1.5rem',
                                    color: 'var(--color-text)',
                                }}
                            >
                                {t('profile.recentActivity')}
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {user.recentActivity.map((activity, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem',
                                            backgroundColor: 'var(--color-background)',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                backgroundColor: 'var(--color-primary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Activity size={20} style={{ color: 'white' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: 'var(--color-text)' }}>
                                                {t(`profile.${activity.action}`)}
                                            </p>
                                            <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                                {activity.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Account Info */}
                    <Card>
                        <div style={{ padding: '1.5rem' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '1rem',
                                }}
                            >
                                <div>
                                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                        {t('profile.lastLogin')}
                                    </p>
                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: 'var(--color-text)' }}>
                                        {user.lastLogin}
                                    </p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
                                        {t('profile.accountStatus')}
                                    </p>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: 'var(--color-success)',
                                        }}
                                    >
                                        {user.accountStatus}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
