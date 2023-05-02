module.exports = {
    content: ["*"],
    theme: {
        fontFamily: {
            sans: "proxima-nova, sans-serif"
        },
        extend: {
            container: {
                padding: '30px'
            },
            colors: {
                'accent': '#FFDB00',
                'accent-2': '#1AA800',
                'accent-3': '#315147',
                'button': "#315147",
                'media': "#F2F2F2"
            },
            fontFamily: {
                'Proxima': "proxima-nova, sans-serif",
                'Noto': "'Noto Sans', sans-serif",
                'Orbitron': "'Orbitron', sans-serif",
                'Proxima-condensed': 'proxima-nova-condensed, sans-serif;'
            },
            maxWidth: {
                'narrow': '1260px'
            },
            backgroundImage: {
                'checkmark': "url('/assets/check-icon.svg')"
            },
            fontSize: {
                xs: '15px',
                sm: '20px',
                md: '30px',
                lg: '40px',
                xl: '50px'
            }
        },
    },
    plugins: [],
}