let form = document.getElementById("registration");
        form.onsubmit = function() {

        if (!form.email.value)
        {
            alert("Missing E-mail");
            return false;
        }

        else if (!form.password.value)
        {
            alert("Missing Password");
            return false;
        }

        else if (form.password.value.length < 8)
        {
            alert("Password is too short. Try again with 8 characters.");
            return false;
        }

        else if (form.password.value != form.confirmation.value)
        {
            alert("Passwords don't match");
            return false;
        }

        else if (!form.agreement.checked)
        {
            alert("Agreement unchecked");
            return false;
        }

        return true;

        };