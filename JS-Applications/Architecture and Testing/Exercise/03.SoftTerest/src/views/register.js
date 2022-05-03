import { register } from '../api/api.js';
import { e } from '../dom.js';

const section = document.getElementById(`registerPage`);
section.remove();

const form = section.querySelector(`form`);
form.addEventListener(`submit`, onSubmit);
let ctx = null;


export async function showRegisterPage(ctxTarget) {
    ctx = ctxTarget;
    ctx.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get(`email`).trim();
    const password = formData.get(`password`).trim();
    const repass = formData.get(`repeatPassword`).trim();

    if (!email || !password) {
        return alert(`All fileds are required!`)
    }

    if (password != repass) {
        return alert(`Passwords dont't match!`)
    }

    await register(email, password);
    ctx.goTo(`home`);
    form.reset();
    ctx.updateNav();
}