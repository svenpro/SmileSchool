$(document).ready(function () {
    function AppViewModel() {
        this.firstName = ko.observable('Ivan');
        this.lastName = ko.observable('Puluj');

        this.fullName = this.firstName() + ' ' + this.lastName();

        this.capitalizeLastName = function() {
            var currentVal = this.lastName();
            this.lastName(currentVal.toUpperCase());
        };
    }

    // Activates knockout.js
    ko.applyBindings(new AppViewModel())
});
