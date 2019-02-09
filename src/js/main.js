var myUI;

myUI = {
	init: () => {
        myUI.loadout();
	},
	loadout: () => {
        dvContain1.append("menu");
		dvContain2.append("nav");
		dvContain3.append("output");
	}
};

window.onload = () => {
	myUI.init();
};