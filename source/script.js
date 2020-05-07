// GLOBALS

const examples_items = document.getElementById("examples_items");
const examples_left = document.getElementById("examples_left");
const examples_right = document.getElementById("examples_right");

const options_background_input = document.getElementById("options_background_input");
const options_foreground_input = document.getElementById("options_foreground_input");
const options_background_browse = document.getElementById("options_background_browse");
const options_foreground_browse = document.getElementById("options_foreground_browse");
const options_ghost = document.getElementById("options_ghost");
const options_ruler = document.getElementById("options_ruler");
const options_shrink = document.getElementById("options_shrink");
const options_share = document.getElementById("options_share");

const preview_background = document.getElementById("preview_background");
const preview_foreground = document.getElementById("preview_foreground");
const preview_masking = document.getElementById("preview_masking");
const preview_custom = document.getElementById("preview_custom");
const preview_moving = document.getElementById("preview_moving");
const preview_ruler = document.getElementById("preview_ruler");
const preview_content = document.getElementById("preview_content");
const preview_top = document.getElementById("preview_top");
const preview_right = document.getElementById("preview_right");
const preview_bottom = document.getElementById("preview_bottom");
const preview_left = document.getElementById("preview_left");

const upload = JSON.parse(localStorage.getItem("upload") || "[]");

// MASKING

function masking(type) {
    document.getElementById("options_custom").classList.remove("active");
    document.getElementById("options_google").classList.remove("active");
    document.getElementById("options_apple").classList.remove("active");
    document.getElementById("options_microsoft").classList.remove("active");
    document.getElementById("options_samsung").classList.remove("active");
    document.getElementById("options_" + type).classList.add("active");

    document.getElementById("preview_google").style.display = type == "google" ? "block" : "none";
    document.getElementById("preview_apple").style.display = type == "apple" ? "block" : "none";
    document.getElementById("preview_microsoft").style.display = type == "microsoft" ? "block" : "none";
    document.getElementById("preview_samsung").style.display = type == "samsung" ? "block" : "none";

    preview_custom.style.display = type == "custom" ? "block" : "none";
    preview_masking.style.display = type == "custom" ? "none" : "block";

    preview_top.style.display = type == "custom" ? "block" : "none";
    preview_right.style.display = type == "custom" ? "block" : "none";
    preview_bottom.style.display = type == "custom" ? "block" : "none";
    preview_left.style.display = type == "custom" ? "block" : "none";

    localStorage.setItem("options_mask", type);
}

document.getElementById("options_custom").onclick = () => masking("custom");
document.getElementById("options_google").onclick = () => masking("google");
document.getElementById("options_apple").onclick = () => masking("apple");
document.getElementById("options_microsoft").onclick = () => masking("microsoft");
document.getElementById("options_samsung").onclick = () => masking("samsung");

// CUSTOM

preview_top.oninput = preview_right.oninput = preview_bottom.oninput = preview_left.oninput = function () {
    const t = Math.min(Math.max(parseInt(preview_top.value || "0"), 0), 100);
    const r = Math.min(Math.max(parseInt(preview_right.value || "0"), 0), 100);
    const b = Math.min(Math.max(parseInt(preview_bottom.value || "0"), 0), 100);
    const l = Math.min(Math.max(parseInt(preview_left.value || "0"), 0), 100);

    preview_custom.style.borderRadius = t + "% " + r + "% " + b + "% " + l + "%";

    preview_top.value = t;
    preview_right.value = r;
    preview_bottom.value = b;
    preview_left.value = l;

    localStorage.setItem("options_top", t);
    localStorage.setItem("options_right", r)
    localStorage.setItem("options_bottom", b);
    localStorage.setItem("options_left", l);
};

// ANIMATING

let timeout;

function animating(type, background, foreground, overlays) {
    preview_background.style.transition = preview_foreground.style.transition = "transform 800ms";
    preview_custom.style.transition = preview_masking.style.transition = "transform 800ms";
    preview_background.style.transform = background;
    preview_foreground.style.transform = foreground;
    preview_custom.style.transform = overlays;
    preview_masking.style.transform = overlays;

    document.getElementById("options_top").classList.remove("active");
    document.getElementById("options_right").classList.remove("active");
    document.getElementById("options_bottom").classList.remove("active");
    document.getElementById("options_left").classList.remove("active");
    document.getElementById("options_push").classList.remove("active");
    document.getElementById("options_pull").classList.remove("active");
    document.getElementById("options_lean").classList.remove("active");
    document.getElementById("options_rean").classList.remove("active");
    document.getElementById("options_" + type).classList.add("active");

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(function () {
        preview_background.style.transform = preview_foreground.style.transform = "";
        preview_custom.style.transform = preview_masking.style.transform = "";
        document.getElementById("options_" + type).classList.remove("active");
    }, 800);
}

document.getElementById("options_top").onclick = () => animating("top", "translateY(-64px)", "translateY(-72px)", "translateY(-48px)");
document.getElementById("options_right").onclick = () => animating("right", "translateX(64px)", "translateX(72px)", "translateX(48px)");
document.getElementById("options_bottom").onclick = () => animating("bottom", "translateY(64px)", "translateY(72px)", "translateY(48px)");
document.getElementById("options_left").onclick = () => animating("left", "translateX(-64px)", "translateX(-72px)", "translateX(-48px)");
document.getElementById("options_push").onclick = () => animating("push", "scale(0.65)", "scale(0.55)", "scale(0.75)");
document.getElementById("options_pull").onclick = () => animating("pull", "scale(1.35)", "scale(1.45)", "scale(1.25)");
document.getElementById("options_lean").onclick = () => animating("lean", "rotate(-15deg)", "rotate(-30deg)", "rotate(-45deg)");
document.getElementById("options_rean").onclick = () => animating("rean", "rotate(15deg)", "rotate(30deg)", "rotate(45deg)");

// ADVANCED

options_ghost.onclick = function () {
    options_ghost.classList.toggle("active");
    preview_custom.style.transition = preview_masking.style.transition = "opacity 200ms";
    preview_custom.style.opacity = preview_masking.style.opacity = (options_ghost.classList.contains("active")) ? "0.8" : "1";
    options_ghost.classList.contains("active") ? localStorage.setItem("options_ghost", "true") : localStorage.removeItem("options_ghost");
};

options_ruler.onclick = function () {
    options_ruler.classList.toggle("active");
    preview_ruler.style.transition = "opacity 200ms";
    preview_ruler.style.opacity = (options_ruler.classList.contains("active")) ? "1" : "0";
    options_ruler.classList.contains("active") ? localStorage.setItem("options_ruler", "true") : localStorage.removeItem("options_ruler");
};

options_shrink.onclick = function () {
    options_shrink.classList.toggle("active");
    preview_content.style.transition = "transform 200ms";
    preview_content.style.transform = (options_shrink.classList.contains("active")) ? "scale(0.5)" : "scale(1.0)";
    options_shrink.classList.contains("active") ? localStorage.setItem("options_shrink", "true") : localStorage.removeItem("options_shrink");
};

options_share.onclick = function () {
    if (navigator.share !== undefined) {
        navigator.share({
            url: window.location.href
        });
    } else {
        prompt("Share this Adaptive Icon with this link: ", window.location.href);
    }
};

// BROWSING

async function browsing(target, file) {
    if (!file || (file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg")) return;

    const form = new FormData();
    form.append("image", file);

    const options = {
        method: "POST",
        headers: new Headers({
            "Authorization": "Client-ID 951e3794aa43d85",
        }),
        body: form
    };

    document.getElementById("options_" + target + "_browse").style.display = "none";
    document.getElementById("options_" + target + "_spinner").style.display = "block";

    const response = await fetch("https://api.imgur.com/3/image", options).then(data => data.json());

    document.getElementById("options_" + target + "_browse").style.display = "block";
    document.getElementById("options_" + target + "_spinner").style.display = "none";

    document.getElementById("options_" + target + "_input").value = response.data.link;
    document.getElementById("options_" + target + "_input").oninput();

    upload.push(target + ":" + response.data.link);
    localStorage.setItem("upload", JSON.stringify(upload));
    appending(true, target == "background" ? response.data.link : null, target == "foreground" ? response.data.link : null);
}

options_background_browse.onclick = options_foreground_browse.onclick = function () {
    const target = this.id.substring(8, 18);
    const input = document.createElement("input");
    input.type = "file";
    document.body.appendChild(input);
    input.onchange = (event) => browsing(target, (event.target.files || event.dataTransfer.files || [])[0]);
    input.click();
    document.body.removeChild(input);
};

document.ondragover = function (event) {
    if (event) event.preventDefault();
    document.getElementById("drop").style.display = "block";
};

document.ondragleave = function (event) {
    if (event) event.preventDefault();
    document.getElementById("drop").style.display = "none";
};

document.ondrop = function (event) {
    if (event) event.stopPropagation();
    if (event) event.preventDefault();
    const target = (event.y >= window.innerHeight / 2) ? "foreground" : "background";
    document.getElementById("drop").style.display = "none";
    browsing(target, (event.target.files || event.dataTransfer.files || [])[0]);
};

// MOVING

preview_moving.ontouchstart = preview_moving.ontouchmove = preview_moving.onmouseenter = preview_moving.onmousemove = function (event) {
    if (event) event.preventDefault();

    const position = preview_moving.getBoundingClientRect();
    const x = Math.min(100, Math.max(-100, ((event.pageX || event.targetTouches[0].pageX) - (position.width / 2) - position.left)));
    const y = Math.min(100, Math.max(-100, ((event.pageY || event.targetTouches[0].pageY) - (position.height / 2) - position.top)));

    preview_background.style.transition = preview_foreground.style.transition = "";
    preview_custom.style.transition = preview_masking.style.transition = "";
    preview_background.style.transform = "translate(" + (x * 0.64) + "px, " + (y * 0.64) + "px)";
    preview_foreground.style.transform = "translate(" + (x * 0.72) + "px, " + (y * 0.72) + "px)";
    preview_custom.style.transform = "translate(" + (x * 0.48) + "px, " + (y * 0.48) + "px)";
    preview_masking.style.transform = "translate(" + (x * 0.48) + "px, " + (y * 0.48) + "px)";
};

preview_moving.ontouchend = preview_moving.ontouchcancel = preview_moving.onmouseleave = preview_moving.onmouseout = function (event) {
    if (event) event.preventDefault();

    preview_background.style.transition = preview_foreground.style.transition = "transform 200ms";
    preview_custom.style.transition = preview_masking.style.transition = "transform 200ms";
    preview_background.style.transform = preview_foreground.style.transform = "";
    preview_custom.style.transform = preview_masking.style.transform = "";
};

// APPENDING

function appending(custom, background, foreground) {
    const examples_item = document.createElement("div");
    examples_item.classList.add("examples_item");
    custom ? examples_items.insertBefore(examples_item, examples_items.firstChild) : examples_items.appendChild(examples_item);

    const examples_layer = document.createElement("div");
    examples_layer.classList.add("examples_layer");
    examples_item.appendChild(examples_layer);

    examples_layer.onclick = function () {
        if (background) options_background_input.value = background == "/background.png" ? "" : background;
        if (foreground) options_foreground_input.value = foreground == "/foreground.png" ? "" : foreground;
        options_background_input.oninput();
    };

    if (background) {
        const examples_background = document.createElement("img");
        examples_background.classList.add("examples_image");
        examples_background.src = background;
        examples_layer.appendChild(examples_background);
    }

    if (foreground) {
        const examples_foreground = document.createElement("img");
        examples_foreground.classList.add("examples_image");
        examples_foreground.src = foreground;
        examples_layer.appendChild(examples_foreground);
    }

    if (custom) {
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        icon.setAttributeNS(null, "viewBox", "0 0 24 24");
        path.setAttributeNS(null, "d", "M17.66 6.34a2 2 0 010 2.83L14.83 12l2.83 2.83a2 2 0 11-2.83 2.83L12 14.83l-2.83 2.83a2 2 0 11-2.83-2.83L9.17 12 6.34 9.17a2 2 0 012.83-2.83L12 9.17l2.83-2.83a2 2 0 012.83 0z");
        icon.classList.add("examples_remove");
        icon.appendChild(path);
        examples_item.appendChild(icon);

        icon.onclick = function () {
            examples_item.classList.add("active");
            if (upload.indexOf("background:" + background) > -1) upload.splice(upload.indexOf("background:" + background), 1);
            if (upload.indexOf("foreground:" + foreground) > -1) upload.splice(upload.indexOf("foreground:" + foreground), 1);
            localStorage.setItem("upload", JSON.stringify(upload));
        };
    }
}

// EXAMPLES

async function examples() {
    const payload = await fetch("/icons.json").then(data => data.json());

    const icons = payload.icons;
    const users = payload.users;

    for (let counter = 0; counter < upload.length; counter++) {
        const layer = upload[counter].substring(0, 10);
        const image = upload[counter].substring(11);
        appending(true, layer == "background" ? image : null, layer == "foreground" ? image : null);
    }

    for (let counter = 0; counter < icons.length; counter++) {
        appending(false, icons[counter].background || "/background.png", icons[counter].foreground || "/foreground.png");
    }

    examples_items.onscroll = function () {
        examples_left.style.opacity = examples_items.scrollLeft <= 0 ? "0" : "1";
        examples_right.style.opacity = examples_items.scrollLeft >= examples_items.scrollWidth - examples_items.offsetWidth ? "0" : "1";
    };

    options_background_input.oninput = options_foreground_input.oninput = function () {
        const bg = options_background_input.value;
        const fg = options_foreground_input.value;

        preview_background.src = bg.startsWith("https://") ? bg : (!bg ? "/background.png" : "");
        preview_foreground.src = fg.startsWith("https://") ? fg : (!fg ? "/foreground.png" : "");
        document.getElementById("originator").style.display = "none";

        for (let counter = 0; counter < icons.length; counter++) {
            if (icons[counter].background === bg && icons[counter].foreground === fg) {
                document.getElementById("originator").style.display = "block";
                document.getElementById("originator_image").src = users[icons[counter].user].image;
                document.getElementById("originator_title").innerText = "Created by " + users[icons[counter].user].name + " (@" + icons[counter].user + ")";
                document.getElementById("originator").href = users[icons[counter].user].link;
            }
        }

        window.history.replaceState("", document.title, ((!bg || !fg) ? ("/") : ("/#/bg=" + bg + "/fg=" + fg)));
    };

    const bg = window.location.hash.substr(window.location.hash.indexOf("/bg=") + 4, window.location.hash.indexOf("/fg=") - 5);
    const fg = window.location.hash.substr(window.location.hash.indexOf("/fg=") + 4);

    options_background_input.value = bg || "";
    options_foreground_input.value = fg || "";
    options_background_input.oninput();
}

examples();

// THEME

window.matchMedia("(prefers-color-scheme: dark)").onchange = function () {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "#181818" : "#FFFFFF";
    document.querySelector("meta[name=theme-color]").setAttribute("content", theme);
};

const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "#181818" : "#FFFFFF";
document.querySelector("meta[name=theme-color]").setAttribute("content", theme);

// STORAGE

if (localStorage.getItem("options_top")) preview_top.value = localStorage.getItem("options_top");
if (localStorage.getItem("options_right")) preview_right.value = localStorage.getItem("options_right");
if (localStorage.getItem("options_bottom")) preview_bottom.value = localStorage.getItem("options_bottom");
if (localStorage.getItem("options_left")) preview_left.value = localStorage.getItem("options_left");
if (localStorage.getItem("options_ghost")) options_ghost.onclick();
if (localStorage.getItem("options_ruler")) options_ruler.onclick();
if (localStorage.getItem("options_shrink")) options_shrink.onclick();
masking(localStorage.getItem("options_mask") || "apple");
preview_top.oninput();

// WORKER

if ("serviceWorker" in navigator) navigator.serviceWorker.register("/worker.js");