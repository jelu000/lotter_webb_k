
const antal_vinster = document.getElementById("antalvister")
const svaretdiv = document.getElementById("svar_div")

const vinster = ["Godis, 4500 kg", "Lyxvilla", "Kamera från Canon", "Ett mjölk paket"]


function buttonClick(e){
    

    let vinst = `<h3>Dina vinster</h3>`;

    let  antalv = parseInt(antal_vinster.value);

    console.log(`funkar e ${antalv}`);


    if (antalv < 3 && antalv > 0){
        alert("slumpa lott!");

        for (i=0; i<antalv; i++){
            let slumptal = Math.floor(Math.random() * antalv);
            let t_vinst = vinster[slumptal];

            vinst += `<p> ${t_vinst} </p>`

        }

        svaretdiv.innerHTML = vinst;
    }
    else{

        alert("För många lotter eller 0 valda!")
    }

}