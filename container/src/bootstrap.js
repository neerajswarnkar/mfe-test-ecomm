import {mount as productMount} from "products/ProductIndex";
import { mount as cartMount } from "cart/CartIndex";

productMount(document.querySelector("#my-dev-products"));
cartMount(document.querySelector("#my-dev-cart"));
console.log("Container live");
