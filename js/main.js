const card= document.querySelectorAll("li button");
    console.log(card);
const submit = document.querySelector(".btn-submit");
console.log(submit);
const rate_point = document.getElementById("rate");
const container = document.querySelector(".container");
const thank_section = document.querySelector(".thank");

let rate = null ;
card.forEach((cards) => {
    cards.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if(active){
            active.classList.remove("checked");
        }
        const cardss = e.target;
        cardss.classList.add("checked");
        rate = e.target.innerText;
        console.log(rate)

    })
});
submit.addEventListener("click", () => {
    if(rate){

        rate_point.innerText = rate;
        container.classList.add("hidden");
        thank_section.classList.remove("hidden");

    }
})