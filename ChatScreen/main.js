$(document).ready(function(){
 $("#input").keypress(function(event) {
	if(event.which === 13) {
		
		var message = $(this).val();
		
		var currentdate = new Date();        
      
        $(".messages").append(`<div class="me">
			<p class="minute right"> ${currentdate.getHours() + ":" 
+ currentdate.getMinutes() } <span class="mee"> ME </span> </p>
			<h4 class="right"> ${message} </h4>
		</div>`);

		$(this).val("");
        
	}
});





	
for(var i=0; i<messages.length ; i++) {
var message= messages[i];
var messageTemplate;
	if(i % 2 === 0) {
		 messageTemplate = `<div class="me">
			<p class="minute right"> ${message.time} <span class="mee">${message.by} </span> </p>
			<h4 class="right"> ${message.text} </h4>
		</div>`;
	}
	else {
		 messageTemplate = `<div class="jigs">
			<p class ="minute left"> ${message.time} <span class="jigss">${message.by} </span> </p>
			<h4 class="left"> ${message.text} </h4>
		</div>`;
	}


        
	/* messagesme.forEach(function(message){
		messagesjigs.forEach(function(message1) {
		var messageTemplate = `<div class="me">
			<p class="minute right"> ${message.time} <span class="mee">${message.by} </span> </p>
			<h4 class="right"> ${message.text} </h4>
		</div>`;
		var messageTemplate1 = `<div class="jigs">
			<p class="minute left"> ${message1.time} <span class="jigss">${message1.by} </span> </p>
			<h4 class="left"> ${message1.text} </h4>
		</div>`; 
		*/
				

		$('.messages').append(messageTemplate);
		
		
	}

});
var messages = [{text: 'Hi', time: '1pm', by: 'me'}, 
	{text: 'How are you', time: '2pm', by: 'Jigs'}, 
	{text: 'Me too', time: '2:30pm', by: 'me'}, 
	{text: '7', time: '2:30pm', by: 'me'}]















	

