Questions = (function() {
    var init = function() {
        bindEvents();
    }
    
    var buildQuestions = function() {

    	$('#quiz-template').tmpl(data.questions[0]).appendTo('#questions');
    	buildOptions();
    }

    var buildOptions = function() {
    	$('#option-template').tmpl(data.questions[0].options).appendTo('#options');
    }

    var bindEvents = function() {}

    return {
        init: init,
        buildQuestions: buildQuestions
    }

})();