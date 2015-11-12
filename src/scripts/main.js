// main.js

// Scripts for Polymer elements
document.addEventListener('WebComponentsReady', function () {
    (function (global) {
        'use strict';
        var drawerPanel = document.getElementById('te-paper-drawer-panel');

        global.teToggleDrawer = function () {
            if (drawerPanel.narrow && drawerPanel.offsetWidth < parseInt(drawerPanel.responsiveWidth)) {
                drawerPanel.togglePanel();
            } else {
                drawerPanel.forceNarrow = !drawerPanel.forceNarrow;
            }
        }
    }(this));

});