
        function append(retrieve){

            
            let appender = document.getElementById('to_append')

            let to_delete = document.querySelector('#to_append > div');

            if (to_delete != null){

                appender.removeChild(to_delete)
            }
          
            let whole = ''
            
            let wholeNode = document.createElement('div');
            
            wholeNode.innerHTML = whole;
            
            
            
            if (retrieve.length != 0){
                
                for (let data of retrieve){
                    
                    
                    let data_appender=`
                    
                    <fieldset >
                    <h3>Email del usuario</h3>
                    <h4>${data.email}</h4>
                    <h3>Area de la facturacion</h3>
                    <h3>${data.area}</h3>
                    <h3>Fecha de carga</h3>
                    <h4>${data.fecha_carga}</h4>
                    <h3>Valor de facturacion</h3>
                    <h4>${data.valor_facturacion}</h4>
                    </fieldset>
                    
                    
                    ` ; 
                    
                    whole += data_appender ; 

                }

            }
            else{
                
                
                whole = '<h2> No hay data disponible </h2>'
            }
            
            
            wholeNode.innerHTML = whole;
            
            appender.appendChild(wholeNode);
            

        }





        function getDataByGet(e){
            e.preventDefault() ;

            
            let retriveData = [];
            document.querySelectorAll('.form__group input').forEach(e => retriveData.push(e.value.trim())) 
            
            

            let url = `https://sheetdb.io/api/v1/l424ztv3cd1h4/search?personal=${parseInt(retriveData[0])}&casesensitive=true`;
 
            fetch(url)
            .then(response => response.json())
            .then(data => {
                
                append(data);
            })
            .catch(error => {
                console.log(error);
            })
 
        }
 
         let getData = document.getElementById('getter') || null;
         
                
         if( getData != null ){
 
             getData.addEventListener('click',getDataByGet);
         }
 
 
 
         /*@params fetch POST utilizando un objeto como parametro par enviar la data por medio del método requerido; en este caso un post*/
        
         async function poster(sender){
             /**/
             
             const   post = await fetch(sender.url, {
                 method: sender.method,
                 headers: sender.headers,
                 body: JSON.stringify(sender.body)
             });
             
             const   content = await post.json();
             
             
         }
 
 
         /*@params parameter objeto con data otenida del formulario*/
         function getDataByPost(e){
 
            e.preventDefault();
             
            const retriveData =  []

            document.querySelectorAll('.form__group input').forEach(e => retriveData.push(e.value.trim())) ;


            let data = {
                 
                         uuid : crypto.randomUUID(),
                         fecha_carga : new Date(Date.now()).toISOString().split('T')[0].trim(),
                         area: retriveData[0],
                         personal: parseInt(retriveData[1]), // DNI del usuario 
                         link : retriveData[2],
                         email: retriveData[3],
                         valor_facturacion : parseInt(retriveData[4])
            }
 
            sender = {
                        url : 'https://sheetdb.io/api/v1/l424ztv3cd1h4',
                        method : 'POST',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        },
                        body : {
                            data:data
                        }
            }
 
            



            poster(sender);

            setTimeout(()=> {

            document.querySelectorAll('.form__group input').forEach(e => e.value= '') 
            alert('Gracias por cargar su factura!\n\tEquipo # 1')
            },500);


 
 
 
 
         }
 
         let submitData = document.getElementById('enviar') || null;
         
         if( submitData != null ){
 
             submitData.addEventListener('click',getDataByPost);
         }
 
 
