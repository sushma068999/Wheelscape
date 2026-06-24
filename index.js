const openPopupBtn =
    document.getElementById("open-pop-up");

const closePopupBtn =
    document.getElementById("close-pop-up");

const popup =
    document.getElementById("pop-up-id");

openPopupBtn.addEventListener("click", () => {
    popup.classList.add("active");
});

closePopupBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});
