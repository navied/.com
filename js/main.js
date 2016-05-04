$(document).on('input click', "[data-behavior~=input-selected]", function() {
    if ($(this).first().val().length > 0) {
        $(".donger span").hide();
    } else {
        $(".donger span").show();
    }
});

$(document).on('input click', "[data-behavior~=question-me]", function() {
	$("#question-body").show();
	$("#answer-body").hide();
	$("#question-div i").removeClass('icon-help');
	$("#question-div i").addClass("icon-arrow_back");
	$("#question-div").attr("data-behavior", "answer-me");
});

$(document).on('input click', "[data-behavior~=answer-me]", function() {
	$("#question-body").hide();
	$("#answer-body").show();
	$("#question-div i").addClass('icon-help');
	$("#question-div i").removeClass("icon-arrow_back");
	$("#question-div").attr("data-behavior", "question-me");
});

$(function() {
    $('#target').on('submit', function(e) {
        e.preventDefault();
        var inputVal = $(this).find("input").val();
        response(inputVal);
    });
});

function response(q) {
	resetLinks();
    if (q.toLowerCase().indexOf("hello") >= 0) {
		$(".glitch").first().text("hi there").attr("data-text","hi there");
		$(".glitch").last().text("what did you need?").attr("data-text","what did you need?")
    }
    else if (q.toLowerCase().indexOf("know") >= 0) {
		$(".glitch").first().text("ask me").attr("data-text","ask me");
		$(".glitch").last().text("questions").attr("data-text","questions")
    }
    else if (q.toLowerCase().indexOf("worked") >= 0) {
		$(".glitch").first().text("I've worked at").attr("data-text","I've worked at");
		$(".glitch").last().text("Listn, Beatport, and now at Dovetale").attr("data-text","Listn, Beatport, and now at Dovetale")
    }
    else if (q.toLowerCase().indexOf("do") >= 0) {
		$(".glitch").first().text("I was created to serve").attr("data-text","I was created to serve");
		$(".glitch").last().text("my creator").attr("data-text","my creator");
    }
    else if (q.toLowerCase().indexOf("email") >= 0) {
		$(".glitch").first().text("my creator's email is").attr("data-text","my creator's email is");
		$(".glitch").last().text("hello(at)navied(dot).com").attr("data-text","hello(at)navied(dot).com");
		$(".glitch_second_line").wrap('<a class="clickout" target="_blank" href="mailto:hello@navied.com?subject=Can I ask you a question" />')
    }
    else if (q.toLowerCase().indexOf("twitter") >= 0) {
		$(".glitch").first().text("you can tweet my creator").attr("data-text","you can tweet my creator");
		$(".glitch").last().text("@nshoush").attr("data-text","@nshoush");
		$(".glitch_second_line").wrap('<a class="clickout" target="_blank" href="https://www.twitter.com/nshoush" />')
    }
    else if (q.toLowerCase().indexOf("born") >= 0) {
		$(".glitch").first().text("I was born in").attr("data-text","I was born in");
		$(".glitch").last().text("SublimeText, NY").attr("data-text","SublimeText,NY");
    }
    else if (q.toLowerCase().indexOf("color") >= 0) {
		$(".glitch").first().text("my creator's favorite color is").attr("data-text","my creator's favorite color is");
		$(".glitch").last().text("#0000FF").attr("data-text","#0000FF");
    }
    else if (q.toLowerCase().indexOf("linkedin") >= 0) {
		$(".glitch").first().text("my creator's linkedin is").attr("data-text","my creator's linkedin is");
		$(".glitch").last().text("linkedin.com/in/nshoush").attr("data-text","linkedin.com/in/nshoush");
		$(".glitch_second_line").wrap('<a class="clickout" target="_blank" href="https://www.linkedin.com/in/nshoush" />')
    }
    else if (q.toLowerCase().indexOf("how are you") >= 0) {
		$(".glitch").first().text("I am doing").attr("data-text","I am doing");
		$(".glitch").last().text("good, i think?").attr("data-text","good, i think?");
    }
    else if (q.toLowerCase().indexOf("color?") >= 0) {
		$(".glitch").first().text("I was created to serve").attr("data-text","I was created to serve");
		$(".glitch").last().text("my creator").attr("data-text","my creator");
    }
    else{
    	$(".glitch").first().text("I didn't get that").attr("data-text","I didn't get that");
		$(".glitch").last().text("but i am always learning.").attr("data-text","but i am always learning.");
    }
}


function resetLinks() {
  if ($(".clickout").length > 0 ){
  	 $(".glitch").last().unwrap();
  }
}

// * iOS zooms on form element focus. This script prevents that behavior.
// * <meta name="viewport" content="width=device-width,initial-scale=1">
//      If you dynamically add a maximum-scale where no default exists,
//      the value persists on the page even after removed from viewport.content.
//      So if no maximum-scale is set, adds maximum-scale=10 on blur.
//      If maximum-scale is set, reuses that original value.
// * <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=2.0,maximum-scale=1.0">
//      second maximum-scale declaration will take precedence.
// * Will respect original maximum-scale, if set.
// * Works with int or float scale values.
function cancelZoom()
{
    var d = document,
        viewport,
        content,
        maxScale = ',maximum-scale=',
        maxScaleRegex = /,*maximum\-scale\=\d*\.*\d*/;

    // this should be a focusable DOM Element
    if(!this.addEventListener || !d.querySelector) {
        return;
    }

    viewport = d.querySelector('meta[name="viewport"]');
    content = viewport.content;

    function changeViewport(event)
    {
        // http://nerd.vasilis.nl/prevent-ios-from-zooming-onfocus/
        viewport.content = content + (event.type == 'blur' ? (content.match(maxScaleRegex, '') ? '' : maxScale + 10) : maxScale + 1);
    }

    // We could use DOMFocusIn here, but it's deprecated.
    this.addEventListener('focus', changeViewport, true);
    this.addEventListener('blur', changeViewport, false);
}

// jQuery-plugin
(function($)
{
    $.fn.cancelZoom = function()
    {
        return this.each(cancelZoom);
    };

    // Usage:
    $('input:text,select,textarea').cancelZoom();
})(jQuery);
