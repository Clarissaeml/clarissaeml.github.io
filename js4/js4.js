console.log("hello world");

var colors = ['red'
			'green'
			'blue'
			];

var objects = ['assets/img/bunny.jpg',
				'assets/img/cat.jpg',
				'assets/img/dog.jpg',
				'assets/img/sloth.jpg',
				'assets/img/circle.png',
				'assets/img/square.png',
				'assets/img/triangle/png',
				'Meow',
				'...',
				'Woof',
				'Meep',
				];

$('.botton').click(function() {
	var random_object_number = Math.floor(Math.random() * objects.length);
	var objects_to_use		 = objects[random_objects_number];


	var random_colors_number = Math.floor(Math.random() * colors.length);
	var colors_to_use		= objects[random_object_number];	

var result = '';

if (random_object_number < 7) {

result = '<div class="object"><img src="' + objects_to_use + '" /></div>';
} else {
result ='<div class="object" ' + colors_to_use + '">' + objects_to_use + '</div>';
}

$('.content').prepend(result);
});