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
            return 'bajaarbear.html'; 
        case 'You are an Owl - Wise!':
            return 'bajaarowl.html'; 
        case 'You are a Parrot - Social!':
            return 'bajaarparrot.html'; 
        case 'You are a Horse - Swift!':
            return 'bajaarparrot.html'; 
        default:
            return '';
    }
}
