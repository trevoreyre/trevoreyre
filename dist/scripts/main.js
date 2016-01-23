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
        var menuOptions = ['/', '/portfolio/', '/services/', '/contact/'];
        var updateHistory = true;

        // Set up page on initial page load
        drawerPanel.drawerWidth = '208px';                              // Change width of drawer
        drawerPanel.responsiveWidth = '840px';                          // Change responsive break point of drawer
        menu.selected = menuOptions.indexOf(window.location.pathname);  // Set selected menu item
        document.getElementById('te-loading-site').classList.add('loaded');  // Remove load screen
        pageScripts();                                                  // Run page-specfic JavaScript

        // Drawer toggle button
        document.getElementById('te-drawer-toggle').addEventListener('click', function () {
            if (drawerPanel.narrow && drawerPanel.offsetWidth < parseInt(drawerPanel.responsiveWidth)) {
                drawerPanel.togglePanel();
            } else {
                drawerPanel.forceNarrow = !drawerPanel.forceNarrow;
            }
        });

        // Menu click event. Updates browser history, and loads page content.
        menu.addEventListener('iron-select', function () {
            var url = menuOptions[menu.selected];
            if (updateHistory) {history.pushState(null, null, url);}
            loadContent(url);
            drawerPanel.closeDrawer();
        });

        // Fetches main page content via AJAX, and replaces current content
        function loadContent (source) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {
                        // Replace main content with new page, and run page-specific JavaScript
                        var newContent = xhttp.responseXML.getElementById('te-main-content');
                        document.getElementById('te-main-content').innerHTML = newContent.innerHTML;
                        document.getElementById('main').scrollTop = 0;
                        pageScripts();
                    } else {
                        console.log('loadContent error');
                    }
                }
            };
            xhttp.open('GET', source, true);
            xhttp.responseType = 'document';
            xhttp.send();
        }

        // Handle browser back/forward buttons
        window.addEventListener('popstate', function () {
            updateHistory = false;
            menu.selected = menuOptions.indexOf(window.location.pathname);
            updateHistory = true;
        });

        // All JavaScript functions that only run on specific pages are contained here.
        // A check is done first for a page-specific element, before running the scripts.
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
                var dialogError = document.getElementById('te-dialog_form-error');
                var dialogErrorMessage = document.querySelector('#te-dialog_form-error .te-dialog_body');
                var loadingScreen = document.getElementById('te-loading-contact');
                var formErrorMessage = 'There are errors on your form. Please correct these errors and try again.';
                var sendErrorMessage = 'There was an error sending your message. Please try again later.';

                // Contact form submit
                document.getElementById('te-contact_submit').addEventListener('click', function () {
                    if (!validateContactForm()) { // Invalid form
                        dialogErrorMessage.innerHTML = formErrorMessage;
                        dialogError.open();
                    } else { // Show loading screen, attempt to send message via AJAX
                        loadingScreen.classList.remove('loaded');
                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function() {
                            if (xhttp.readyState == 4) {
                                if (xhttp.status != 200) { // Error receiving AJAX response
                                    dialogErrorMessage.innerHTML = sendErrorMessage;
                                    dialogError.open();
                                } else { // Successful response
                                    var response = xhttp.responseText;
                                    console.log(response);
                                    if (response === "1") { // Email sent successfully
                                        clearContactForm();
                                        setTimeout(function () {
                                            document.getElementById('te-toast_form-sent').open();
                                            loadingScreen.classList.add('loaded');
                                        }, 1000);
                                    } else if (response === "0") { // Unable to send email
                                        dialogErrorMessage.innerHTML = sendErrorMessage;
                                        loadingScreen.classList.add('loaded');
                                        dialogError.open();
                                    } else { // Invalid form
                                        dialogErrorMessage.innerHTML = formErrorMessage;
                                        loadingScreen.classList.add('loaded');
                                        dialogError.open();
                                    }
                                }
                            }
                        };
                        xhttp.open('POST', '/php/contact.php', true);
                        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        xhttp.send('name=' + name.value + '&subject=' + subject.value + '&email=' + email.value
                                   + '&emailConfirm=' + emailConfirm.value + '&message=' + message.value);
                    }
                });
                
                // Contact form validation
                function validateContactForm () {
                    var valid = true;
                    valid = (name.validate() && valid);
                    valid = (email.validate() && valid);
                    valid = (validateEmailConfirm() && valid);
                    valid = (message.validate() && valid);
                    return valid;
                }

                // Contact form clear
                document.getElementById('te-contact_clear').addEventListener('click', clearContactForm);
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

                // Custom validation function for confirmation email
                emailConfirm.addEventListener('change', validateEmailConfirm);
                function validateEmailConfirm () {
                    emailConfirm.invalid = (emailConfirm.value.toLowerCase() !== email.value.toLowerCase());
                    return !emailConfirm.invalid;
                }

                message.addEventListener('change', function () {
                    this.validate();
                });

                // Contact button links
                document.getElementById('te-contact-link_email').addEventListener('click', function () {window.open('mailto:trevoreyre@gmail.com', '_blank');});
                document.getElementById('te-contact-link_github').addEventListener('click', function () {window.open('https://github.com/TrevorEyre', '_blank');});
                document.getElementById('te-contact-link_linkedin').addEventListener('click', function () {window.open('https://www.linkedin.com/in/trevor-eyre-958976108', '_blank');});
            }

            
            /*********************************
             Overview page links
            **********************************/
            var overview = document.querySelector('.te-overview_info');
            if (overview !== null) {
                document.getElementById('te-overview-link_portfolio').addEventListener('click', function () {menu.selected = 1;});
            }


            /*********************************
             Portfolio page links
            **********************************/
            var portfolio = document.querySelector('.te-portfolio_container');
            if (portfolio !== null) {
                document.getElementById('te-gbo-source-1').addEventListener('click', function () {window.open('https://github.com/TrevorEyre/gbo', '_blank');});
                document.getElementById('te-gbo-source-2').addEventListener('click', function () {window.open('https://github.com/TrevorEyre/gbo', '_blank');});
                document.getElementById('te-gbo-website-1').addEventListener('click', function () {window.open('http://gbofashion.com', '_blank');});
                document.getElementById('te-gbo-website-2').addEventListener('click', function () {window.open('http://gbofashion.com', '_blank');});
                document.getElementById('te-datepicker-website-1').addEventListener('click', function () {window.open('http://bit.ly/1ossyMA', '_blank');});
                document.getElementById('te-datepicker-website-2').addEventListener('click', function () {window.open('http://bit.ly/1ossyMA', '_blank');});
                document.getElementById('te-trevoreyre-source-1').addEventListener('click', function () {window.open('https://github.com/TrevorEyre/trevoreyre', '_blank');});
                document.getElementById('te-trevoreyre-source-2').addEventListener('click', function () {window.open('https://github.com/TrevorEyre/trevoreyre', '_blank');});
                document.getElementById('te-company-source-1').addEventListener('click', function () {window.open('https://github.com/TrevorEyre/company-template', '_blank');});
                document.getElementById('te-company-source-2').addEventListener('click', function () {window.open('https://github.com/TrevorEyre/company-template', '_blank');});
                document.getElementById('te-company-website-1').addEventListener('click', function () {window.open('http://company-template.trevoreyre.com', '_blank');});
                document.getElementById('te-company-website-2').addEventListener('click', function () {window.open('http://company-template.trevoreyre.com', '_blank');});
            }


            /*********************************
             Services page links
            **********************************/
            var services = document.getElementById('te-services-link_contact');
            if (services !== null) {
                services.addEventListener('click', function () {menu.selected = 3;});
            }
        }

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
