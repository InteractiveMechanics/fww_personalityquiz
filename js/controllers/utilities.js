Utilities = (function() {
    var timeout = [];
    var duration = 90000;

    var init = function() {
        bindEvents();
    }
    var resetTimeout = function() {
        if (timeout) {
            $.each(timeout, function(index, value){
                clearTimeout(value);
                timeout.splice(index, 1);
            });
        }
        timeout.push(setTimeout(resetInteractive, duration));
    }
    var bindEvents = function() {
        $(document).on('click tap', resetTimeout);
    }
    var resetInteractive = function() {
        // TODO: Reset back to start
    }

    return {
        init: init,
        resetTimeout: resetTimeout
    }
})();