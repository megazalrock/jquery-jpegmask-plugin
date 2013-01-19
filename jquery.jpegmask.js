/*global $:true, jQuery:true */
/*
 * JPEG Mask Plugin 1.0.1
 * Author : Otto Kamiya (MegazalRock)
 * License : Dual licensed under the MIT or GPL Version 2 licenses.
 * Browser : Chrome23+ (Win/Mac) Firefox14+ (Win/Mac) Opera12+ (Win/Mac) Safari6+(Mac) IE9+(Win) IE8(Win)
 * Usage : https://github.com/megazalrock/jquery-jpegmask-plugin/blob/master/README.md
 * Histoy : 1.0.1 Bug fix
 * 			1.0 Initial Release
 */
(function(){
	$.fn.extend({
		mgJpegmask:function(maskImageSuffix){
			maskImageSuffix = maskImageSuffix || '_mask';
			$(this).each(function(){
				if(window.CanvasRenderingContext2D){
					var $_img = $(this);
					var jpgImg = $(this)[0];
					$_img.one('load',function(){
						$_img.css('display', 'none');
						var jpegSrc = jpgImg.src;
						
						var maskSrc = jpegSrc.replace(/(.*)\.jpg$/,'$1'+ maskImageSuffix +'.png');
						var maskImg = document.createElement('img');
						maskImg.src = maskSrc;
						
						//$_img.height() and $_img.width() return wrong image size at Chrome 21.0.1180.89 on Mac OX X.
						//In any case, height and width are mandatory in "img" tag.
						var imgSize = {
								h:$_img.attr('height'),
								w:$_img.attr('width')
							};
						
						maskImg.onload = function(){
							var $_canvas = $('<canvas />');
							$_canvas
								.insertAfter($_img);
							var canvas = $_canvas[0];
							canvas.width = imgSize.w;
							canvas.height = imgSize.h;
							
							var maskCtx,jpgCtx,maskImgData,jpgImgData,i = 0,px = imgSize.w * imgSize.h;
							maskCtx = canvas.getContext('2d');
							maskCtx.clearRect(0, 0, imgSize.w,imgSize.h);
							maskCtx.drawImage(maskImg, 0, 0);
							maskImgData = maskCtx.getImageData(0,0,imgSize.w,imgSize.h);
							jpgCtx = canvas.getContext('2d');
							jpgCtx.clearRect(0, 0, imgSize.w,imgSize.h);
							jpgCtx.drawImage(jpgImg, 0, 0);
							jpgImgData = jpgCtx.getImageData(0,0,imgSize.w,imgSize.h);
							
							for(;i < px; i+=1){
								jpgImgData.data[4 * i + 3] = 255 - maskImgData.data[4 * i] ;
							}
							jpgCtx.putImageData(jpgImgData,0,0);
						};
					});
				}else{
					$(this).attr('src',$(this).attr('src').replace(/(.*)\.jpg$/,'$1.png'));
				}
			});
			return this;
		}
	});
})(jQuery);