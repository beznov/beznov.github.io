const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
	e.preventDefault();
	popup.classList.toggle("popup_open");
}

const qd = document.querySelector("#question-description");
const btn = document.querySelector("#btn");

btn.addEventListener("click", showDescription);

function showDescription(e) {
	qd.classList.toggle("question-card-description-active");
	btn.classList.toggle("question-card-button-active");
}