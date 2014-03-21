 /**
  *	Author:	Konjoh Elvis
  * Website:	http://selabielvis.blogspot.com/2014/03/transformer-un-tableau-en-plusieurs-div.html?view=sidebar
	
  */ 
  
  (function($) {
    $.fn.TableToDivReplace = function(options) {
		
		return this.each(function() {
			// counts total number of td in a head so that we can can use it for label extraction
			if($(this).attr("id")=="" || $(this).attr("id")==undefined)
				var idDiv="div_"+Math.floor((Math.random()*100000)+500)+"_"+Math.floor((Math.random()*100000)+500);
			else
				var idDiv=$(this).attr("id");
			var head_col_count =  $(this).find('thead td').size();
			//alert(idDiv);
			// loop which replaces td
			for ( i=0; i <= head_col_count; i++ )  {
				// head column label extraction
				var head_col_label = $(this).find('thead td:nth-child('+ i +')').text();
				// replaces td with <div class="column" data-label="label">
				$(this).find('tr td:nth-child('+ i +')').replaceWith(
					function(){
						return $('<div class="column" data-label="'+ head_col_label +'">').append($(this).contents());
					}
				);
			}	
			// replaces table with <div class="table">
			$(this).replaceWith(
				function(){
					return $('<div id="'+idDiv+'" class="table">').append($(this).contents());
				}
			);	
			// replaces thead with <div class="table-head">
			$(this).find('thead').replaceWith(
				function(){
					return $('<div class="table-head">').append($(this).contents());
				}
			);	
			// replaces tr with <div class="row">
			$(this).find('tr').replaceWith(
				function(){
					return $('<div class="row">').append($(this).contents());
				}
			);	
			// replaces th with <div class="column">
			$(this).find('th').replaceWith(
				function(){
					return $('<div class="column">').append($(this).contents());
				}
			);
		});
	};
  })(jQuery);
