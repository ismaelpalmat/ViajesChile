$(function(){
    $("[data-bs-toggle='tooltip']").tooltip()

    $('#enviarCorreo').click(function(){
        $('#emailAlert').removeClass('d-none')
    })

    $('.col-md-3 img').click(function(){
        $('.col-md-3').toggle()
    })
})