window.onload = function () {
	/* S 初始化新闻展示第一版  */
	$(".news_class a").removeClass("active");
	$(".news_class a").eq(0).addClass("active");
	
	$(".news_list_ul").css("display", "none");
	$(".news_list_ul").eq(0).css("display", "block");
	
	/* E 初始化新闻展示第一版  */
	// 点击切换事件
	$('.news_class a').each(function(index, value) {
		$(value).tap(function() {
			$('.news_class a').removeClass("active");
			$(this).addClass("active");
			
			$(".news_list_ul").css("display", "none");
			$(".news_list_ul").eq(index).css("display", "block");
		});
	});
	
}
	

