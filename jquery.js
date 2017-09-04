$( document ).ready(function() {
$('.juggling').on('mouseenter', function() {
      $(this).removeClass('description');
  });
  $('.juggling').on('mouseleave', function() {
      $(this).addClass('description');
  });
  $('.taming').on('mouseenter', function() {
      $(this).removeClass('description');
  });
  $('.taming').on('mouseleave', function() {
      $(this).addClass('description');
  });
  $('.flying').on('mouseenter', function() {
      $(this).removeClass('description');
  });
  $('.flying').on('mouseleave', function() {
      $(this).addClass('description');
  });
  });