
$(document).ready(function(){  // funcion
             
           fetchtask();
           $('#buscar').hide();    

           $('#search').keyup(function(e){  // keyup evento que capturo 
                if($('#search').val()){ // si existe un valor en el search !! ejecutalo
                        
            let search = $('#search').val(); // valor ingresado en el search
            $.ajax({  // se ejeecuta el AJAX
                    url: 'search.php',   // metdo 
                    type: 'POST',      // metdo  POST --solicita datos del servidor mediante HTTP POST
                    data: { search },    // metdo 
                    success: function(response){
                         let tasks = JSON.parse(response);
                         let template ='';
                         tasks.forEach(task => {
                          template += `
                          <li> ${task.nombre} </li>
                          <li> ${task.comentario} </li>
                           `  
                         });
                        
                         $('#contenido').html(template);
                         $('#buscar').show();

                         
                    }
                    
            })  // termina la ejecucion AJAX

                }
            
           });


           $('#enviar').submit( function(e){

              const datos = { // obejeto  que se enviara al servidor
               nombre: $('#nombre').val(),
               comentario: $('#comentario').val()

              };
               //type : url,  data  ,  success
             $.post('add.php',datos,function(response){
               fetchtask();
               $('#enviar').trigger('reset'); // limpia el formulario
             });
               
              e.preventDefault();  // metodo que realiza que la pagina no se refresh cuando se envia datos

           } );




           function fetchtask(){
                
           $.ajax({

               url: 'list.php',
               type:'GET',  // Cargue datos del servidor usando una solicitud HTTP GET.
               success: function(response){
                 let tasks = JSON.parse(response);
                 let template = '';
                  tasks.forEach(task => {
                       template += `
                         <tr>
                           <td> ${task.id} </td>
                           <td> ${task.nombre} </td>
                           <td> ${task.comentario} </td>

                          </tr> 
                       `
                       
                  });

                  $('#lista').html(template);

               }

           });




           }
    


        
});