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

const saveButton = document.querySelectorAll('.ri-bookmark-line')
const savedNotification = document.querySelector('.saved')

//  remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}
const changeActiveTwoItem = document.querySelector('.activetwo')
const settingsPopup = document.querySelector('.settings__popup')

 menuItems.forEach(item => {
   item.addEventListener('click', () => {
    changeActiveTwoItem();
     item.classList.add('activetwo');
     if(item.id != 'settings'){
        document.querySelector('.settings__popup').
        style.display = 'none';
     }
     else{
        document.querySelector('.settings__popup').
        style.display = 'block';
        document.querySelector('.notification__count').style.display = "none";
     }
   })
 })

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

 changeActiveTwoItem.onclick = () =>{
    settingsPopup.style.display = 'flex'
 }

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
const closeMenu = document.querySelector('.menu__control2')
const navMenu = document.querySelector('.left')

openMenu.addEventListener('click', () => {
    navMenu.style.right= '0';
    navMenu.style.transition = 'all 300ms ease';
    openMenu.style.opacity = '0';
})
closeMenu.addEventListener('click', () => {
    navMenu.style.right= '-100%';
    navMenu.style.transition = 'all 300ms ease';
    openMenu.style.opacity = '1';
    closeMenu.style.display = 'none'
})
openMenu.onclick = () =>{
    closeMenu.style.display = 'flex';
}


// closes modal
// const closeNavMenu = document.querySelector('.mebu__control')
// if
   

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
saveButton.onclick =() => {
    saveButton.classList.toggle('ri-bookmark-3-fill')
}


// saveButton.addEventListener('click', savedNotificationFunction);


saveButton.forEach(savedNotificationFunction =>{
    savedNotificationFunction.addEventListener('click', () => {
        savedNotification.style.display ='flex';
        savedNotification.style.opacity = '1';
        savedNotification.style.top = '-4rem';


        const buttonRect = saveButton.getBoundingClientRect();

            // Adjust the notification position relative to the button
    savedNotification.style.top = (buttonRect.top + window.scrollY - 40) + '70px';
    savedNotification.style.left = (buttonRect.left + window.scrollX) + '1000px';
        setTimeout(() => {
            savedNotification.style.opacity = '0.1'
            savedNotification.style.top = '-2rem'
            savedNotification.style.display ='none';
        }, 1000);
    })
})

// like post
// Get references to the button, like icon, and like count elements
const likeButton = document.getElementById('likeButton');
const likeIcon = document.getElementById('likeIcon');
const likeCount = document.getElementById('likeCount');

// Set an initial like count and liked state
let count = 0;
let liked = false;

// Function to update the like count and button state
function updateLikeStatus() {
  if (liked) {
    count--;
    likeIcon.style.fill = 'black';
  } else {
    count++;
    likeIcon.style.fill = 'var(--color-primary)'; // Set the fill color when liked
    likeCount.style.display = 'block'
  }

  liked = !liked;
  likeCount.textContent = count;

}

// Add event listener to handle button clicks
likeIcon.addEventListener('click', updateLikeStatus);


// accept request

const disappearOne = document.querySelector('.disappear1')
const appearOne = document.querySelector('.appear1')
appearOne.onclick = () =>{
    disappearOne.style.display = 'flex'
    appearOne.innerHTML = 'Connected'
    appearOne.style.color = 'black'
    appearOne.style.backgroundColor = 'var(--color-light)'
}
const disappearTwo = document.querySelector('.disappear2')
const appearTwo = document.querySelector('.appear2')
appearTwo.onclick = () =>{
    disappearTwo.style.display = 'flex'
     appearTwo.innerHTML = 'Connected'
    appearTwo.style.color = 'black'
    appearTwo.style.backgroundColor = 'var(--color-light)'
}
const disappearThree = document.querySelector('.disappear3')
const appearThree = document.querySelector('.appear3')
appearThree.onclick = () =>{
    disappearThree.style.display = 'flex'
     appearThree.innerHTML = 'Connected'
    appearThree.style.color = 'black'
    appearThree.style.backgroundColor = 'var(--color-light)'
}


const follow = document.querySelector('.info p')

follow.onclick = () =>{
    follow.innerHTML = 'Following'
}






// comments functions

// const commentBox = document.querySelector(.co)