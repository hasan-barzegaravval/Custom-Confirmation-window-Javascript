
        async function CustomConfirmation(msg){ 
            //this function returns a promise. the pomise function creates the confirmation boxes.
            return new Promise(function(resolve){
                //creating the required dom nodes.
            const message=document.createElement("div");// for the message
            const messageparagraph=document.createElement("p");// to store message paragraph
            const box=document.createElement("div");// for whole page coverage 
            const btyes=document.createElement("button");// button for yes
            const btno=document.createElement("button");// button for no                        
            btyes.innerText='yes';// button texts
            btno.innerText='No';// button texts
            let height=window.innerHeight; // get the height of window for positioning           
            // this line set the styling for message div
            message.setAttribute('style','width:25%;padding:10px;display:block;margin:auto;background: #fff;text-align:center;');    
            // style for buttons
            btyes.setAttribute('style','width:20%;padding:5px;margin:5px;')
            btno.setAttribute('style','width:20%;padding:5px;margin:5px;')
            // positioning the message div on screen (on parent)
            message.style.marginTop=height/3+'px';
            messageparagraph.innerHTML=msg; //set message  
            // appending elements (nodes)
            message.append(messageparagraph);
            message.append(btyes);
            message.append(btno);          
            box.append(message);
            box.setAttribute('style','width:100%;height:100%;background:rgba(0,0,0,0.5);z:9999;top:0;left:0;position:fixed;');           
            // append all to the document body
            document.body.append(box);
            // writing on click functions for buttons;
            btyes.onclick=function(){
                resolve(true);// return true if yes is clicked
                box.remove();// remove the nodes form document
            };
            btno.onclick=function(){
                resolve(false);// return true if yes is clicked
                box.remove();// remove the nodes form document
            }
            })            
        }
        // this is a function which awaits the return of the promise.        
        async function onConfirm(msg,action){
            msg=msg.length==0?"are you sure":msg;
            const confirmed=await CustomConfirmation(msg);
            if (confirmed) {action();}// the action on confirmation
            return confirmed; // return the confirmation value (useful for AJAX or serverside calls)                       
        }        
    