window.addEventListener("scroll",()=>{
    const navbar=document.getElementById("navbar");
    const home=document.getElementById("home");
    const about=document.getElementById("about");
    const skills=document.getElementById("skills");
    const contact=document.getElementById("contact");

    const hometop=home.offsetTop;
    const abouttop=about.offsetTop;
    const skillstop=skills.offsetTop;
    const contacttop=contact.offsetTop;

    const scrollPosition=window.scrollY;
  

    navbar.classList.remove("homeSection","aboutSection","skillsSection","contactSection");

   if(scrollPosition>= contacttop-50){
    navbar.classList.add("contactSection");
   }else if(scrollPosition>= skillstop-50){
    navbar.classList.add("skillsSection");
   }else  if(scrollPosition>= abouttop-50){
    navbar.classList.add("aboutSection");
   }else{
    navbar.classList.add("homeSection");
   }
});