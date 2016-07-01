//Variables for Contact Form
var form = $('#contact-form'),
	formMessages = $('#form-messages');


$(document).ready(function() { 
	//Contact Form
	$(form).submit(function(event) {
		//Stop Submission
		event.preventDefault();
		//Serialize Form Data
		var formContent = $(this).serialize();
		//Submit form using AJAX
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formContent
		})
		.done(function(response) {
			//Assign message div success class
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			//Set the text of the message
			$(formMessages).text(response);
			//Clear the form
			$('#name', '#email', '#message').val('');
		})
		.fail(function(response) {
			//Assign error class
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			//Set message text
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});

});