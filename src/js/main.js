var myUI;

myUI = {
	init: () => {
        myUI.loadout();
	},
	loadout: () => {
		var tds = byTag("td");

        dvContain1.append("menu");
        myUI.navToggleFunc(tds);
		dvContain3.append("output");
	},
	navToggleFunc: (tds) => {
		var navToggleBtn = createEle("button");

        navToggleBtn.innerHTML = "\u2194";
        navToggleBtn.className = "navToggleBtn";
        navToggleBtn.onclick = myUI.doToggle(navToggleBtn, tds);

        dvContain2.append(navToggleBtn);
	},
	doToggle: (navToggleBtn, tds) => {
		return () => {
console.log(tds);
		}

	}
};

window.onload = () => {
	myUI.init();
};