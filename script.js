var $form = $('form')

$form.submit(function (event) {
  event.preventDefault()

  var data = $(this).serializeArray()

  $.ajax({
    url: 'https://formspree.io/robbie@slatecreative.com',
    method: 'POST',
    data: data,
    dataType: 'json'
  }).done(function () {
    swal("Thanks!", "Your email has been sent.", "success")

    $('input').val('')
    $('textarea').val('')
  })
})
