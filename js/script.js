$(function(){
  
  $('#designing').css('border-bottom', '3px solid #faa61a');
  $('#gallery').css('border-bottom', '3px solid #faa61a');
  
  $('.big-button').on('click', function(e){
    if(e.target.id == 'designing'){
      $('#designing').css('border-bottom', '3px solid #faa61a');
      $('#construction').css('border-bottom', '');
      $('#consultancy').css('border-bottom', '');
      $('.construction').hide();
      $('.consultancy').hide();
      $('.designing').addClass('animated fadeInRightBig');
      $('.designing').show();
    }
    else if(e.target.id == 'construction'){
      $('#construction').css('border-bottom', '3px solid #faa61a');
      $('#designing').css('border-bottom', '');
      $('#consultancy').css('border-bottom', '');
      $('.designing').hide();
      $('.consultancy').hide();
      $('.construction').addClass('animated fadeInRightBig');
      $('.construction').show();
    }
    else if(e.target.id == 'consultancy'){
      $('#consultancy').css('border-bottom', '3px solid #faa61a');
      $('#construction').css('border-bottom', '');
      $('#designing').css('border-bottom', '');
      $('.construction').hide();
      $('.designing').hide();
      $('.consultancy').addClass('animated fadeInRightBig');
      $('.consultancy').show();
    }
    else if(e.target.id == 'gallery'){
      $('#gallery').css('border-bottom', '3px solid #faa61a');
      $('#in-progress').css('border-bottom', '');
      $('#completed').css('border-bottom', '');
      $('.in-progress').hide();
      $('.completed').hide();
      $('.gallery').addClass('animated fadeInRightBig');
      $('.gallery').show();
    }
    else if(e.target.id == 'in-progress'){
      $('#in-progress').css('border-bottom', '3px solid #faa61a');
      $('#gallery').css('border-bottom', '');
      $('#completed').css('border-bottom', '');
      $('.gallery').hide();
      $('.completed').hide();
      $('.in-progress').addClass('animated fadeInRightBig');
      $('.in-progress').show();
    }
    else if(e.target.id == 'completed'){
      $('#completed').css('border-bottom', '3px solid #faa61a');
      $('#in-progress').css('border-bottom', '');
      $('#gallery').css('border-bottom', '');
      $('.in-progress').hide();
      $('.gallery').hide();
      $('.completed').addClass('animated fadeInRightBig');
      $('.completed').show();
    }
  });
  
  
});