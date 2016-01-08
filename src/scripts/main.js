// main.js

// Listen for WebComponentsReady for Polymer elements
document.addEventListener('WebComponentsReady', function () {
    (function (global) {
        'use strict';


        /**********************************
         Main menu
        **********************************/
        var drawerPanel = document.getElementById('te-drawer-panel');
        var menu = document.getElementById('te-menu');
        var enableMenu = true;
        var loadingScreen = document.getElementById('te-loading');

        // Set up page on initial page load
        drawerPanel.drawerWidth = '208px';      // Change width of drawer
        drawerPanel.responsiveWidth = '840px';  // Change responsive break point of drawer
        pageScripts();                          // Load page-specfic JavaScript
        switch (window.location.pathname) {     // Set selected menu item
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
        loadingScreen.classList.add('loaded');  // Remove load screen

        // Drawer panel toggle
        global.teToggleDrawer = function () {
            if (drawerPanel.narrow && drawerPanel.offsetWidth < parseInt(drawerPanel.responsiveWidth)) {
                drawerPanel.togglePanel();
            } else {
                drawerPanel.forceNarrow = !drawerPanel.forceNarrow;
            }
        }

        // Menu click event
        menu.addEventListener('iron-select', function () {
            // Prevents event from firing when programmatically changing selection
            if (!enableMenu) {
                return;
            }

            switch (menu.selected) {
                case 0:
                    var url = '/';
                    break;
                case 1:
                    var url = '/portfolio/';
                    break;
                case 2:
                    var url = '/services/';
                    break;
                case 3:
                    var url = '/contact/';
                    break;
            }
            // Update browser history and load content
            history.pushState(null, null, url);
            loadContent(url);
        });

        // Fetches main page content via AJAX, and replaces current content
        function loadContent (source) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {
                        // Replace main content with new page, and load JavaScript
                        var newContent = xhttp.responseXML.getElementById('te-main-content');
                        document.getElementById('te-main-content').innerHTML = newContent.innerHTML;
                        pageScripts();
                    } else {
                        console.log('loadContent error');
                    }
                }
            };
            xhttp.open('GET', source, true);
            xhttp.responseType = 'document';
            xhttp.send();

            // Update selected menu item
            switch (source) {
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
        }

        // Handle browser back/forward buttons
        window.addEventListener('popstate', function () {
            enableMenu = false;
            loadContent(window.location.pathname);
            enableMenu = true;
        });

        // Load page-specific JavaScript
        function pageScripts () {
            
            /*********************************
             Contact form
            **********************************/    
            var contactForm = document.getElementById('te-contact');
            if (contactForm !== null) {
                var name = document.getElementById('te-contact_name');
                var subject = document.getElementById('te-contact_subject');
                var email = document.getElementById('te-contact_email');
                var emailConfirm = document.getElementById('te-contact_email-confirm');
                var message = document.getElementById('te-contact_message');
                var buttonSubmit = document.getElementById('te-contact_submit');
                var buttonClear = document.getElementById('te-contact_clear');

                // Contact form submit
                buttonSubmit.addEventListener('click', function () {
                    if (validateContactForm()) {
                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function() {
                            if (xhttp.readyState == 4 && xhttp.status == 200) {
                                document.getElementById('test').innerHTML = xhttp.responseText;
                            }
                        };
                        xhttp.open('POST', '/php/contact.php', true);
                        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        xhttp.send('name=' + name.value + '&subject=' + subject.value + '&email=' + email.value
                                   + '&emailConfirm=' + emailConfirm.value + '&message=' + message.value);
                    } else {
                        console.log('there was an error you piece of shit!'); 
                    }
                });
                function validateContactForm () {
                    var valid = true;
                    valid = (name.validate() && valid);
                    valid = (email.validate() && valid);
                    valid = (validateEmailConfirm() && valid);
                    valid = (message.validate() && valid);
                    return valid;
                }

                // Contact form clear
                buttonClear.addEventListener('click', clearContactForm);
                function clearContactForm () {
                    name.value = '';
                    subject.value = '';
                    email.value = '';
                    emailConfirm.value = '';
                    message.value = '';

                    name.invalid = false;
                    email.invalid = false;
                    emailConfirm.invalid = false;
                    message.invalid = false;
                }

                // Contact form confirmation email change event
                emailConfirm.addEventListener('change', validateEmailConfirm);
                function validateEmailConfirm () {
                    emailConfirm.invalid = (emailConfirm.value.toLowerCase() !== email.value.toLowerCase());
                    return !emailConfirm.invalid;
                }

                message.addEventListener('change', function () {
                    this.validate();
                });
            }
        }

    }(this));
});