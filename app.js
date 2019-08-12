
$(document).ready(function(){  // funcion


           $('#buscar').hide();    

           $('#search').keyup(function(e){
                if($('#search').val()){ // si eciste un valor en el search buscar en el servidor
                        
            let search = $('#search').val();
            $.ajax({
                    url: 'search.php',
                    type: 'POST',
                    data: { search },
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
                    
            })  

                }
            
           });

           $.ajax({

               url: 'list.php',
               type:'GET',
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

           })
       
        
});