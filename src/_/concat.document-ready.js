$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("trident")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),e=$(o.attr("href")).eq(0),s=parseInt(o.attr("data-scrollto-diff"))||0,l=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:e.offset().top+s},l),$('[data-scrollto="nav-item"]').removeClass("is--active"),o.parent().addClass("is--active")}),$(document.body).on("click",'[data-scrollto="navbar"].is--open .scrollto',{},function(t){(screenJS.isXS()||screenJS.isSM()||screenJS.isMD())&&(t.preventDefault(),$('[data-scrollto="humb"]').trigger("click"))});
var url=window.location.pathname;$('.aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".aside__nav").closest("body").addClass("is--aside-navbar");
var url=window.location.pathname;$('.cabinet__navbar-nav a[href="'+url+'"]').parent().addClass("is--active"),$(".cabinet__navbar-block").closest("body").addClass("is--aside-cabinet"),$(".cabinet__basket-total-bar").closest("body").addClass("is--basket-bar"),$(".cabinet__delivery-card").on("click",function(t){t.preventDefault(),t.stopPropagation(),$(this).toggleClass("is--active")}),$(".cabinet__delivery-transport").on("click",function(t){$(this).toggleClass("is--active")}),screenJS.isXS()&&$(".cabinet__order-body").removeAttr("id"),$(".cabinet__filter-nav-item.dropdown").on("click",".cabinet__filter-nav-dropdown",function(t){t.preventDefault(),t.stopPropagation()}),$(".cabinet__filter-btn-block").on("click",function(t){$(this).closest(".cabinet__filter-block").toggleClass("open")});
$(".card-item__btn.is--catalog-page").on("click",function(i){$(this).toggleClass("is--active")});

$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),$("[data-validation]").validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1}),$(document.body).on("click",".form__btn-pass",null,function(s){s.preventDefault();var t=$(this);t.hasClass("is--view")&&($(".form__btn-pass.is--view").removeClass("is--active"),$(".form__btn-pass.is--hide").addClass("is--active"),$(".form__control.is--pass").attr("type","text")),t.hasClass("is--hide")&&($(".form__btn-pass.is--hide").removeClass("is--active"),$(".form__btn-pass.is--view").addClass("is--active"),$(".form__control.is--pass").attr("type","password"))}),$(".form__switch").on("click",function(s){$(this).toggleClass("is--active")});
$("img").addClass("img-responsive");
var humb=$(".navbar__hamburger-card"),toggle_navbar=humb.data("toggle-nav"),toggle_body=humb.data("body"),toggle_collapse=humb.data("collapse-nav");humb.on("click",function(){$(toggle_body).toggleClass("is--open-navbar"),$(toggle_navbar).toggleClass("is--open"),$(toggle_collapse).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__block").length&&($(toggle_body).removeClass("is--open-navbar"),$(toggle_navbar).removeClass("is--open"),$(toggle_collapse).removeClass("is--open"),humb.removeClass("is--active"))});var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(a){$(".azbn__search-input").focus()});
var from,to,$range=$(".js-range-slider"),$from=$(".js-from"),$to=$(".js-to"),updateValues=function(){$from.prop("value",from),$to.prop("value",to)},updateRange=function(){range.update({from:from,to:to})};$range.ionRangeSlider({step:1,onChange:function(o){from=o.from,to=o.to,updateValues()},onFinish:function(o){from=o.from,to=o.to,updateValues()}}),$from.on("change",function(){(from=+$(this).prop("value"))<min&&(from=min),to<from&&(from=to),updateValues(),updateRange()}),$to.on("change",function(){(to=+$(this).prop("value"))>max&&(to=max),to<from&&(to=from),updateValues(),updateRange()});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var t=$(this),a=$(t.attr("href")).eq(0),o=parseInt(t.attr("data-scrollto-diff"))||0,r=parseInt(t.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:a.offset().top+o},r),$(".navbar__nav .navbar__nav-item").removeClass("is--active"),t.parent().addClass("is--active")}),$(document.body).on("click",".navbar__collapse.is--open .navbar__nav-link.scrollto",{},function(e){(screenJS.isXS()||screenJS.isSM()||screenJS.isMD())&&(e.preventDefault(),$(".navbar__hamburger-btn").trigger("click"))});
"use strict";$(function(){var s=$('[data-slider-slick="slick-header"]'),i=$('[data-slider-slick="slick-gallery"]'),e=$('[data-slider-slick="slick-index-catalog"]'),l=$('[data-slider-slick="slick-catalog"]'),o=$('[data-slider-slick="slick-catalog-view"]'),r=$('[data-slider-slick="slick-catalog-nav"]'),t="/amadeus",a='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span><svg class="icon-svg icon-icon-prev" role="img"><use xlink:href="'+t+'/img/svg/sprite.svg#icon-prev"></use></svg></button>',n='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span><svg class="icon-svg icon-icon-next" role="img"><use xlink:href="'+t+'/img/svg/sprite.svg#icon-next"></use></svg></button>';$(".slick-cloned .content-block__preview").removeAttr("data-fancybox"),s.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:4e3,prevArrow:a,nextArrow:n,fade:!0}),e.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!1,infinite:!0,prevArrow:a,nextArrow:n,responsive:[{breakpoint:1025,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:565,settings:{slidesToShow:1,slidesToScroll:1}}]});var c=$(".tabs__link");c.on("click",function(){var s=$(this),i=s.data("filter");e.slick("slickUnfilter"),"new"==i?(e.slick("slickFilter",".is--new"),c.parent().removeClass("active"),s.parent().addClass("active")):"hit"==i?(e.slick("slickFilter",".is--hit"),c.parent().removeClass("active"),s.parent().addClass("active")):"discounts"==i&&(e.slick("slickFilter",".is--discounts"),c.parent().removeClass("active"),s.parent().addClass("active"))}),e.slick("slickFilter",".is--new"),o.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!1,infinite:!0,prevArrow:a,nextArrow:n,responsive:[{breakpoint:1025,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:565,settings:{slidesToShow:1,slidesToScroll:1}}]}),i.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!0,infinite:!0,prevArrow:a,nextArrow:n,responsive:[{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1}}]}),l.slick({slidesToShow:1,slidesToScroll:1,arrows:!0,prevArrow:a,nextArrow:n,fade:!0,asNavFor:r}),r.slick({slidesToShow:5,slidesToScroll:1,arrows:!1,dots:!1,asNavFor:l,focusOnSelect:!0})});
$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>');
