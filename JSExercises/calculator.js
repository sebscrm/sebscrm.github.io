<html>    
    <head>    
    <title>    
        Simple Calculator    
    </title>    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>    
    <script>    
        //cdn//    
        $(document).ready(function(){    
            $("#btnAdd").on('click',function(){    
                Add();    
            });    
            $("#btnSubstract").on('click',function(){    
                Substract();    
            })    
            $("#btnMultiply").on('click',function(){    
                Multiply();    
            })    
            $("#btnDivide").on('click',function(){    
                Divide();    
            })    
        });    
        function Add(){    
         var no1=parseInt($("#txtNo1").val());    
         var no2=parseInt($("#txtNo2").val());    
         var result =no1+no2;    
          alert("The result is "+result);    
        }    
        function Substract(){    
         var no1=parseInt($("#txtNo1").val());    
         var no2=parseInt($("#txtNo2").val());    
         var result =no1-no2;    
          alert("The result is "+result);    
        }    
        function Multiply(){    
         var no1=parseInt($("#txtNo1").val());    
         var no2=parseInt($("#txtNo2").val());    
         var result =no1*no2;    
          alert("The result is "+result);    
        }    
        function Divide(){    
         var no1=parseInt($("#txtNo1").val());    
         var no2=parseInt($("#txtNo2").val());    
         var result =no1/no2;    
          alert("The result is "+result);    
        }    
    </script>    
    </head>    
    <body>    
       First Number <input type="text" id="txtNo1" placeholder="Enter first number"><br>    
        Second Number<input type="text" id="txtNo2" placeholder="Enter second number"><br>    
        <input type="button" id="btnAdd" value="Add">    
        <input type="button" id="btnSubstract" value="Substract">    
        <input type="button" id="btnMultiply" value="Multiply">    
        <input type="button" id="btnDivide" value="Divide">    
    </body>    
    </html>   