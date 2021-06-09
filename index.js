console.log('this is tutorial on Drag & Drop');

// first grab the whiteBox and ingBox from index.html

const imgBox = document.querySelector('.imgBox');

const whiteBoxes = document.getElementsByClassName('whiteBox');

// Add eventlistener on dragable Image.dragstart & dragend
// basically dragstart  means img drag krava pick karo te event and dragend mean img drag mate mukvi te event

imgBox.addEventListener('dragstart', (e) => {
    console.log('dragStart has been invoked');
    e.target.className += ' hold';
    // e.target thi given instances male
    setTimeout(() => {
        e.target.className = ' hide';
    }, 0);
    // setTimeout() ma zero means at the end it will perfrom that function.

})

imgBox.addEventListener('dragend', (e) => {
    console.log('dragEnd has been invoked');
    // at the last dragend chale
    e.target.className='imgBox';//border remove karva mate
})

// now evnetListener on which we have to drag the object
for (let whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        console.log('dragover has been invoked');
        // means koi bija object par te over karvama aavyo chhes
        e.preventDefault();//we have to use this compulsory because byDefalult it will not allow us to drag.

    });
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('dragenter has been invoked');
        // koi bija object par enter thay to dragEnter
        e.target.className +=' dashed';
    });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('dragleave has been invoked');
        // koi bija object thi bahar aave to dragLeave
        e.target.className = 'whiteBox';

    });
    whiteBox.addEventListener('drop', (e) => {
        console.log('drop has been invoked');
        // koi bija object par drop kari tyare drop aave
        e.target.append(imgBox);//as normal krava mate

    });
}