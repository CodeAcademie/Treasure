
$('li').click(function(){
  var code = decrypt('EQUANUM', 13);
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
    $('.treasure').fadeIn(0000);
    }
 if (enteredLength == 7 && entered !== code)
  {
  $('#wrong').show();
    $('span.results').hide();
    $('#entered').empty();
  }            
});

$('#hint').click(function(){
  alert('Vous le possedez');
  $('#hint').hide();
  $('#anotherHint').show();
});

$('#anotherHint').click(function(){
  alert('Ask your phone.');
   $('#hint').show();
  $('#anotherHint').hide();
});


const ASCII_MIN = 65;

function decrypt(str,nb){
  var res ="";
  for (var i = str.length - 1; i >= 0; i--) {
    var asc = str.charCodeAt(i);
    asc = asc + 13 - ASCII_MIN;
    console.log("ASC : "+asc);


    var letter = asc%26 + ASCII_MIN
    console.log("CONV : " + letter)
    res += String.fromCharCode(letter);
  }
  return res;
}
