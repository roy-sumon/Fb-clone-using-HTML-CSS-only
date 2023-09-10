const react = document.querySelector(".react");
const likeBtn = document.querySelector(".likeId");

likeBtn.addEventListener('mouseover', ()=>{
    react.style.display = 'block';
});

likeBtn.addEventListener('mouseout', ()=>{
    react.style.display = 'none';
});