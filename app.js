
$(document).ready(function(){


 

           $('#search').keyup(function(e){

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
                           ` 
                        
                         });

                         $('#contenido').html(template);
                         
                    }
                    
            })  
            
           })
        
});