 // sidebar
  
 const menuItems = document.querySelectorAll('.menu__items');

//  messages
const messageNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// theme

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize__theme')



//  remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

 menuItems.forEach(item => {
   item.addEventListener('click', () => {
    changeActiveItem();
     item.classList.add('active');
     if(item.id != 'notifications'){
        document.querySelector('.notifications__popup').
        style.display = 'none';
     }
     else{
        document.querySelector('.notifications__popup').
        style.display = 'block';
        document.querySelector('.notification__count').style.display = "none";
     }
   })
 })

//  messages
// Searches Chats
const searchMessage = () => {
    const val = messageSearch.value.toLowercase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }
        else{
            user.style.display = 'none';
        }

    })

}

// Search chat
messageSearch.addEventListener('keyup', searchMessage);


// Highlights messages card when messages menunitem is clicked
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification__count').style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})


// THEME CUSTOMIZATION

const openThemeModal = () => {
    themeModal.style.display ='grid';
}
theme.addEventListener('click', openThemeModal);

// open menu

const openMenu = document.querySelector('.menu__control')
const navMenu = document.querySelector('.left')

openMenu.addEventListener('click', () => {
    navMenu.style.right= '0'
    navMenu.style.transition = 'all 300ms ease'
})