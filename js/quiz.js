        function fSubmita() {
                    var correctanswer = document.getElementById("a1" )
                        if (correctanswer.checked === true) {
                            changeImage_a(this);

                        }
                        else {
                            alert("Incorrect!")
                        }
                  

                    }


function changeImage_a(img) {
     document.getElementById("blanka").src = "imgs/2.png";
     
}

 function fSubmitb() {
                    var correctanswer = document.getElementById("b2" )
                        if (correctanswer.checked === true) {
                            changeImage_b(this);

                        }
                        else {
                            alert("Incorrect!")
                        }
                  

                    }
function changeImage_b(img) {
     document.getElementById("blankb").src = "imgs/3.png";
     
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
     document.getElementById("blankc").src = "imgs/4.png";
     
}

