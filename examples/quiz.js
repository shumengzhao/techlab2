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
     document.getElementById("blanka").src = "imgs/a.png";
     
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
     document.getElementById("blankb").src = "imgs/c.png";
     
}

 function fSubmitc() {
                    var correctanswer = document.getElementById("c3" )
                        if (correctanswer.checked === true) {
                            changeImagec(this);

                        }
                        else {
                            alert("Incorrect!")
                        }
                  

                    }
function changeImagec(img) {
     document.getElementById("blankc").src = "imgs/e.png";
     
}

