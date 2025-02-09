
    const passwordBox = document.getElementById("Password");
    const length = 8;
    
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    const symbol = "@#$%&*+=_-"
    const allChars = upperCase+lowerCase+number+symbol;

    function createPassword(){
        let Password = "";
        Password += upperCase[Math.floor(Math.random() * upperCase.length)];
        Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        Password += number[Math.floor(Math.random() * number.length)];
        Password += symbol[Math.floor(Math.random() * symbol.length)];
        

        while(length>Password.length){
            Password+= allChars[Math.floor(Math.random()* allChars.length)];
        }
        passwordBox.value = Password;
    }

     function createEasyPassword() {
            const passwordBox = document.getElementById("easyPassword");
            const length = 6;
            
            const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowerCase = "abcdefghijklmnopqrstuvwxyz";
            const easyChars = upperCase + lowerCase;

            let password = "";
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

            while (password.length < length) {
                password += easyChars[Math.floor(Math.random() * easyChars.length)];
            }

            passwordBox.value = password;
        }
    function copyPassword(){
        
        const copyInput = document.getElementById("Password").value
        navigator.clipboard.writeText(copyInput)
        alert("copied")

    }

    function copyPassword2(){
        
        const copyInput = document.getElementById("easyPassword").value
        navigator.clipboard.writeText(copyInput)
        alert("copied")

    }