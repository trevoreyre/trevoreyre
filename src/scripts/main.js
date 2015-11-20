// main.js

// Scripts for Polymer elements
document.addEventListener('WebComponentsReady', function () {
    (function (global) {
        'use strict';
        var drawerPanel = document.getElementById('te-drawer-panel');
        var menu = document.getElementById('te-menu');

        // Handle menu click event
        menu.addEventListener('iron-select', function () {
            console.log(menu.selected);
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