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
        $(document).on('click tap', '.start-quiz', closeAttract);
    }
    var resetInteractive = function() {
        // TODO: Reset back to start
    }

    var closeAttract = function() {
        $attract = $('#introduction');
        if (!$attract.hasClass('hidden')) {
            $attract.addClass('hidden').removeClass('in');
            Questions.buildQuestions();
        }
    }


    return {
        init: init,
        resetTimeout: resetTimeout
    }
})();