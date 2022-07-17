console.log("script running...");
document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo'); //.sidebar class me toggle - hai to hatao ur nhi h to laga do.!
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline'
        },300);
    }
})