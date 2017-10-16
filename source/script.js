let creator;

function image(url, height, width) {
    url = url || "";
    return "https://images.weserv.nl/?url=" + url.replace("https://", "").replace("http://", "") + "&h=" + height + "&w=" + width + "&t=squaredown";
}

let corner = 0;
let corner_1 = 24;
let corner_2 = 24;
let corner_3 = 24;
let corner_4 = 24;

document.getElementById("corner").onclick = function () {
    corner = (corner === 4) ? 0 : corner + 1;
    document.getElementById("corner_1").className = (corner != 0 && corner != 1) ? "active" : "";
    document.getElementById("corner_2").className = (corner != 0 && corner != 2) ? "active" : "";
    document.getElementById("corner_3").className = (corner != 0 && corner != 3) ? "active" : "";
    document.getElementById("corner_4").className = (corner != 0 && corner != 4) ? "active" : "";
};

document.getElementById("radius_input").oninput = function () {
    const value = parseInt(document.getElementById("radius_input").value) * 2;

    if (corner === 0) corner_1 = corner_2 = corner_3 = corner_4 = value;
    if (corner === 1) corner_1 = value;
    if (corner === 2) corner_2 = value;
    if (corner === 3) corner_3 = value;
    if (corner === 4) corner_4 = value;

    document.getElementById("radius_trend").style.width = (value * 2) + "px";
    document.getElementById("radius_thumb").style.transform = "translateX(" + (value * 2) + "px";
    document.getElementById("icon_cover").style.borderRadius = (192 + corner_1) + "px " + (192 + corner_2) + "px " + (192 + corner_3) + "px " + (192 + corner_4) + "px ";
    document.getElementById("icon_shadow").style.borderRadius = corner_1 + "px " + corner_2 + "px " + corner_3 + "px " + corner_4 + "px ";
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
        document.getElementById("copied").style.display = "block";
        setTimeout(function () {
            document.getElementById("copied").style.display = "none";
        }, 800);
    } catch (e) {
        prompt("Copy this link: ", window.location.href);
    }
};

document.getElementById("animation_top").onclick = function () {
    document.getElementById("icon").classList.add("top");
    setTimeout(() => document.getElementById("icon").classList.remove("top"), 320);
};

document.getElementById("animation_right").onclick = function () {
    document.getElementById("icon").classList.add("right");
    setTimeout(() => document.getElementById("icon").classList.remove("right"), 320);
};

document.getElementById("animation_bottom").onclick = function () {
    document.getElementById("icon").classList.add("bottom");
    setTimeout(() => document.getElementById("icon").classList.remove("bottom"), 320);
};

document.getElementById("animation_left").onclick = function () {
    document.getElementById("icon").classList.add("left");
    setTimeout(() => document.getElementById("icon").classList.remove("left"), 320);
};

document.getElementById("animation_push").onclick = function () {
    document.getElementById("icon").classList.add("push");
    setTimeout(() => document.getElementById("icon").classList.remove("push"), 320);
};

document.getElementById("animation_pop").onclick = function () {
    document.getElementById("icon").classList.add("pop");
    setTimeout(() => document.getElementById("icon").classList.remove("pop"), 320);
};

document.onkeyup = function (event) {
    const key = event.which || event.keyCode || 0;
    if (key === 37) document.getElementById("animation_left").onclick();
    if (key === 38) document.getElementById("animation_top").onclick();
    if (key === 39) document.getElementById("animation_right").onclick();
    if (key === 40) document.getElementById("animation_bottom").onclick();
    if (key === 188) document.getElementById("animation_push").onclick();
    if (key === 190) document.getElementById("animation_pop").onclick();
    if (key === 32) {
        setTimeout(() => document.getElementById("animation_top").onclick(), 320);
        setTimeout(() => document.getElementById("animation_right").onclick(), 640);
        setTimeout(() => document.getElementById("animation_bottom").onclick(), 960);
        setTimeout(() => document.getElementById("animation_left").onclick(), 1280);
        setTimeout(() => document.getElementById("animation_push").onclick(), 1920);
        setTimeout(() => document.getElementById("animation_pop").onclick(), 2240);
    }
};

document.getElementById("custom_background_input").oninput = document.getElementById("custom_foreground_input").oninput = function () {
    window.location.replace("#/bg=" + document.getElementById("custom_background_input").value + "/fg=" + document.getElementById("custom_foreground_input").value);
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
            window.location.replace("#/bg=" + icon.background + "/fg=" + icon.foreground);
        };
    }

    window.onhashchange = function () {
        const hash = window.location.hash || "#/bg=https://adapticon.tooo.io/background.png/fg=https://adapticon.tooo.io/foreground.png";
        const bg = hash.substr(hash.indexOf("/bg=") + 4, hash.indexOf("/fg=") - 5);
        const fg = hash.substr(hash.indexOf("/fg=") + 4);
        document.getElementById("icon_background").src = image(bg, 400, 400);
        document.getElementById("icon_foreground").src = image(fg, 400, 400);
        document.getElementById("custom_background_input").value = bg;
        document.getElementById("custom_foreground_input").value = fg;
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

    window.onhashchange();
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