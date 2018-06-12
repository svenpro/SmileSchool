requirejs.config({
    "paths": {
        "app": "../js/app",
        "jquery": "lib/jquery",
        "jqueryUI": "lib/jquery-ui",
        "slick": "slick-master/slick/slick.min",
        // "headerSlider": "lib/plugin/headerSlider",
         "menuExtend": "lib/widgets/menuExtend"
    }
});

// Load the main app module to start the app
requirejs(["app/function"]);
