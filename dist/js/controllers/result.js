Result=function(){var a=[],b=2e3,c=function(){d()},d=function(){$(document).on("click tap",".back-to-start",Utilities.resetInteractive)},e=function(){a&&$.each(a,function(b,c){clearTimeout(c),a.splice(b,1)}),a.push(setTimeout(g,b))},f=function(){($("#calculating").hasClass("fade")||$("#calculating").hasClass("hidden"))&&(Questions.adjustWaterLevel(10),$("#calculating").removeClass("fade").removeClass("hidden").addClass("in"),e())},g=function(){$("#calculating").hasClass("in")&&$("#calculating").addClass("fade").addClass("hidden").removeClass("in")},h=function(a){null==a||1==a?($("#result-template").tmpl(data.results[0]).appendTo("#results"),$("#animation").load("assets/animations/1.html",function(){animationInit()})):($("#result-template").tmpl(data.results[a-1]).appendTo("#results"),$("#animation").load("assets/animations/"+a+".html",function(){animationInit()})),$("#results").removeClass("fade").addClass("in"),$(".logo").addClass("fade").removeClass("in"),$("#gui").css("height","0vh")},i=function(){$("#results").html("")};return{init:c,calculateResults:f,clearCalculate:g,buildResults:h,clearResults:i}}();