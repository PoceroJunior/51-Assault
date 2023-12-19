function post(player, message) //para enviar el mensaje...
{
    $.ajax({
        type: "POST",
        async:false,
        headers: {
            'Content-type' : 'application/json'
        },
        url: url + "chat",
        dataType: "json",
        data: JSON.stringify( { player: ">"+player, message: ""+message })

    }).done(function(player, menssage){
        console.log('Mensaje enviado');
    })
}

function get() {

    for (let i = 0; i<=2; i++) {
        $.ajax({
            method: "GET",
            url: url + "chat/" + i.toString()

        }).done(function(message){
            
            if(message != "")
                document.getElementById("message"+i.toString()).innerHTML = message;
        })
    }

}