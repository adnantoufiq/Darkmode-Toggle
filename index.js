const tgle =document.getElementById('tgle');

tgle.addEventListener('change',(e)=>{
    document.body.classList.toggle('dark',e.target.checked);
})