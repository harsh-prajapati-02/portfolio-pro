'use client';

import StaggeredMenu from '../pages/StaggeredMenu';

const MenuWrapper = () => {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
        { label: 'Services', ariaLabel: 'View our services', link: '/services' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];

    return (
        <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            isFixed={true}
            menuButtonColor="#b7ab98"
            openMenuButtonColor="#0d0d0d"
            changeMenuColorOnOpen={true}
            colors={['#B19EEF', '#5227FF']}
            accentColor="#EB5939"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
        />
    );
};

export default MenuWrapper;
