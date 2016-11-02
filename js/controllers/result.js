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
            Questions.adjustWaterLevel(10);
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

        if (id == null || id == 1) {
            $('#result-template').tmpl(data.results[0]).appendTo('#results');
            $('#animation').load('/assets/animations/1.html', function() {
                animationInit();
            });
        } else {
    	$('#result-template').tmpl(data.results[id-1]).appendTo('#results');
            $('#animation').load('/assets/animations/' + id + '.html', function() {
                animationInit();
            });
        }
    	$('#results').removeClass('fade').addClass('in');
        //Questions.adjustWaterLevel(10);
        clearGui();
   	}

    var clearGui = function() {
        $('#gui').addClass('fade').addClass('hidden');
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