        /* Probar funcionalidad de la base de datos */
        /*let url = "https://sheetdb.io/api/v1/l424ztv3cd1h4";
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
        */



        /*@params fetch POST utilizando un objeto como parametro par enviar la data por medio del método requerido; en este caso un post*/
       
        async function poster(sender){
            /**/
            
            const   post = await fetch(sender.url, {
                method: sender.method,
                headers: sender.headers,
                body: JSON.stringify(sender.body)
            });
            
            const   content = await post.json();
            console.log(content)
        }


        /*@params parameter objeto con data otenida del formulario*/
        function getData(e){

            e.preventDefault();
            
            console.log;

            const retriveData =  []
            
            document.querySelectorAll('.form-group input').forEach(e => retriveData.push(e.value)) ;

            let data = {
                
                        uuid : crypto.randomUUID(),
                        fecha_carga : new Date(Date.now()).toISOString().split('T')[0],
                        area: retriveData[0].trim(),
                        personal: parseInt(retriveData[1].trim()), // DNI del usuario 
                        link : retriveData[2].trim(),
                        email: retriveData[3].trim(),
                        valor_facturacion : parseInt(retriveData[4].trim())
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




        }

        let submitData = document.getElementById('Enviar');

        submitData.addEventListener('click',getData);
