function find65() {
    var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");
    
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    
    if (num1 === 65 || num2 === 65)
        	{
        		alert(true + "\none of your numbers is 65");
        	}
    	else if (num1 + num2 === 65)
        	{
            	alert(true + "\nthe sum of your numbers is 65");
        	}
        else
        {
        	alert(false);
        }
}

function areaOfTriangle() {
    var num1 = document.getElementById("tri1");
    var num2 = document.getElementById("tri2");
    var num3 = document.getElementById("tri3");
    
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    num3 = parseInt(num3.value);   
    
    var semiPeri = 0.5 * (num1 + num2 + num3);
    var area = Math.sqrt(semiPeri * (semiPeri - num1) * (semiPeri - num2) * (semiPeri - num3));

    alert("Area:\n" + area + " cm" + '\u00B2');
}

    var nums = [];
    var enteredNum = document.getElementById("arrNum");
    var commonLet = "a";

function findMaxNum() {
    
    var max = -100;
    
    for(var x = 0; x < 3; x++)
    {
        if(nums[x] > max)
        {
            max = nums[x];
        }
    }

    alert("Highest Number is:\n" + max);
}

function pushNum() {
    var enteredNum = document.getElementById("arrNum");
    enteredNum = parseInt(enteredNum.value);
    nums.push(enteredNum);
}

function numToTime() {
    var numToConvert = document.getElementById("numToConvert");
    numToConvert = parseInt(numToConvert.value);
    var count = 0;
    
    if(numToConvert >= 60)
    {
        var rem = numToConvert - 60;
        count++;

        while(rem >= 60)
        {
            var rem = rem - 60;
            count++;
        }
        if(rem === 0)
        {
            rem = 0;
        }

    }

    alert("Time:\n" + count + " hours " + rem + " minutes");
}

function compareWords() {
    var string1 = document.getElementById("firstWord");
    var string2 = document.getElementById("secWord");
    
    
    string1 = string1.value;
    string2 = string2.value;
    
    var letters = [];
    
    if(string1.length > string2.length)
    {
        for(var x = 0; x < string1.length; x++)
        {
            for(var y = 0; y < string2.length; y++)
                {
                    if(string1.charAt(x) === string2.charAt(y))
                        {
                            commonLet = string1.charAt(x);
                            letters.push(commonLet);
                        }
                }
        }
    } 
    
    else
    {
        for(var x = 0; x < string2.length; x++)
        {
            for(var y = 0; y < string1.length; y++)
                {
                    if(string2.charAt(x) === string1.charAt(y))
                        {
                            commonLet = string2.charAt(x);
                            letters.push(commonLet);
                        }
                }
        }
    }
    
    alert("The common letters are:\n" + letters);
}