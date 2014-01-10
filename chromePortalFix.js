;(function () {

    var origGetElementById = document.getElementById.bind(document);

    document.getElementById = function (id) {
        var origResult = origGetElementById(id);

        return origResult ||
            document.querySelector("[name='" + id + "']");
    };

    [
        "pickUpPoint",
        "dropOffPoint"
    ].forEach(function (name) {
        
        document.all[name] = function (index) {
            return document.querySelectorAll("[name='" + name + "']")[index];
        };

    });

}());