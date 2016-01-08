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

        // Menu click event
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


        /*********************************
         Contact form
        **********************************/
        var contactForm = document.getElementById('te-contact');
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

        // contactForm.addEventListener('iron-form-invalid', function () {
        //     alert('invalid');
        // });

        // contactForm.addEventListener('iron-form-reset', function () {
        //     name.invalid = false;
        //     email.invalid = false;
        //     emailConfirm.invalid = false;
        //     message.invalid = false;
        // });

        // contactForm.addEventListener('iron-form-response', function (event) {
        //     alert('success');
        //     console.log(event.detail.response['test']);
        //     document.getElementById('test').innerHTML = event.detail.response['test'];
        //     // console.log(event);
        // });

        // contactForm.addEventListener('iron-form-error', function (event) {
        //     alert('error');
        // });

    }(this));
});
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
