<<<<<<< HEAD
=======
/* jshint esversion: 6 */

var id;

>>>>>>> d3750563bb0e0eaf2ed4945b48b1bd03b31681e2
$(".delete").click(function() {
    // alert(this.id); // or alert($(this).attr('id'));
  id = $(this).attr('id');
  $.ajax({
    type: 'DELETE',
    url: '/delete-user/' + id,
    success: function(data){
      console.log(data);
      location.reload();
    }
  });
});



$(".edit").click(function() {
  // alert(this.id); // or alert($(this).attr('id'));
  id = $(this).attr('id');
  console.log(id);
  let username = $('div#' + id + ' h4').text();
  let description = $('div#' + id + ' p.description').text();
  let skill = $('div#' + id + ' p.skill').text();

  $('#exampleModal').on('show.bs.modal', function (event) {
    console.log('Show modal');
    var button = $(event.relatedTarget); // Button that triggered the modal
    // var recipient = button.data('whatever'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    // modal.find('.modal-title').text('New message to ' + recipient);
    // modal.find('.modal-body input').val(recipient);
    modal.find('#user-name').val(username);
    modal.find('#description-text').val(description);
    modal.find('#skill-text').val(skill);
  });
});



$(".save").click(function(){
  console.log('Clicked save');
  // id = $(this).attr('id');
  let user = {
    id: id,
    username: $('#user-name').val(),
    description: $('#description-text').val(),
    skill: $('#skill-text').val()
  };

  // Ajax call to update user-data
  $.ajax({
    type: 'PUT',
    url: '/update-user',
    data: user,
    success: function(data){
      console.log(data);
      location.reload();
    }
  });
});
