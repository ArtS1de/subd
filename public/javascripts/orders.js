$(document).ready(function(){

    $('#create_order').click(function(e){

        $('#create_order_popup').show()

    })

    $('#create_order_popup_close').click(function(e){

        $('#create_order_popup').hide()

    })

    $('#cancel_create_order').click(function(e){

        $('#create_order_popup').hide()

    })

    $('#submit_create_order').click(function(e){

        e.preventDefault()
        let data = {
            label:    $('#inpLabel').val(),
            id_client: $('#inpClient').val(),
            amount: $('#inpAmount').val(),
        }

        $.ajax({
            type: 'POST',
            data: data,
            url: '/orders/create',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
                alert('Заказ создан')
                window.location.reload()
            }
            else {
                alert(response.msg)
            }
        });

    })

    $(document).ready(function(){

        $.ajax({
            type: 'GET',
            url: '/api/orders',
            dataType: 'JSON'
        }).done(function( response ) {
    
            response.orders.forEach(order => {
                $('#tbl_orders').append(
                    `<tr>
                        <td>${order.id}
                        <td>${order.label}
                        <td>${order.id_status}
                        <td>${order.id_client}
                        <td>${order.amount}
                    </tr>`
                )
            })
    
        });
    })
    
});

