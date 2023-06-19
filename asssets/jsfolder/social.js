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
const fontSizes = document.querySelectorAll('.choose__size span')
var root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose__color span')

// save notification

const saveButton = document.querySelector('.ri-bookmark-line')
const savedNotification = document.querySelector('.saved')

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
        let name = user.querySelectorAll('h5').textContent.toLowerCase();
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
// opens modal
const openThemeModal = () => {
    themeModal.style.display ='grid';
}
theme.addEventListener('click', openThemeModal);

// closes modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize__theme')){
        themeModal.style.display = 'none'
    }
}
themeModal.addEventListener('click', closeThemeModal)

// open menu

const openMenu = document.querySelector('.menu__control')
const navMenu = document.querySelector('.left')

openMenu.addEventListener('click', () => {
    navMenu.style.right= '0'
    navMenu.style.transition = 'all 300ms ease'
})


// closes modal
const closeNavMenu = (e) => {
    if (e.target.classList.contains('.left')){
        navMenu.style.right= '-100'
    navMenu.style.transition = 'all 300ms ease'
    }
}

// Removes active class from unselected span
const removeSizeSelector = () => {
    fontSizes.forEach(size =>{
        size.classList.remove('active')
    })
}

// FONTS
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active')
        if(size.classList.contains('font__size__1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font__size__2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font__size__3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font__size__4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font__size__5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-13rem');
        }
          // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })
    
})

// remove active class
const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}

// Change primary color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {

        let primary;

        changeActiveColorClass();

        if(color.classList.contains('color__1')){
            primaryHue = 252;
        } else if(color.classList.contains('color__2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color__3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color__4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color__5')){
            primaryHue = 202;
        }

        color.classList.add('active')
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})


// save post

const savedNotificationFunction = () => {
        savedNotification.style.display ='flex';
        savedNotification.style.opacity = '1'
        savedNotification.style.top = '-4rem'
        setTimeout(() => {
            savedNotification.style.opacity = '0.1'
            savedNotification.style.top = '-2rem'
            savedNotification.style.display ='none';
        }, 1000);

}


saveButton.addEventListener('click', savedNotificationFunction);