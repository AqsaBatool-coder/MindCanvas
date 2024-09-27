export const emailValidator = (value: string): boolean => {
    // Updated email validation regex
    const emailRegex = new RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}");
    return emailRegex.test(value);
}