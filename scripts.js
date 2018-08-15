$(function(){
	var dd = $('dd');
	var dt = $('dt');
	dd.hide();
	dt.css('cursor','pointer');
	dt.click(function(){		
		dd.hide();
		$(this).next().show();
		// $('+dd',this).show();
		dt.css('cursor','pointer');
		$(this).css('cursor','default');
	});
});
