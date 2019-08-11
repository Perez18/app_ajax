$( function() {

  /*----------------------JQUERY -------------*/

    $('#search').keyup(function (e) {// Keyup -->captura click del html 

        let search = $('#search').val(); //  Verificar lo que el usuario a escrito
                                         // y lo  guardo en un var search
        $.ajax({  //  es un metodo $.ajax utiliza  objeto

                url:'search.php',
                type:'POST',
                data:{search},
                success:function(response){
                     let template = '';
                     let data = JSON.parse(response);
                     data.forEach(data => {
                      
                      console.log(data);

                     });
                    



                }
                

        })
    })

});






/* -----------JAVASCRIPT PURO -------------- */

/*
function search(){
     
    var  theobject =new XMLHttpRequest;
    theobject.open('POST','search.php',true);
    theobject.setRequestHeader('content-type','application/x-www-form-form-urlencoded');// Representa un formulario codificado en URL 
    theobject.onreadystatechange = function(){

      document.getElementById('search').innerHTML = theobject.responseText;

    }
    theobject.send();  


}  */