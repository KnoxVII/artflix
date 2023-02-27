function adicArte() {
    var arteFav = document.getElementById("arteImg").value;
    var arteLink = document.getElementById("arteLink").value;
    var nomeArtista = document.getElementById("nomeArtista").value;
    if (
        arteFav.endsWith(".webp") ||
        arteFav.endsWith(".jpeg") ||
        arteFav.endsWith(".jpg") ||
        arteFav.endsWith(".png")){
        
        listArtesNaTela(arteFav,arteLink);
        } else {
        console.error("Endereço de artista inválido");
        }
        document.getElementById("arteImg").value = "";
        document.getElementById("arteLink").value = "";
        document.getElementById("nomeArtista").value = "";
    }
    
    function listArtesNaTela(arteFav,arteLink, nomeArtista){
        var elementArteFav = "<div style='text-align:center'><a href=" + arteLink + " target="+"_blank"+"><img src=" + arteFav + "><br>" + nomeArtista + "</a></div>";
        var elementListArtes = document.getElementById("listArtes");
        elementListArtes.innerHTML = elementListArtes.innerHTML + elementArteFav;
    } 