$(document).on("scroll",function(){var b=$(document).scrollTop();var e=b+$(window).height();var c=$("section");for(var d=0;d<c.length;d++){var a=c[d];if($(a).position().top<e){$(a).addClass("visible")}else{$(a).removeClass("visible")}}}).trigger("scroll");