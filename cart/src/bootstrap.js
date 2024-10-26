import faker from "faker";

const mount = (el) => {
  const cartItem = faker.random.number(100);
  const cartMsg = `<div>You have ${cartItem} items in your cart.</div>`;
  el.innerHTML = cartMsg;
};
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#devCart");

  if (el) {
    mount(el);
  }
}

export { mount };
