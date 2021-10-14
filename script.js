$(function () {
  const szuloElem = $("article");
  const sablonElem = $(".kartya");
  const meret = 3;
  const kivalasztottKartya = [];
  for (let index = 0; index < meret; index++) {
    for (let k = 0; k < 2; k++) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const kartya = new Kartya("kepek/kep" + (index + 1) + ".jpg", ujElem);
    }
  }
  sablonElem.remove();

  //itt tudjuk számolni hány kártya van felfordítva

  $(window).on("kartyaKattintas", (event) => {
    console.log(event.detail);
    kivalasztottKartya.push(event.detail); //aktuális kártya adata(event.detail), amelyik kiváltotta az eseményt
    //akkor van 2 kártya felfordítva, ha a tömb hossza 2
    if(kivalasztottKartya.length==2){
        
        if(kivalasztottKartya[0].fajlnev==kivalasztottKartya[1].fajlnev){
            console.log("egyforma");
           kivalasztottKartya[0].eltuntet();
           kivalasztottKartya[1].eltuntet();
           kivalasztottKartya.splice(0,2);
        }else{
            console.log("nem egyforma");
            setTimeout(function(){
            kivalasztottKartya[0].visszafordul();
           kivalasztottKartya[1].visszafordul();
           kivalasztottKartya.splice(0,2);
            },1000);
           
        }
        
    }
  });
});
