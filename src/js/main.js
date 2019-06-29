var myUI, clusterNames;

var bean = "<button class='beaners'>➕</>";

clusterNames = [
	"display",bean,"as","separate","items","as","different rows","for the hell ovit","we","can","this","work","correctly","Jason Graziano"
];

myUI = {
	init: () => {
        myUI.loadout();
	},
	loadout: () => {
		var header = createEle("header"),
			container = createEle("div"),
			frame = createEle("div"),			
			footer = createEle("footer");

        header.innerHTML = "HEADER";

		frame.className = "frame";

        for (var c = 0; c < clusterNames.length; c++) {
			var cluster = createEle("p");
 
			cluster.innerHTML = clusterNames[c];
			cluster.className = "clusters";
			cluster.id = "cluster_" + c;

			frame.append(cluster);
        }

        container.className = "container";
        container.append(frame);

        footer.innerHTML = "FOOTER";

		dvContain.append(header, container, footer);
	}
};

window.onload = () => {
	myUI.init();
};