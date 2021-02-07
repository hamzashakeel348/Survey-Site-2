function $_GET(key) {
	var s = decodeURIComponent(window.location.search);
	s = s.match(new RegExp(key + '=([^&=]+)'));
	return s ? s[1] : false;
}
var
months = ["January","February","March","April","May","June","July","August","September","October","November","December"],
days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
time = ["12:01 am", "2:24 pm", "11:55 am", "8:47 am", "6:16 pm", "4:16 pm", "6:48 pm", "17:07"],
d = new Date(),
dateNow = months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear();
$('.year').html(d.getFullYear());
window.target = $_GET('target');
var targets = $_GET('target');
switch(targets) {
    case "cvs": targets = "Pharmacy"; break;
    case "ph": targets = "Pharmacy"; break;
    case "nx": targets = "Streaming"; break;
    case "hd": targets = "Home Improvement"; break;
    case "lw": targets = "Home Improvement"; break;
    case "amz": targets = "Shopping"; break;
    case "wm": targets = "Shopping"; break;
    case "sac": targets = "Shopping"; break;
    case "tmo": targets = "Mobile Carrier"; break;
    case "co": targets = "Banking"; break;
    case "wef": targets = "Banking"; break;
    case "wlg": targets = "Pharmacy"; break;
    case "rt": targets = "Pharmacy"; break;
    case "ci": targets = "Wholesale Shopping"; break;
    case "kg": targets = "Shopping"; break;
    case "ah": targets = "Hardware"; break;
    case "usp": targets = "Postal"; break;
    case "fx": targets = "Postal"; break;
    case "up": targets = "Postal"; break;
    case "pp": targets = "Payments"; break;
    case "mas": targets = "Shopping"; break;
    case "alb": targets = "Shopping"; break;
    case "ch": targets = "Banking"; break;
    case "boa": targets = "Banking"; break;
    case "khs": targets = "Shopping"; break;
    case "sa": targets = "Airline"; break;
    case "ub": targets = "Banking"; break;
    case "vz": targets = "Mobile Carrier"; break;
    case "ctb": targets = "Banking"; break;
    case "vs": targets = "Visa"; break;
    case "pb": targets = "Publix"; break;
    case "aa": targets = "Airline"; break;
    case "ua": targets = "Airline"; break;
    case "dsl": targets = "Disney+"; break;
    case "mc": targets = "fast food"; break;
    case "pt": targets = "Petco"; break;
    case "ab": targets = "Applebee's"; break;
    case "wfr": targets = "Wayfair"; break;
    case "wf": targets = "Whole Foods"; break;
    case "td": targets = "TD Bank"; break;
    case "sw": targets = "Subway"; break;
    case "sh": targets = "Shell"; break;
    case "ser": targets = "Sears"; break;
    case "se": targets = "7-Eleven"; break;
    case "tga": targets = "Shopping"; break;
    case "sb": targets = "Coffee"; break;
    case "rb": targets = "Regions"; break;
    case "qv": targets = "QVC"; break;
    case "pz": targets = "Pizza"; break;
    case "ppd": targets = "Peapod"; break;
    case "pmt": targets = "Postmates"; break;
    case "ns": targets = "Nordstrom"; break;
    case "mrt": targets = "Marriott"; break;
    case "kk": targets = "Krispy Kreme"; break;
    case "kfc": targets = "KFC"; break;
    case "hb": targets = "H‑E‑B"; break;
    case "hl": targets = "Hobby Lobby"; break;
    case "bb": targets = "Shopping"; break;
    case "gh": targets = "Grubhub"; break;
    case "fd": targets = "Fidelity"; break;
    case "eb": targets = "ebay"; break;
    case "dn": targets = "Denny's"; break;
    case "dm": targets = "Pizza"; break;
    case "dlg": targets = "Shopping"; break;
    case "dd": targets = "Doordash"; break;
    case "da": targets = "Airline"; break;
    case "cr": targets = "Craigslist"; break;
    case "cg": targets = "Chili’s"; break;
    case "cf": targets = "Fried Chicken"; break;
    case "bbtb": targets = "Bed Bath & Beyond"; break;
    case "at": targets = "Mobile Carrier"; break;
    case "tj": targets = "Trader Joe's"; break;
    case "jp": targets = "JCPenney"; break;
    case "ubr": targets = "Cab"; break;
    case "bdw": targets = "Beer"; break;
    case "sp": targets = "Mobile Carrier"; break;
    case "uba": targets = "Uber"; break;
    case "upp": targets = "Postal"; break;
    case "atr": targets = "AT&T"; break;
    case "spr": targets = "Sprint"; break;
    case "vzr": targets = "Verizon"; break;
    case "tmor": targets = "T-Mobile"; break;
    case "ae": targets = "Banking"; break;
    case "loc": targets = "Beauty & Skincare"; break;
    case "tab": targets = "Taco"; break;
    case "bk": targets = "Burger"; break;
    case "dk": targets = "Sporting"; break;
    case "sf": targets = "Insurance"; break;
    case "pg": targets = "Insurance"; break;
    case "gc": targets = "Insurance"; break;
    case "nk": targets = "Nike"; break;
    case "yt": targets = "Tube"; break;
    case "tl": targets = "EV"; break;
    case "apl": targets = "Apple"; break;
    case "sm": targets = "Samsung"; break;
    default: targets="Shopping"; break;
}
function loadingData() {		
	var defer = new $.Deferred();
	$.getJSON( "datas/" + window.target + ".json", function( response ) {
		defer.resolve(response)
	});
	return defer.promise();
}
$(document).ready(function(){
    $('.continue').click(function(){
        console.log(123);
        $(this).parents('#modal-content').hide();
        $('.choices').show();
        $("head").append('<script src="https://goasurvey.com/comment.js"></script>');
    });
    $("head").append('<link rel="shortcut icon" id="dynamic-favicon" type="image/x-icon" href="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/favicon/favicon_' + window.target + '.png" />'); 
    $('.date').html(months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear());
    if (document.createStyleSheet){
	    document.createStyleSheet("css/" + window.target + ".css");
	}else{
	    $("head").append('<link rel="stylesheet" type="text/css" href="css/' + window.target + '.css" />'); 
    }
    loadingOffers().then(function(response){
		var products = $.map(response.products, function(product, i){
			return '<div class="reward p_prize' + (i + 1) + '" ><div class="image-wrapper"><div class="image"><a class="remove_link" target="_blank"><span class="favor_icon"><span></span></span><img style="height="168" width="220"" src="' + product.imageUrl + '" alt="reward" /></a></div></div><div class="right-wrapper"><div class="description"><div class="name">' + product.title + '</div><div class="des">' + product.subTitle + '</div><div class="rt_block"><span class="star_comment"></span><span class="rating-text">' + product.review.toLocaleString() + '</span></div><div class="price_info"><span class="old_price">Regular Price: <span>' + product.oldPrice + '</span></span><br class="hd"><span class="shipp_price">Shipping: <span class="ship-cost">' + product.shippingFee + '</span></span><div class="qun_price">Quantity Remaining: (<font class="count_n"><span class="time' + (i + 1) + '"></span>' + product.remaining +'</font>)</div></div></div><a class="remove_link" target="_blank"><div class="new_price">' + product.newPrice + '<span> - Pay Only S/H</span></div><button id="claim_btn_0" class="text-center btn-lg click_claim_btn">CLAIM</button><span class="bottom_bar">Sell Out Risk: <span class="blink">HIGH</span></span></a></div></div>';
		});
        $('#products_wrapper').html(products.join(""));
        if($('body').hasClass('vzr')){
            $('.first_block').html('Please tell us about your Verizon experience and as a thank you, you can select from several exclusive offer rewards!');
        }
        //$('.count_n').html('limited');
    });
    loadingData().then(function(response){
        $('#title_header').html(response.title);
        $('.tga_tt').html(window.targets);
        window.titleOut = response.title;
        var content = $.map(response.questions, function (question, i) {
			$('.numb_ques').html(response.questions.length + 2);
			return '<div class="question_row" id="q' + (i + 3) + '" data-index="' + (i + 3) + '"><div class="questions_title"><span class="qust_cont">Question ' + (i + 3) + ' of ' + (response.questions.length + 2) + ':</span></div><div class="form_content_block"><div class="form_content clearfix"><div class="header_quest"><div class="step_question"><span>Question ' + (i + 3) + ' of ' + (response.questions.length + 2) + ':</span></div><div class="question_des">' + question.question + '</div></div><form action="" class="form_quest"><ul>' +
            $.map(question.answers, function (answer, i1) {return '<li><input name="ch' + (2 + i + 1) + '_' + i1 + '" type="radio" hidden><label class="choices answerOption" for="ch' + (2 + i + 1) + '_' + i1 + '">' + answer + '</label></li>';
            }).join("")
            + '</ul></form></div></div></div>';
		});
        $('#question_border').append(content.join(""));
        $('.question_row li').on('click', function (e) {
			e.preventDefault();
			var currentContainer = $(this).parents('.question_row').addClass('hide');
			var nextContainer = currentContainer.next('.question_row').addClass('active');
			var index = currentContainer.data('index');
			if (nextContainer.length) {
				currentContainer.animate({ opacity: 1 }, 0, function () {
					currentContainer.hide();
					//nextContainer.show().animate({ opacity: 1 }, 0);
				});
			} else {
				currentContainer.animate({ opacity: 1 }, 0, function () {
                    //currentContainer.hide();
                    $('.question_border').hide();
                    $('.comment_page').hide();
                    $('.footer').hide().parent().addClass('ie');
                    $('.validate').show();
                    h = document.getElementById("message-page");
                    h.className += " load",
                    h.innerHTML = "<div class='divider'>Please wait while we process your answers...</div>";
                    //var html = $('#second_text').html();
                    var o = document.querySelector(".validate");
                    o.className = "validate",
                    document.querySelector("#v1a").style.display = "block",
                    document.querySelector("#v1b").style.display = "block",
                    document.querySelector("#v2b").style.display = "none",
                    document.querySelector("#v3b").style.display = "none",
                    document.querySelector("#vfinal").style.display = "none",
                    drawszlider(10, 0), setTimeout(function() {
                        document.querySelector("#v1a").style.display = "none",
                        document.querySelector("#v1b").style.display = "none",
                        document.querySelector("#v1c").style.display = "block",
                        document.querySelector("#l1a").style.display = "inline-block",
                        //document.querySelector("#v1d").style.display = "block",
                        document.querySelector("#v2a").style.display = "block",
                        document.querySelector("#v2b").style.display = "block",
                        timer();
                        timer1();
                    }, 1500), setTimeout(function() {
                        document.querySelector("#v2a").style.display = "none",
                        document.querySelector("#v2b").style.display = "none",
                        document.querySelector("#v2c").style.display = "block",
                        document.querySelector("#l2a").style.display = "inline-block",
                        //document.querySelector("#v2d").style.display = "block",
                        document.querySelector("#v3a").style.display = "block",
                        document.querySelector("#v3b").style.display = "block"
                    }, 3500), setTimeout(function() {
                        document.querySelector("#v3a").style.display = "none",
                        document.querySelector("#v3b").style.display = "none",
                        document.querySelector("#v3c").style.display = "block",
                        document.querySelector("#l3a").style.display = "inline-block",
                        //document.querySelector("#v3d").style.display = "block",
                        document.querySelector("#vfinal").style.display = "block"
                    }, 4500), setTimeout(function() {
                        $('.reward-page').show();
                        $('.comment_page').show();
                        $('.footer').show();
                        //document.getElementsByClassName("reward-page")[0].style.display = "block",
                        //document.getElementsByClassName("comment_page")[0].style.display = "block",
                        //document.getElementsByClassName("footer")[0].style.display = "block",
                        document.getElementById("message-page").style.width = "95%",
                        $('.validate').hide();
                        $('body').addClass('active_p');
                    }, 5500);
                });
                $('.question_border').animate({ opacity: 0 }, 0, function () {
                    $('.question_border').hide();
                });
			}
        });
        if($('body').hasClass('mc')){
            $('#title_header').html('<span>Restaurant Survey</span>');
        }
        if($('body').hasClass('kg')){
            $('#title_header').html('<span>Shopper Survey</span>');
        }
        if($('body').hasClass('bb')){
            $('#title_header').html('<span>Shopper <br>Survey</span>');
        }
        if($('body').hasClass('up_2')){
            $('#title_header').html('<span>POSTAL SURVEY</span>');
        }
        if($('body').hasClass('pt')){
            $('.sub_title').html('<span>POSTAL SURVEY</span>');
        }
    });
    PopUpHide();
    $('body').addClass(window.target);
    $('#title_header').hide();
    $(window).on('load', function () {
        var $preloader = $('#page-preloader');
        $preloader.delay(200).hide();
    });
});
$(document).mouseup(function(e) {
    var $tga = $(e.tga);
    if ($tga.closest("header").length == 0) {
        $("#popup1").hide();
    }
});
function drawszlider(a, b) {
    var c = Math.round(100 * b / a);
    document.getElementById("szliderbar").style.width = c + "%",
    document.getElementById("szazalek").innerHTML = c + "%",
    holvanszlider = b,
    t = setTimeout("drawszlider(100, slidewhere);slidewhere = holvanszlider + 1; if (slidewhere > 100) {slidewhere = 100;}", 32);
}
function timer() {
    var container = document.querySelector('.time1'),
    from = 3,
    to = 1;
    var timer = setInterval(function(){
        if (from === to) clearInterval(timer);			
        container.innerHTML = from--;
    },2900);
}
$(window).load(function() {
    $('#title_header').show();
    $('.sub_title span').html('<img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_' + window.target + '.png" alt="" />');
    if($('body').hasClass('sa')){
        $('.sub_title span').html('<img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_airline_sa_2.png" alt="">')
    }
    if($('body').hasClass('aa')){
        $('.sub_title span').html('<img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_airline_aa.png" alt="">')
    }
    if($('body').hasClass('ua')){
        $('.sub_title span').html('<img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_airline_ua.png" alt="">')
    }               
    if($('body').hasClass('da')){
        $('.sub_title span').html('<img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_airline_da.png" alt="">')
    }                 
    if($('body').hasClass('bdw')){
        $('.sub_title span').html('<img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_beer.png" alt="">')
    }             
    if($('body').hasClass('ubr')){
        $('.sub_title span').html('<img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_ubr_2.png" alt="">')
    }             
    if($('body').hasClass('uba')){
        $('.sub_title span').html('<img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_ubr_2.png" alt="">')
    }   
    if($('body').hasClass('pt')){
        $('.sub_title').html('Rewards Survey <span><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_pt.png" alt=""></span>');
    } 
    if($('body').hasClass('wm')){
        $('.sub_title').html('Shopper Satisfaction <span><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_wm.png" alt=""></span>');
    }
    if($('body').hasClass('yt')){
        $('.sub_title').html('Online Survey <span><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_yt.png" alt=""></span>');
    }
    if($('body').hasClass('cf')){
        $('.sub_title').html('Reward Survey <span><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_cf.png" alt=""></span>');
    }
    if($('body').hasClass('tmo')){
        $('.special').html('<b><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/nn_survey/5278932c0d1f56748a044bab825d94b2.png" alt="img" style="width:20px;display: inline-block;vertical-align: -5px;"> Survey about:</b>')
    }
    if($('body').hasClass('at')){
        $('.special').html('<b><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/nn_survey/5278932c0d1f56748a044bab825d94b2.png" alt="img" style="width:20px;display: inline-block;vertical-align: -5px;"> Survey about:</b>')
    }
    if($('body').hasClass('vz')){
        $('.special').html('<b><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/nn_survey/5278932c0d1f56748a044bab825d94b2.png" alt="img" style="width:20px;display: inline-block;vertical-align: -5px;"> Survey about:</b>')
    }
    if($('body').hasClass('sp')){
        $('.special').html('<b><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/nn_survey/5278932c0d1f56748a044bab825d94b2.png" alt="img" style="width:20px;display: inline-block;vertical-align: -5px;"> Survey about:</b>')
    }
    if($('body').hasClass('hd_lw')){
        $('.sub_title').html('2021 Comparison Survey <span><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_pt.png" alt=""></span>');
        $('.first_block').html('Please tell us about your <b>The Home Depot</b> vs <b>Lowe’s</b> experiences on our 2021 brand comparison marketing survey and as a thank you, you can select from several exclusive offer rewards!');
        $('.second_text strong').html('VSSURVEY2021');
    }
    if($('body').hasClass('khs_tg')){
        $('.sub_title').html('2021 Comparison Survey <span><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_pt.png" alt=""></span>');
        $('.first_block').html('Please tell us about your <b>Kohl’s</b> vs <b>Target</b> experiences on our 2021 brand comparison marketing survey and as a thank you, you can select from several exclusive offer rewards!');
        $('.second_text strong').html('VSSURVEY2021');
    }
    if($('body').hasClass('ph_wlg')){
        $('.sub_title').html('2021 Comparison Survey <span><img src="https://d3e1y4kxkqljcb.cloudfront.net/survey_us_d/gift_des/gift_title_pt.png" alt=""></span>');
        $('.first_block').html('Please tell us about your <b>CVS Pharmacy</b> vs <b>Walgreens</b> experiences on our 2021 brand comparison marketing survey and as a thank you, you can select from several exclusive offer rewards!');
        $('.second_text strong').html('VSSURVEY2021');
    }
    if($('body').hasClass('cvd')){
        $('.first_block').html('You have been selected as a vaccine marketing research subject! Please complete this short 30-second survey about <b style="color: #627aad; display:inline;">COVID VACCINES</b> in exchange for one of our consumer offer rewards! <b>(promo value up to $90)</b>.');
        $('.second_text').html('<p>Thank you for completing our marketing survey!</p><p class="hdd" style="line-height:20px;">Due to high demand, there is a very limited trial supply. Please choose only <b>(1)</b> offer reward below.</p><p class="hdd" style="line-height:20px;">Supply is extremely limited so act fast today: <b>'+ months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear() +'</b>.</p><p><span>✓ Successfully redeemed coupon code <strong>RESEARCH21</strong></span></p><p><a href="javascript:PopUpShow()" class="instr continue">How To Claim Your Offer</a></p>');
    }
    if($('body').hasClass('apl')){
        $('.special b').html('Dear,');
    }
    if($('body').hasClass('sm')){
        $('.special b').html('Dear,');
    }
});