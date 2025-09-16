function getClassList() {
    const listItems = document.querySelectorAll('.list');
    for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i].textContent);
    }
}

export { getClassList };
