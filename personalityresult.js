document.addEventListener("DOMContentLoaded", function () {
    const result = localStorage.getItem('result');
    document.getElementById('result').innerText = result;

    const imageSrc = getImageSrc(result);
    document.getElementById('animal-image').src = imageSrc;

    const tshirtLink = getTshirtLink(result);
    document.getElementById('tshirt-link').href = tshirtLink;
});
function getImageSrc(result) {
    switch (result) {
        case 'You are a Bear - Strong!':
            return 'bear_image.jpg'; 
        case 'You are an Owl - Wise!':
            return 'owl_image.jpg'; 
        case 'You are a Parrot - Social!':
            return 'parrot_image.jpg'; 
        case 'You are a Horse - Swift!':
            return 'horse_image.jpg'; 
        default:
            return '';
    }
}

function getTshirtLink(result) {
    switch (result) {
        case 'You are a Bear - Strong!':
            return 'https://youtu.be/xvFZjo5PgG0?si=8Evh6-vd1ToCxAU5'; 
        case 'You are an Owl - Wise!':
            return 'https://youtu.be/xvFZjo5PgG0?si=8Evh6-vd1ToCxAU5'; 
        case 'You are a Parrot - Social!':
            return 'https://youtu.be/xvFZjo5PgG0?si=8Evh6-vd1ToCxAU5'; 
        case 'You are a Horse - Swift!':
            return 'https://youtu.be/xvFZjo5PgG0?si=8Evh6-vd1ToCxAU5'; 
        default:
            return '';
    }
}
