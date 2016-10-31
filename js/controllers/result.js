Result = (function() {
	var timeout = [];
    var duration = 2000;

    var init = function() {
        bindEvents();
    }
    
    var bindEvents = function() {
        $(document).on('click tap', '.back-to-start', Utilities.resetInteractive);
    }


    var exitCalculate = function() {
        if (timeout) {
            $.each(timeout, function(index, value){
                clearTimeout(value);
                timeout.splice(index, 1);
            });
        }
        timeout.push(setTimeout(clearCalculate, duration));
    }

    var calculateResults = function() {
    	if ($('#calculating').hasClass('fade') || $('#calculating').hasClass('hidden')) {
    		$('#calculating').removeClass('fade').removeClass('hidden').addClass('in');
    		exitCalculate();
    	}
    }

    var clearCalculate = function() {
    	if ($('#calculating').hasClass('in')) {
    		$('#calculating').addClass('fade').addClass('hidden').removeClass('in');
    	}
    }

    var buildResults = function(id) {
        if (id == null) {
            $('#result-template').tmpl(data.results[0]).appendTo('#results');
        } else {
    	$('#result-template').tmpl(data.results[id]).appendTo('#results');
        }
    	$('#results').removeClass('fade').addClass('in');
   	}

   	var clearResults = function() {
   		$('#results').html('');
   	}


    return {
        init: init,
        calculateResults: calculateResults,
        clearCalculate: clearCalculate,
        buildResults: buildResults,
        clearResults: clearResults
        
    }
})();