let creator;

function image(url, height, width) {
    url = url || "";
    return "https://images.weserv.nl/?url=" + url.replace("https://", "").replace("http://", "") + "&h=" + height + "&w=" + width + "&t=squaredown";
}

document.getElementById("masks_google").onclick = () => document.getElementById("icon_mask").className = "google";
document.getElementById("masks_apple").onclick = () => document.getElementById("icon_mask").className = "apple";
document.getElementById("masks_microsoft").onclick = () => document.getElementById("icon_mask").className = "microsoft";
document.getElementById("masks_samsung").onclick = () => document.getElementById("icon_mask").className = "samsung";

let c = 0;
let c0 = 24;
let c1 = 24;
let c2 = 24;
let c3 = 24;
let c4 = 24;
let duration = 320;

document.getElementById("corner").onclick = function () {
    c = (c === 4) ? 0 : c + 1;
    document.getElementById("corner_1").className = (c != 0 && c != 1) ? "active" : "";
    document.getElementById("corner_2").className = (c != 0 && c != 2) ? "active" : "";
    document.getElementById("corner_3").className = (c != 0 && c != 3) ? "active" : "";
    document.getElementById("corner_4").className = (c != 0 && c != 4) ? "active" : "";

    if (c === 0) document.getElementById("radius_input").value = c0 / 2;
    if (c === 1) document.getElementById("radius_input").value = c1 / 2;
    if (c === 2) document.getElementById("radius_input").value = c2 / 2;
    if (c === 3) document.getElementById("radius_input").value = c3 / 2;
    if (c === 4) document.getElementById("radius_input").value = c4 / 2;

    const value = parseInt(document.getElementById("radius_input").value);
    document.getElementById("radius_input").value;
    document.getElementById("radius_trend").style.width = (value * 4) + "px";
    document.getElementById("radius_thumb").style.transform = "translateX(" + (value * 4) + "px";
};

document.getElementById("radius_input").oninput = function () {
    const value = parseInt(document.getElementById("radius_input").value) * 2;

    if (c === 0) c0 = c1 = c2 = c3 = c4 = value;
    if (c === 1) c1 = value;
    if (c === 2) c2 = value;
    if (c === 3) c3 = value;
    if (c === 4) c4 = value;

    document.getElementById("radius_trend").style.width = (value * 2) + "px";
    document.getElementById("radius_thumb").style.transform = "translateX(" + (value * 2) + "px";
    document.getElementById("icon_cover").style.borderRadius = (192 + c1) + "px " + (192 + c2) + "px " + (192 + c3) + "px " + (192 + c4) + "px ";
    document.getElementById("icon_shadow").style.borderRadius = c1 + "px " + c2 + "px " + c3 + "px " + c4 + "px ";
};

document.getElementById("radius_input").oninput();

document.getElementById("example_custom").onclick = function () {
    document.getElementById("blocker").className = "active";
    document.getElementById("custom").className = "active";
    document.getElementById("blocker").onclick = document.getElementById("custom_action").onclick = function () {
        document.getElementById("blocker").className = "";
        document.getElementById("custom").className = "";
    };
};

let down, downX, downY, deltaX, deltaY, moved;

document.getElementById("icon_action").ontouchstart = document.getElementById("icon_action").onmousedown = function (event) {
    moved = false;
    down = true;
    deltaX = 0;
    deltaY = 0;
    downX = event.offsetX || event.touches[0].pageX;
    downY = event.offsetY || event.touches[0].pageY;
    document.getElementById("icon_background").style.transition = "transform 0ms";
    document.getElementById("icon_foreground").style.transition = "transform 0ms";
};

document.getElementById("icon_action").ontouchmove = document.getElementById("icon_action").onmousemove = function (event) {
    if (!down) return;
    moved = true;
    deltaX = event.offsetX || event.touches[0].pageX;
    deltaY = event.offsetY || event.touches[0].pageY;
    deltaX = Math.max(-64, Math.min(64, deltaX - downX));
    deltaY = Math.max(-64, Math.min(64, deltaY - downY));
    document.getElementById("icon_background").style.transition = "transform 0ms";
    document.getElementById("icon_foreground").style.transition = "transform 0ms";
    document.getElementById("icon_background").style.transform = "translate(" + deltaX / 4 + "px, " + deltaY / 4 + "px)";
    document.getElementById("icon_foreground").style.transform = "translate(" + deltaX / 2 + "px, " + deltaY / 2 + "px)";
    event.preventDefault();
};

document.getElementById("icon_action").ontouchend = document.getElementById("icon_action").ontouchcancel = document.getElementById("icon_action").onmouseup = document.getElementById("icon_action").onmouseout = function (event) {
    down = false;
    document.getElementById("icon_background").style.transition = "transform 200ms";
    document.getElementById("icon_background").style.transform = "translate(0, 0)";
    document.getElementById("icon_foreground").style.transition = "transform 200ms";
    document.getElementById("icon_foreground").style.transform = "translate(0, 0)";
    setTimeout(function () {
        document.getElementById("icon_background").style.transition = null;
        document.getElementById("icon_background").style.transform = null;
        document.getElementById("icon_foreground").style.transition = null;
        document.getElementById("icon_foreground").style.transform = null;
    }, 200);
};

document.getElementById("share").onclick = function () {
    if (navigator.share !== undefined) {
        navigator.share({
            url: window.location.href
        });
        return;
    }

    try {
        const copy = document.createElement("input");
        copy.value = window.location.href;
        document.body.appendChild(copy);
        copy.select();
        document.execCommand("copy");
        document.body.removeChild(copy);
        document.getElementById("share").innerText = "Link copied!";
        document.getElementById("share").style.color = "#66BB6A";
        setTimeout(function () {
            document.getElementById("share").innerText = "Share this icon";
            document.getElementById("share").style.color = "";
        }, 800);
    } catch (e) {
        prompt("Copy this link: ", window.location.href);
    }
};

document.getElementById("animation_top").onclick = document.getElementById("animation_right").onclick = document.getElementById("animation_bottom").onclick = document.getElementById("animation_left").onclick = document.getElementById("animation_push").onclick = document.getElementById("animation_pop").onclick = function () {
    const event = this.id.split("_")[1];
    document.getElementById("icon_background").style.transition = "transform " + duration + "ms";
    document.getElementById("icon_foreground").style.transition = "transform " + duration + "ms";
    document.getElementById("icon_cover").style.transition = "transform " + duration + "ms";
    document.getElementById("icon_shadow").style.transition = "transform " + duration + "ms";
    document.getElementById("icon_mask").style.transition = "transform " + duration + "ms";

    document.getElementById("icon").classList.add(event);
    setTimeout(() => document.getElementById("icon").classList.remove(event), duration);
};

document.getElementById("option_customize").onclick = function () {
    document.getElementById("option").className = "customize";
    document.getElementById("icon_mask").style.display = "none";
    document.getElementById("icon_cover").style.display = "block";
    document.getElementById("icon_shadow").style.display = "block";
};

document.getElementById("option_masks").onclick = function () {
    document.getElementById("option").className = "";
    document.getElementById("icon_mask").style.display = "block";
    document.getElementById("icon_cover").style.display = "none";
    document.getElementById("icon_shadow").style.display = "none";
};

document.getElementById("option_animation").onclick = function () {
    document.getElementById("option").className = "animation";
};

document.getElementById("animation_duration").oninput = function () {
    let value = (document.getElementById("animation_duration").value || "0").replace(/[^0-9]/g, "");
    value = Math.min(Math.max(parseInt(value), 0), 1000);
    document.getElementById("animation_duration").value = "";
    document.getElementById("animation_duration").value = value;
    duration = value;
};

document.onkeyup = function (event) {
    if (document.activeElement.tagName === "INPUT") return;

    const key = event.which || event.keyCode || 0;
    if (key === 37) document.getElementById("animation_left").onclick();
    if (key === 38) document.getElementById("animation_top").onclick();
    if (key === 39) document.getElementById("animation_right").onclick();
    if (key === 40) document.getElementById("animation_bottom").onclick();
    if (key === 188) document.getElementById("animation_push").onclick();
    if (key === 190) document.getElementById("animation_pop").onclick();
    if (key === 32) {
        document.getElementById("animation_top").onclick();
        setTimeout(() => document.getElementById("animation_right").onclick(), duration);
        setTimeout(() => document.getElementById("animation_bottom").onclick(), duration * 2);
        setTimeout(() => document.getElementById("animation_left").onclick(), duration * 3);
        setTimeout(() => document.getElementById("animation_push").onclick(), duration * 5);
        setTimeout(() => document.getElementById("animation_pop").onclick(), duration * 6);
    }
};

document.ondragover = function (event) {
    document.getElementById("drop").className = "active";
    event.preventDefault();
};

document.ondragleave = function (event) {
    document.getElementById("drop").className = "";
    event.preventDefault();
};

document.ondrop = function (event) {
    const target = (event.y >= window.innerHeight / 2) ? "foreground" : "background";
    document.getElementById("drop").className = "";
    event.stopPropagation();
    event.preventDefault();

    const files = event.target.files || event.dataTransfer.files;
    if (!files || !files[0] || (files[0].type !== "image/png" && files[0].type !== "image/jpeg" && files[0].type !== "image/jpg")) return;

    const reader = new FileReader();
    reader.onload = function (file) {
        document.getElementById("custom_" + target + "_input").value = "file://" + files[0].name;
        document.getElementById("custom_" + target + "_input").oninput();

        const image = new Image();
        image.onload = function () {
            const canvas = document.createElement("canvas");
            canvas.height = image.height / Math.min(image.height, image.width) * 400;
            canvas.width = image.width / Math.min(image.height, image.width) * 400;

            const context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            document.getElementById("icon_" + target).src = canvas.toDataURL(files[0].type, 1.0);
        };

        image.src = file.target.result;
    };

    reader.readAsDataURL(files[0]);
};

document.getElementById("custom_background_browse").onclick = document.getElementById("custom_foreground_browse").onclick = function () {
    const target = this.id.substring(7, 17);
    const input = document.createElement("input");
    input.type = "file";
    document.body.appendChild(input);

    input.onchange = function (event) {
        const files = event.target.files || event.dataTransfer.files;
        if (!files || !files[0] || (files[0].type !== "image/png" && files[0].type !== "image/jpeg" && files[0].type !== "image/jpg")) return;

        const reader = new FileReader();
        reader.onload = function (file) {
            document.getElementById("custom_" + target + "_input").value = "file://" + files[0].name;
            document.getElementById("custom_" + target + "_input").oninput();

            const image = new Image();
            image.onload = function () {
                const canvas = document.createElement("canvas");
                canvas.height = image.height / Math.min(image.height, image.width) * 400;
                canvas.width = image.width / Math.min(image.height, image.width) * 400;

                const context = canvas.getContext("2d");
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
                document.getElementById("icon_" + target).src = canvas.toDataURL(files[0].type, 1.0);
            };

            image.src = file.target.result;
        };

        reader.readAsDataURL(files[0]);
    };

    input.click();
    document.body.removeChild(input);
};

fetch("/icons.json").then(function (response) {
    return response.json();
}).then(function (response) {
    const icons = response.icons;
    const users = response.users;

    for (let counter = 0; counter < icons.length; counter++) {
        const icon = icons[counter];
        const user = users[icon.user];

        const element = document.createElement("div");
        element.className = "example";
        document.getElementById("example").appendChild(element);

        creator = document.createElement("img");
        creator.src = image(icon.background, 400, 400);
        element.appendChild(creator);

        creator = document.createElement("img");
        creator.src = image(icon.foreground, 400, 400);
        element.appendChild(creator);

        element.onclick = function () {
            document.getElementById("custom_background_input").value = icon.background;
            document.getElementById("custom_foreground_input").value = icon.foreground;
            document.getElementById("custom_background_input").oninput();
        };
    }

    document.getElementById("custom_background_input").oninput = document.getElementById("custom_foreground_input").oninput = function () {
        const bg = document.getElementById("custom_background_input").value;
        const fg = document.getElementById("custom_foreground_input").value;

        if (bg === "https://adapticon.tooo.io/background.png" && fg === "https://adapticon.tooo.io/foreground.png") {
            window.history.replaceState("", document.title, "/");
        } else if ((!bg.startsWith("http://") && !bg.startsWith("https://")) || (!fg.startsWith("http://") && !fg.startsWith("https://"))) {
            window.history.replaceState("", document.title, "/");
            return;
        } else {
            window.history.replaceState("", document.title, "/#/bg=" + bg + "/fg=" + fg);
        }

        document.getElementById("icon_background").src = image(bg, 400, 400);
        document.getElementById("icon_foreground").src = image(fg, 400, 400);
        document.getElementById("credit").style.display = "none";

        for (let counter = 0; counter < icons.length; counter++) {
            if (icons[counter].background === bg && icons[counter].foreground === fg) {
                document.getElementById("credit").style.display = "block";
                document.getElementById("credit_image").src = image(users[icons[counter].user].image, 160, 160);
                document.getElementById("credit_title").innerText = "Created by " + users[icons[counter].user].name;
                document.getElementById("credit_subtitle").innerText = "@" + icons[counter].user;
                document.getElementById("credit").onclick = function () {
                    window.open(users[icons[counter].user].link);
                };
            }
        }
    };

    const hash = window.location.hash || "";
    const bg = hash.substr(hash.indexOf("/bg=") + 4, hash.indexOf("/fg=") - 5);
    const fg = hash.substr(hash.indexOf("/fg=") + 4);

    if ((bg.startsWith("http://") || bg.startsWith("https://")) && (fg.startsWith("http://") || fg.startsWith("https://"))) {
        document.getElementById("custom_background_input").value = bg;
        document.getElementById("custom_foreground_input").value = fg;
    } else {
        document.getElementById("custom_background_input").value = "https://adapticon.tooo.io/background.png";
        document.getElementById("custom_foreground_input").value = "https://adapticon.tooo.io/foreground.png";
    }

    document.getElementById("custom_background_input").oninput();
});

(function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");

ga("create", "UA-96123574-1", "auto");
ga("set", "anonymizeIp", true);
ga("send", "pageview");

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/worker.js");
}