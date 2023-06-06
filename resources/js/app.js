import './bootstrap';
import './bootstrap';


const messages_el = document.getElementById('messages')
const username_input = document.getElementById('username')
const message_input = document.getElementById('message_input')
const message_form = document.getElementById('message_form')



message_form.addEventListener('submit',function (e){
    e.preventDefault()
    let hasError = false

    if (username_input.value === ''){
        alert('please enter username')
        hasError = true
    }
    if (message_input.value === ''){
        alert('please enter message....')
        hasError = true
      }
    if(hasError){
        return;
    }
    const options = {
        method: 'post' ,
        url : '/send-message',
        data : {
            username : username_input.value,
            message : message_input.value
        },
        transformResponse :[(data) =>{
            return(data)
        }]
    }
    axios(options)
})
 window.Echo.channel('Chat').listen('.message',(e)=>{
    console.log(e)
    messages_el.innerHTML += '<div class="message"><strong>' + e.message
        + '  :  <strong />' + e.username + '<div/>'
})
// listen()
// {
//     window.Echo.channel('Chat')
//         .listen('.message', (e) => {
//             console.log('-------wakanda-------');
//             // this.item = auction_item;
//         });
//}
