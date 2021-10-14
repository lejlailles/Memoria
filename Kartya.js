class Kartya {
  constructor(fajlnev, elem) {
    this.elem = elem; //aktuális div elem
    this.fajlnev = fajlnev;
    console.log(this.fajlnev);
    this.kepElem = elem.children("img");
    //az aktuális div elemünk képeleme
    this.allapot=false; //kezdetben a háttér látszik
    this.hatter="kepek/hatter.jpg";
    this.setLap();

    this.elem.on("click", ()=>{
        console.log(this);
        this.visszafordul();
        
        this.KattintasTrigger();


    });
    
  }

  visszafordul(){
    this.allapot=!this.allapot;
    this.setLap();
   }

  setLap(){
      if(this.allapot){
        this.kepElem.attr("src",this.fajlnev);
         
      }else{
        this.kepElem.attr("src",this.hatter);
      }
  }
  KattintasTrigger(){
      //let esemeneny=new Event("kartyaKattintas");
      let esemeny=new CustomEvent("kartyaKattintas",{detail:this});
      //úgy hozzuk létre az eseményt, hogy azt is megmondjuk, hogy melyik objektum váltotta ki
      console.log("esemény kiváltva");
      window.dispatchEvent(esemeny); //főablakhoz hozzárendeli az eseményt


  }
  eltuntet(){
    this.elem.css("visibility","hidden");
  }

 
}
