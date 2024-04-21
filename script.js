const passwordbox = document.getElementById("password");
        const length =  12;
        const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
        const lowercase ="abcdefghijklmnopqrstuvwxyz";
        const number = "1234567890";
        const symbol ="!@#$%^&*()_+-={}[]:,.<>?/";

        const allchars = uppercase+lowercase+symbol+nnumber;

        function createpassword(){
            let password = "";
            password +=uppercase[Math.floor(Math.random() * uppercase.length)];
            password +=lowercase[Math.floor(Math.random() * lowercase.length)];
            password +=number[Math.floor(Math.random() * number.length)];
            password +=symbol[Math.floor(Math.random() * symbol.length)];

            while(length> password.length){
                password +=allchars[Math.floor(Math.random() * allchars.length)];
            }
            passwordbox.value = password;
        }