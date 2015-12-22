// main.js

// Scripts for Polymer elements
document.addEventListener('WebComponentsReady', function () {
    (function (global) {
        'use strict';
        var drawerPanel = document.getElementById('te-drawer-panel');
        var menu = document.getElementById('te-menu');

        // Highlight selected page in menu
        switch (window.location.pathname) {
            case '/portfolio/':
                menu.selected = 1;
                break;
            case '/services/':
                menu.selected = 2;
                break;
            case '/contact/':
                menu.selected = 3;
                break;
            default:
                menu.selected = 0;
        }

        // Handle menu click event
        menu.addEventListener('iron-select', function () {
            switch (menu.selected) {
                case 0:
                    window.location.href = '/';
                    break;
                case 1:
                    window.location.href = '/portfolio/';
                    break;
                case 2:
                    window.location.href = '/services/';
                    break;
                case 3:
                    window.location.href = '/contact/';
                    break;
            }
        });

        // Change drawer panel breakpoint, and width
        drawerPanel.drawerWidth = '208px';
        drawerPanel.responsiveWidth = '840px';

        // Drawer panel toggle
        global.teToggleDrawer = function () {
            if (drawerPanel.narrow && drawerPanel.offsetWidth < parseInt(drawerPanel.responsiveWidth)) {
                drawerPanel.togglePanel();
            } else {
                drawerPanel.forceNarrow = !drawerPanel.forceNarrow;
            }
        }
    }(this));

});