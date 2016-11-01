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
        $(document).on('click tap', '.home-button', resetInteractive);
    }
    var resetInteractive = function() {
        // TODO: Reset back to start
        $attract = $('#introduction');
        if ($attract.hasClass('hidden')) {
            $attract.removeClass('hidden').removeClass('fade').addClass('in');
            $('.home-button').addClass('fade').removeClass('in');
            Questions.clearQuiz();
            Questions.resetWaterLevel();
            Result.clearCalculate();
            Result.clearResults();
            resetGui();
        }
    }

    var closeAttract = function() {
        $attract = $('#introduction');
        if (!$attract.hasClass('hidden')) {
            $attract.addClass('hidden').removeClass('in');
            $('.home-button').removeClass('fade').addClass('in');
            Questions.buildQuestions();

        }
    }

    var resetGui = function() {
        if ($('#gui').hasClass('fade')) {
            $('#gui').removeClass('hidden').removeClass('fade').addClass('in');        
        }
    }


    return {
        init: init,
        resetTimeout: resetTimeout,
        resetInteractive: resetInteractive
    }
})();