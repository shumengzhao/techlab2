        function fSubmita() {
                    var correctanswer = document.getElementById("a1" )
                        if (correctanswer.checked === true) {
                            changeImagea(this);

                        }
                        else {
                            alert("Incorrect!")
                        }
                  

                    }


function changeImagea(img) {
     document.getElementById("blanka").src = "imgs/2.png";
     
}

 function fSubmitb() {
                    var correctanswer = document.getElementById("b2" )
                        if (correctanswer.checked === true) {
                            changeImageb(this);

                        }
                        else {
                            alert("Incorrect!")
                        }
                  

                    }
function changeImageb(img) {
     document.getElementById("blankb").src = "imgs/3.png";
     
}

