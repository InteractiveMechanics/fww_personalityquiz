Questions = (function() {
    var init = function() {
        bindEvents();
    }
    
    var buildQuestions = function() {



    	$('#quiz-template').tmpl(data.questions[2]).appendTo('#questions');
    	
        buildOptions();

        alert(data.questions[2].step);

        if (data.questions[2].step == 1) {
            $('#water').attr('data-water-level', 1);
        } else if (data.questions[2].step == 2) {
            $('#water').attr('data-water-level', 2);
        } else if (data.questions[2].step == 3) {
            $('#water').attr('data-water-level', 3);
        }
    }

    var buildOptions = function() {
    	$('#option-template').tmpl(data.questions[0].options).appendTo('#options');
    }

    var nextQuestion = function() {

    }

    var bindEvents = function() {}

    return {
        init: init,
        buildQuestions: buildQuestions
    }

})();