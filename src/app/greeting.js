const greeter = (name) => {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('body p').innerHTML = `Hello ${name}!`;
    });
}

export default greeter;