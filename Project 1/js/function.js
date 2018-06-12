requirejs.config({
    "paths": {
        "js": "../js/",
        "jquery": "jquery",
        "jqueryUI": "jquery-ui",
        "powerSlide": "plugins/power-slide",
        "menuExtend": "widgets/menu-extend",
        "slick": "slick/slick.min"
    }
});

// Load the main app module to start the app
requirejs(["js/main.js"]);