function MotivationModal(){
    const dateObj = new Date();
    const date = dateObj.getFullYear();

    return `Em pleno ${date}`;
}

module.exports = MotivationModal;