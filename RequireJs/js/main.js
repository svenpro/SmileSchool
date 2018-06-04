requirejs.config({
    "paths": {
        "app": "../js/app",
        "jquery": "lib/jquery",
        "jqueryUI": "lib/jquery-ui",
        "backToTop": "lib/plugin/scroll-to-top",
        "accordionExtend": "lib/widgets/accordion-extend"
    }
});

// Load the main app module to start the app
requirejs(["app/function"]);
