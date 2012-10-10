# jquery-jpegmask-plugin


## Description

Mask JPEG with HTML5 Canvas
Browser : Chrome23+ (Win/Mac) Firefox14+ (Win/Mac) Opera12+ (Win/Mac) Safari6+(Mac) IE9+(Win) IE8(Win)
If you can understand japanese, see also [my blog post](http://mgzl.jp/jquery-jpeg-mask-plugin/).

## Useage
You need 3 images.
1.	JPEG image
	image.jpg
2.	Mask iamge (gray scale PNG)
	image_mask.png
3.	PNG image (for IE8)
	image.png

### HTML
	<img src="image.jpeg" class="maskJpeg" />

### JavaScript
	$(function(){
		$('img.maskJpeg').mgJpegmask();
	});
	
If you want to change mask image suffix (default "_mask") :
	$(function(){
		$('img.maskJpeg').mgJpegmask('_suffix');
	});

Also check psd file in "demo" directory