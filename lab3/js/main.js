
    // alert("hello js!"); 
    var num = 10;
    let name = "OHM"; //scope 
    const arr = [10, 20, "Hi"];
    let obj = { name: "Dang", age: 20 };
    const objMix = {
        data: [
            { name: "Dum", gpa: 3.51 },
            { name: "Dong", gpa: 3.55, age: 18 }
        ]
    };

    console.log(num);
    console.log(arr[2]);
    console.log(objMix.data[1].age);

    function add(a, b) {
        return a + b;

    }

    let total = add(3, 5);

    document.getElementById("div1").innerHTML = name;

    $(function () {
        // alert("hello Jquery");


        $("#btn1").click(function () {
            $("#div1").text("BRU");


        });

        $("#btn2").bind("click",()=>{
            $(".in1").val("BRU");
        });

        $("#btn3").click(()=>{
            $(".in1:even").toggleClass("red");
        })


        $("#div_form").load("./pages/form.html");

    });//jQuery Handle

