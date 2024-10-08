document.getElementById('submitBtn').addEventListener("click", checkData);
        
        function checkData() {
            let frm = document.getElementById("contactForm");
            // Check name (Alphabets and space)
            let name = document.getElementById("name").value;
            const nameexp = /^[A-Za-z ]*$/;

            if (nameexp.test(name) == false || name == "") {
                document.getElementById("errname").innerHTML = "Invalid name";
            } else {
                document.getElementById("errname").innerHTML = "";

                // Get email value
                let email = document.getElementById("email").value;
                const emailexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                // Validate email
                if (emailexp.test(email) == false || email == "") {
                    document.getElementById("errem").innerHTML = "Invalid email";
                } else {
                    document.getElementById("errem").innerHTML = "";
                    
                    // Log the name and email
                    console.log("Name:", name);
                    console.log("Email:", email);
                }
            }
        }