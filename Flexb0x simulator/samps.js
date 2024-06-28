function gap() {
    let c = document.getElementById("gap").value;
    let g = document.getElementById("flex-cont");
    g.style.gap = `${c}px`;
    console.log(`Gap: ${g.style.gap}`);
}

function flxdirection(c) {
    let d = document.getElementById("flex-cont");
    if (c == 1) {
        d.style.flexDirection = "row";
    } else if (c == 2) {
        d.style.flexDirection = "column";
    }
    console.log(`Flex-Direction: ${d.style.flexDirection}`);
}

function justifycont(c) {
    let j = document.getElementById("flex-cont");
    if (c == 1) {
        j.style.justifyContent = "flex-start";
    } else if (c == 2) {
        j.style.justifyContent = "center";
    } else if (c == 3) {
        j.style.justifyContent = "flex-end";
    } else if (c == 4) {
        j.style.justifyContent = "space-between";
    } else if (c == 5) {
        j.style.justifyContent = "space-around";
    } else if (c == 6) {
        j.style.justifyContent = "space-evenly";
    }
    console.log(`Justify-Content: ${j.style.justifyContent}`);
}

function alignitems(c) {
    let a = document.getElementById("flex-cont");
    if (c == 1) {
        a.style.alignItems = "flex-start";
    } else if (c == 2) {
        a.style.alignItems = "center";
    } else if (c == 3) {
        a.style.alignItems = "flex-end";
    }
    console.log(`Align-Items: ${a.style.alignItems}`);
}

function flexgrow(c) {
    let grow1 = document.getElementById("grow1").value;
    let grow2 = document.getElementById("grow2").value;
    let grow3 = document.getElementById("grow3").value;
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");

    if (c == 1) {
        box1.style.flexGrow = grow1;
    } else if (c == 2) {
        box2.style.flexGrow = grow2;
    } else if (c == 3) {
        box3.style.flexGrow = grow3;
    } else if (c == 0) {
        box1.style.flexGrow = '0';
        box2.style.flexGrow = '0';
        box3.style.flexGrow = '0';
    }
    console.log(`Flex-Grow of Box 1: ${box1.style.flexGrow}`);
    console.log(`Flex-Grow of Box 2: ${box2.style.flexGrow}`);
    console.log(`Flex-Grow of Box 3: ${box3.style.flexGrow}`);
}

function fullreset() {
    let r = document.getElementById("flex-cont");
    r.style.gap = '0';
    document.getElementById("gap").value = '';
    r.style.flexDirection = "row";
    r.style.justifyContent = "flex-start";
    r.style.alignItems = "flex-start";

    document.getElementById("grow1").value = '';
    document.getElementById("grow2").value = '';
    document.getElementById("grow3").value = '';
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");

    box1.style.flexGrow = '0';
    box2.style.flexGrow = '0';
    box3.style.flexGrow = '0';
}
