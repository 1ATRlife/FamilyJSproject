var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];

var names = ["Family Book","Akbar - Grandfather", "Aminur Mohammed Rahman - Father", "Tasnuva Airen - Mother", "Almeir Taraz Rahman - Brother - Me", "Anniyah - Sister"];

var age = [20, 73, 42, 43, 10, 9]

var i = 0;

function update()
{
    i++;

    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    var max_number = Math.max.apply(Math, age);
    console.log("The highest age is: ", max_number );

    var min_number = Math.min.apply(Math, age);
    console.log("The lowest age is: ", min_number);
}
console.log("- .... . ... . / .--. .. -.-. - ..- .-. . ... / .- .-. . / .... --- .-. .-. .. -... .-.. . -.-.--")
console.log("- .... . .-. . / .- .-. . / -- --- .-. . / -- . -- -... . .-. ... / --- ..-. / -- -.-- / ..-. .- -- .. .-.. -.-- --..-- / .- ... / .-- . .-.. .-.. -.-.--")