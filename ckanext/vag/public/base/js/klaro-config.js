window.klaroConfig = {
    acceptAll: true,
    privacyPolicy: '/pages/datenschutzerklarung',
    translations: {
        de: {
            'google-analytics': {
                title: 'Google Analytics',
                description: 'Sammeln von Besucherstatistiken',
            },
            'system': {
                title: 'System-Cookies',
                description: 'Notwendige System-Cookies: Speicherung der Cookie-Einstellungen, Sitzungs-Cookie',
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
                security: 'Sicherheit',
                livechat: 'Live Chat',
                advertising: 'Anzeigen von Werbung',
                styling: 'Styling',
                system: 'System',
            },
        },
        en: {
            'google-analytics': {
                title: 'Google Analytics',
                description: 'Collecting of visitor statistics',
            },
            'system': {
                title: 'System-Cookies',
                description: 'Required system cookies: Cookie settings, session cookie',
            },
            purposes: {
                analytics: 'Analytics',
                security: 'Security',
                livechat: 'Livechat',
                advertising: 'Advertising',
                styling: 'Styling',
                system: 'System',
            },
        },
    },
    apps: [
        {
            name: 'system',
            'default': true,
            title: 'System-Cookies',
            purposes: ['system'],
            required: true,
        },
        {
            name: 'google-analytics',
            'default': false,
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                /^_ga.*$/,
                /^_gid.*$/,
                [/^_ga.*$/, '/', '.vag.de'],
                [/^_gid.*$/, '/', '.vag.de'],
            ],
            required: false,
        }
    ],
};