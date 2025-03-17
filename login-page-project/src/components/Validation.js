export const validateLogin = (email, password) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
        return { valid: false, message: "Email and password are required." };
    }
    if (!emailPattern.test(email)) {
        return { valid: false, message: "Invalid email format." };
    }
    return { valid: true, message: "" };
};

export const validateSignUp = (email, password, personalQuestionAnswer) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password || !personalQuestionAnswer) {
        return { valid: false, message: "All fields are required." };
    }
    if (!emailPattern.test(email)) {
        return { valid: false, message: "Invalid email format." };
    }
    if (password.length < 6) {
        return { valid: false, message: "Password must be at least 6 characters long." };
    }
    return { valid: true, message: "" };
};

const users = [];

export const saveUser = (user) => {
    users.push(user);
};

export const validateUser = (email, password) => {
    return users.find(user => user.email === email && user.password === password);
};

export const validateSecurityAnswer = (email, securityAnswer) => {
    const user = users.find(user => user.email === email && user.securityAnswer === securityAnswer);
    return !!user;
};