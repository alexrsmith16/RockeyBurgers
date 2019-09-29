function collapse(element) {
    console.log(element.id);
    let child = document.getElementById(element.id + "-child");
    if (child.style.display === "block") {
        child.style.display = "none";
    }
    else {
        child.style.display = "block";
    }
}