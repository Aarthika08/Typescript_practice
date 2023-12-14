//create ts file first and then compile it.we dont want to create js file.because it automatically creates it
function color1(){
    const randomcolor=
    Math.floor(Math.random()*1672215).toString(16);
     document.body.style.backgroundColor="#"+randomcolor;        

     const randomcolor1=
     Math.floor(Math.random()*1675).toString(16);
     const color=document.getElementById('col') as HTMLElement;
     color.style.color="#"+randomcolor1;
 
    const randomcolor2=
    Math.floor(Math.random()*1672215).toString(16);
    const colo=document.getElementById('genNew') as HTMLElement;
  colo.style.backgroundColor="#"+randomcolor2;


    
}




commands
tsc file.ts
node file.ts
