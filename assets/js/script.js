
$('li').click(function(){
  var code = 'EQUANUM';
  var number = $(this).text();
   $('span.results').show();
  $('#wrong').hide();
  $('#entered').append(number);
  var enteredLength = $('#entered').text().length;
  var entered = $('#entered').text();
  if (enteredLength == 7 && entered === code) {
     $('#entered').empty();
     $('.keypad').delay( 400 ).fadeOut(0);
      $('.front').addClass('open').animate({  borderSpacing: -180 }, {
    step: function(now,fx) {
      $(this).css('transform','rotateY('+ now +'deg)');         
    },
    duration:1000},'linear');
     $('span.results').hide();
     $('#right').show();
    $('#hint,#anotherhint').hide();
    $('.treasure').fadeIn(2000);
    }
 if (enteredLength == 7 && entered !== code)
  {
  $('#wrong').show();
    $('span.results').hide();
    $('#entered').empty();
  }            
});

$('#hint').click(function(){
  alert('I\'\ll take "Things You Find in a Safe" for 400, Alex.');
  $('#hint').hide();
  $('#anotherHint').show();
});

$('#anotherHint').click(function(){
  alert('Ask your phone.');
   $('#hint').show();
  $('#anotherHint').hide();
});
