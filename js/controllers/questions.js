Questions = (function() {
    var init = function() {
        bindEvents();
    }
    
    var buildQuestions = function(id) {

        
        if (id == null) {
    	   $('#quiz-template').tmpl(data.questions[0]).appendTo('#questions');
           buildOptions(0);
           adjustWaterLevel(0);
        } else {
           clearQuiz();
 
            $('#quiz-template').tmpl(data.questions[id]).appendTo('#questions'); 

            buildOptions(id);
            adjustWaterLevel(id);  
        }
    }

    var clearQuiz = function() {
        $('#questions').html('');
    }

    var buildOptions = function(id) {
    	$('#option-template').tmpl(data.questions[id].options).appendTo('#options');
    }

    var nextQuestion = function() {
        if ($('.answer-btn').attr('data-next')) {
            var id = $(this).attr('data-next');
            buildQuestions(id);
        } else {
            var id = $(this).attr('data-result');
            clearQuiz();
            Result.calculateResults();
            setTimeout(function() { Result.buildResults(id); }, 2500);
        }
    }

    var adjustWaterLevel = function(id) {
        $('#water').attr('data-water-level', id);
        if (id > 2) {
            $('.answer-btn').css('color', '#ffffff').css('z-index', '99');
        }
        if (id > 3) {
            $('.question').css('color', '#ffffff').css('z-index', '99');
        }
    }

    var resetWaterLevel = function() {
        $('#water').attr('data-water-level', 0);
    }


    var bindEvents = function() {
        $(document).on('click tap', '.answer-btn', nextQuestion);
    }

    return {
        init: init,
        buildQuestions: buildQuestions,
        clearQuiz: clearQuiz,
        resetWaterLevel: resetWaterLevel
    }

})();