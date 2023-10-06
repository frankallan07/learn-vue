let count = 0
const countHeader = document.getElementById("count")
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")


addBtn.addEventListener("click", () => {
    count++;
    countHeader.innerText = count
})

subtractBtn.addEventListener("click", () => {
    if(count==0) 
        alert("Oops");
    else
    {
        count--;
        countHeader.innerText = count
    }
})