console.log('cha cha slide')

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

console.log('elements needed for slider')

nextButton.addEventListener("click", (click) => {
	const slideWidth = slide.clientWidth;
		slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft -= slideWidth;
});

console.log('Click through slides!');

let lisa_count = 0;
let rld_count = 0;

$(document).ready(function(){
	// $('#intro').append('Hello');

	let lisa_images = [
		'LisaRoach_1min.jpg',
		'LisaRoach_2min.jpg',
		'LisaRoach_5min.jpg',
		'LisaRoach_10min.jpg',
		'LisaRoach_nolimit.jpg'];

	//detect clicking on a drawing by lisa
	$('#lisa').click(function(){
		//then I want to replace the current image with the next image
		
		//I need to know the current image
		console.log('clicked lisa!');
		//I need to know what the next image is
		// lisa_images.length is the number of items in lisa_images
		// which is, 5. however, valid indexes 0,1,2,3,4
		if( lisa_count < lisa_images.length - 1 ){
			lisa_count++; //shorthand for lisa_count = lisa_count+1;			
		}else{
			lisa_count = 0;
		}
		console.log(lisa_count);

		//get our next image filename;
		let next_img = lisa_images[lisa_count];
		console.log(next_img);
		//replace the src attribute with the new filename
		$(this).attr('src', 'drawings/lisa/'+next_img );
		
	});


	let rld_images = [
	'RLD_CordovaWeb_Sketch_1min.jpg',
	'RLD_CordovaWeb_Sketch_2min.jpg',
	'RLD_CordovaWeb_Sketch_5min.jpg',
	'RLD_CordovaWeb_Sketch_10min.jpg',
	'RLD_CordovaWeb_Sketch_nolimit.jpg'];

	//detect clicking on a drawing by lisa
	$('#rld').click(function(){
		//then I want to replace the current image with the next image
		
		//I need to know the current image
		console.log('clicked rld!');
		//I need to know what the next image is
		// rld_images.length is the number of items in lisa_images
		// which is, 5. however, valid indexes 0,1,2,3,4
		if( rld_count < rld_images.length - 1 ){
			rld_count++; //shorthand for rld_count = rld_count+1;			
		}else{
			rld_count = 0;
		}
		console.log(rld_count);

		//get our next image filename;
		let next_img = rld_images[rld_count];
		console.log(next_img);
		//replace the src attribute with the new filename
		$(this).attr('src', 'drawings/rld/'+next_img );
		
	});




	
});
