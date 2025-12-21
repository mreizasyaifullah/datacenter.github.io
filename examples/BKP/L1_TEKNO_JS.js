////////////// IMAGE VIO BAS /////////////
// var img = document.getElementById('wrapper').firstChild;
// img.onload = function() {
//     if(img.height < img.width) {
//         img.height = '20%';
//         img.width = 'auto';
//     }
// };

var onglobal;
var token = "";
var ACStat = Array(21).fill(false);
var ACPower = Array(21).fill(0);
var ACStr = ['ACINS1','ACINS2','ACCRC2','ACCRC1','ACM2','ACM1','ACRE2','ACRE3','ACRE1','ACSR8','ACSR7','ACSR6','ACSR5','ACSR4','ACSR3','ACSR9','ACBR1','ACSR2','ACSR1','ACADM2','ACADM1'];
var click = function (){

}
for(let i=0;i<9;i++){
	document.getElementById(''+(i+1)).innerHTML = ACStr[i];
	document.getElementById(''+(i+1)).onclick = function(){
		onOffReq(ACStr[i],i);
	}
}
for(let i=0;i<10;i++){
	document.getElementById(''+(i+1)+'a').innerHTML = ACStr[i+9];
	document.getElementById(''+(i+1)+'a').onclick = function(){
		onOffReq(ACStr[i+9],i+9);
	}
}

for(let i=0;i<2;i++){
	document.getElementById(''+(i+1)+'b').innerHTML = ACStr[i+19];
	document.getElementById(''+(i+1)+'b').onclick = function(){
		onOffReq(ACStr[i+19],i+19);
	}
}
var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText);
			token = JSON.parse(this.responseText);
		}
	};

xhttp.open("POST", "http://35.202.49.101:8080/api/auth/login", false);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send(JSON.stringify({'username': 'tekno@vioint.co.id', 'password': 'vio'}));

			var webSocket = new WebSocket("ws://35.202.49.101:8080/api/ws/plugins/telemetry?token=" + token["token"]);

			webSocket.onopen = function () {
					var object = {
							tsSubCmds: [
									{
											entityType: "DEVICE",
											entityId: "a145c370-d741-11e8-b2de-4be867fcc47c",//ACINS1
											scope: "LATEST_TELEMETRY",
											cmdId: 1
									},
									{
											entityType: "DEVICE",
											entityId: "0bf19e60-d75b-11e8-a085-4be867fcc47c",//ACINS2
											scope: "LATEST_TELEMETRY",
											cmdId: 2
									},
									{
											entityType: "DEVICE",
											entityId: "49cd5050-d75e-11e8-a085-4be867fcc47c",//ACCRC2
											scope: "LATEST_TELEMETRY",
											cmdId: 3
									},
									{
											entityType: "DEVICE",
											entityId: "422b45f0-d75e-11e8-a085-4be867fcc47c",//ACCRC1
											scope: "LATEST_TELEMETRY",
											cmdId: 4
									},
									{
											entityType: "DEVICE",
											entityId: "5515f480-d75e-11e8-a085-4be867fcc47c",//ACM2
											scope: "LATEST_TELEMETRY",
											cmdId: 5
									},
									{
											entityType: "DEVICE",
											entityId: "4fc4df00-d75e-11e8-a085-4be867fcc47c",//ACM1
											scope: "LATEST_TELEMETRY",
											cmdId: 6
									},
									{
											entityType: "DEVICE",
											entityId: "6f29ace0-d75e-11e8-a085-4be867fcc47c",//ACRE2
											scope: "LATEST_TELEMETRY",
											cmdId: 7
									},
									{
											entityType: "DEVICE",
											entityId: "7506d5c0-d75e-11e8-a085-4be867fcc47c",//ACRE3
											scope: "LATEST_TELEMETRY",
											cmdId: 8
									},
									{
											entityType: "DEVICE",
											entityId: "69941450-d75e-11e8-a085-4be867fcc47c",//ACRE1
											scope: "LATEST_TELEMETRY",
											cmdId: 9
									},
									{
											entityType: "DEVICE",
											entityId: "85d31ee0-d763-11e8-a085-4be867fcc47c",//ACSR8
											scope: "LATEST_TELEMETRY",
											cmdId: 10
									},
									{
											entityType: "DEVICE",
											entityId: "7ac2a1b0-d763-11e8-a085-4be867fcc47c",//ACSR7
											scope: "LATEST_TELEMETRY",
											cmdId: 11
									},
									{
											entityType: "DEVICE",
											entityId: "6ed001e0-d763-11e8-a085-4be867fcc47c",//ACSR6
											scope: "LATEST_TELEMETRY",
											cmdId: 12
									},
									{
											entityType: "DEVICE",
											entityId: "5dba3a60-d763-11e8-a085-4be867fcc47c",//ACSR5
											scope: "LATEST_TELEMETRY",
											cmdId: 13
									},
									{
											entityType: "DEVICE",
											entityId: "514e24d0-d763-11e8-a085-4be867fcc47c",//ACSR4
											scope: "LATEST_TELEMETRY",
											cmdId: 14
									},
									{
											entityType: "DEVICE",
											entityId: "47814b30-d763-11e8-a085-4be867fcc47c",//ACSR3
											scope: "LATEST_TELEMETRY",
											cmdId: 15
									},
									{
											entityType: "DEVICE",
											entityId: "8f61de10-d763-11e8-a085-4be867fcc47c",//ACSR9
											scope: "LATEST_TELEMETRY",
											cmdId: 16
									},
									{
											entityType: "DEVICE",
											entityId: "2858c300-d763-11e8-a085-4be867fcc47c",//ACBR1
											scope: "LATEST_TELEMETRY",
											cmdId: 17
									},
									{
											entityType: "DEVICE",
											entityId: "3930be30-d763-11e8-a085-4be867fcc47c",//ACSR2
											scope: "LATEST_TELEMETRY",
											cmdId: 18
									},
									{
											entityType: "DEVICE",
											entityId: "2feff7f0-d763-11e8-a085-4be867fcc47c",//ACSR1
											scope: "LATEST_TELEMETRY",
											cmdId: 19
									},
									{
											entityType: "DEVICE",
											entityId: "b175a9e0-d764-11e8-a085-4be867fcc47c",//ACADM2
											scope: "LATEST_TELEMETRY",
											cmdId: 20
									},
									{
											entityType: "DEVICE",
											entityId: "a5a1b5a0-d764-11e8-a085-4be867fcc47c",//ACADM1
											scope: "LATEST_TELEMETRY",
											cmdId: 21
									},
							],
							historyCmds: [],
							attrSubCmds: []
					};
					var data = JSON.stringify(object);
					webSocket.send(data);
					// alert("Message is sent: " + data);
			};

			webSocket.onmessage = function (event) {
					var received_msg = JSON.parse(event.data);
					onglobal = received_msg;

					//console.log("Message is received: " + JSON.stringify(received_msg));
					if(typeof received_msg["data"]["stat"] != 'undefined'){
						console.log(received_msg["data"]["stat"][0][1]);
							if(received_msg["data"]["stat"][0][1] == "1" && ACStat[received_msg["subscriptionId"]-1] == false){
								console.log("up");
								toggling(received_msg["subscriptionId"]-1);
								ACStat[received_msg["subscriptionId"]-1] = true;
							}else if(received_msg["data"]["stat"][0][1] == "0" && ACStat[received_msg["subscriptionId"]-1] == true){
								console.log("down");
								toggling(received_msg["subscriptionId"]-1);
								ACStat[received_msg["subscriptionId"]-1] = false;
							}
					}
					if(typeof received_msg["data"]["kwhTotal"] != 'undefined'){
							ACPower[received_msg["subscriptionId"]-1] = received_msg["data"]["kwhTotal"][0][1];
							for(let i=0;i<10;i++){
								if(document.getElementById('text'.concat(i+1+(i*2))).innerHTML == ACStr[received_msg["subscriptionId"]-1])
									addDetail((i+1+(i*2)),received_msg["subscriptionId"],ACStr[received_msg["subscriptionId"]-1]);
							}
					}
			};

			webSocket.onclose = function (event) {
					alert("Connection is closed!");
			};

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container;
var stats;
var rectLight;
var camera, cameraTarget, scene, renderer;
var loader = new THREE.STLLoader();
var raycaster = new THREE.Raycaster();
var hvacColor1, hvacColor2, hvacColor3, hvacColor4, hvacColor5, hvacColor6, hvacColor7, hvacColor8, hvacColor9;
var hvacColor1a, hvacColor2a, hvacColor3a, hvacColor4a, hvacColor5a, hvacColor6a, hvacColor7a, hvacColor8a, hvacColor9a, hvacColor10a;
var hvacColor1b, hvacColor2b;
var hvacColor1c, hvacColor2c, hvacColor3c, hvacColor4c, hvacColor5c, hvacColor6c;
var rectStatus = false;
		var cube1;
var cube2;
var cube3;
var cube4;
var selected = [];
var allHVAC = [];
var object1, object2, object3, object4, object5;
var objArray2 = [];
var objArray3 = [];
var objArray4 = [];
var objArray5 = [];
var isShiftDown = false;
//var selected;
var material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );
var hidden = false;
/////// HVAC IDENTITY LAYOUT 1 ///////
var color1 = 0x000000;
var color2 = 0x000000;
var color3 = 0x000000;
var color4 = 0x000000;
var color5 = 0x000000;
var color6 = 0x000000;
var color7 = 0x000000;
var color8 = 0x000000;
var color9 = 0x000000;
var propsLocal = {
	hvacColor1 : false,
	hvacColor2 : false,
	hvacColor3 : false,
	hvacColor4 : false,
	hvacColor5 : false,
	hvacColor6 : false,
	hvacColor7 : false,
	hvacColor8 : false,
	hvacColor9 : false
};

/////// HVAC IDENTITY LAYOUT 2 ///////
var color1a = 0x000000;
var color2a = 0x000000;
var color3a = 0x000000;
var color4a = 0x000000;
var color5a = 0x000000;
var color6a = 0x000000;
var color7a = 0x000000;
var color8a = 0x000000;
var color9a = 0x000000;
var color10a = 0x000000;
var propsLocal2 = {
	hvacColor1a : false,
	hvacColor2a : false,
	hvacColor3a : false,
	hvacColor4a : false,
	hvacColor5a : false,
	hvacColor6a : false,
	hvacColor7a : false,
	hvacColor8a : false,
	hvacColor9a : false,
	hvacColor10a : false
};

/////// HVAC IDENTITY LAYOUT 3 ///////
var color1b = 0x000000;
var color2b = 0x000000;
var propsLocal3 = {
	hvacColor1b : false,
	hvacColor2b : false
};

/////// HVAC IDENTITY LAYOUT 4 ///////
var color1c = 0x000000;
var color2c = 0x000000;
var color3c = 0x000000;
var color4c = 0x000000;
var color5c = 0x000000;
var color6c = 0x000000;
var propsLocal4 = {
	hvacColor1c : false,
	hvacColor2c : false,
	hvacColor3c : false,
	hvacColor4c : false,
	hvacColor5c : false,
	hvacColor6c : false
};

var xCam = 0;
var yCam = 0;
var zCam = 0;
var xPos = 0;
var yPos = 1;
var zPos = 1.7;

var camStat = 0;

		var projector;
var mouse = new THREE.Vector2(), INTERSECTED;

var clickStat = 0;

//shapes and ac details
var loops;
// end of shapes and ac details


////////////////////////////////////



////////////////////////////////////

init();
animate();

function mainView()	{
	console.log("BUTTON PRESSED");
	camera.position.set( 0, 1.7, 1 );
	xCam = 0, yCam = 0, zCam = 0;
	//setupGui();
	camStat = 0;
	for (i=0; i<30; i++)	{
		scene.remove(allHVAC[i]);
	}

	//shapes and ac details
	removeDetails(loops);
	document.getElementById('square').style.visibility = 'hidden';
	//end of shapes and ac details

	document.getElementById('1').style.visibility = 'hidden';
	document.getElementById('2').style.visibility = 'hidden';
	document.getElementById('3').style.visibility = 'hidden';
	document.getElementById('4').style.visibility = 'hidden';
	document.getElementById('5').style.visibility = 'hidden';
	document.getElementById('6').style.visibility = 'hidden';
	document.getElementById('7').style.visibility = 'hidden';
	document.getElementById('8').style.visibility = 'hidden';
	document.getElementById('9').style.visibility = 'hidden';

	document.getElementById('1a').style.visibility = 'hidden';
	document.getElementById('2a').style.visibility = 'hidden';
	document.getElementById('3a').style.visibility = 'hidden';
	document.getElementById('4a').style.visibility = 'hidden';
	document.getElementById('5a').style.visibility = 'hidden';
	document.getElementById('6a').style.visibility = 'hidden';
	document.getElementById('7a').style.visibility = 'hidden';
	document.getElementById('8a').style.visibility = 'hidden';
	document.getElementById('9a').style.visibility = 'hidden';
	document.getElementById('10a').style.visibility = 'hidden';

	document.getElementById('1b').style.visibility = 'hidden';
	document.getElementById('2b').style.visibility = 'hidden';

	document.getElementById('1c').style.visibility = 'hidden';
	document.getElementById('2c').style.visibility = 'hidden';
	document.getElementById('3c').style.visibility = 'hidden';
	document.getElementById('4c').style.visibility = 'hidden';
	document.getElementById('5c').style.visibility = 'hidden';
	document.getElementById('6c').style.visibility = 'hidden';

	document.getElementById('title1').style.visibility = 'hidden';
	document.getElementById('title2').style.visibility = 'hidden';
	document.getElementById('title3').style.visibility = 'hidden';
	document.getElementById('title4').style.visibility = 'hidden';
	allHVAC = [];
}

function addCube()  {

	if ( cube1 !== undefined ) {

		cube1.geometry.dispose();
		scene.remove( cube1 );

	}
	//-1.11,0,0.27
	var geometry = new THREE.BoxGeometry( 0.47, 0.15, 0.3 );
	var material = new THREE.MeshBasicMaterial( { color: 0x003077, opacity: 0.0, transparent: true } );
	cube1 = new THREE.Mesh( geometry, material );
	cube1.position.set(0.73,0,-0.02);
	scene.add( cube1 );
	takeObject(cube1);
	takeObject2(cube1);

	/*
	if (propsLocal.trans == true)  {
		scene.add( cube1 );
	}*/
}

		function toggling(index){
			switch(index){
				case 0: tog1();break;
				case 1: tog2();break;
				case 2: tog3();break;
				case 3: tog4();break;
				case 4: tog5();break;
				case 5: tog6();break;
				case 6: tog7();break;
				case 7: tog8();break;
				case 8: tog9();break;
				case 9: tog1a();break;
				case 10: tog2a();break;
				case 11: tog3a();break;
				case 12: tog4a();break;
				case 13: tog5a();break;
				case 14: tog6a();break;
				case 15: tog7a();break;
				case 16: tog8a();break;
				case 17: tog9a();break;
				case 18: tog10a();break;
				case 19: tog1b();break;
				case 20: tog2b();break;
			}
		}

function tog1()	{
	propsLocal.hvacColor1 = !propsLocal.hvacColor1;
	hvac1();
}
function tog2()	{
	propsLocal.hvacColor2 = !propsLocal.hvacColor2;
	hvac2();
}
function tog3()	{
	propsLocal.hvacColor3 = !propsLocal.hvacColor3;
	hvac3();
}
function tog4()	{
	propsLocal.hvacColor4 = !propsLocal.hvacColor4;
	hvac4();
}
function tog5()	{
	propsLocal.hvacColor5 = !propsLocal.hvacColor5;
	hvac5();
}
function tog6()	{
	propsLocal.hvacColor6 = !propsLocal.hvacColor6;
	hvac6();
}
function tog7()	{
	propsLocal.hvacColor7 = !propsLocal.hvacColor7;
	hvac7();
}
function tog8()	{
	propsLocal.hvacColor8 = !propsLocal.hvacColor8;
	hvac8();
}
function tog9()	{
	propsLocal.hvacColor9 = !propsLocal.hvacColor9;
	hvac9();
}

function tog1a()	{
	propsLocal2.hvacColor1a = !propsLocal2.hvacColor1a;
	hvac1a();
}
function tog2a()	{
	propsLocal2.hvacColor2a = !propsLocal2.hvacColor2a;
	hvac2a();
}
function tog3a()	{
	propsLocal2.hvacColor3a = !propsLocal2.hvacColor3a;
	hvac3a();
}
function tog4a()	{
	propsLocal2.hvacColor4a = !propsLocal2.hvacColor4a;
	hvac4a();
}
function tog5a()	{
	propsLocal2.hvacColor5a = !propsLocal2.hvacColor5a;
	hvac5a();
}
function tog6a()	{
	propsLocal2.hvacColor6a = !propsLocal2.hvacColor6a;
	hvac6a();
}
function tog7a()	{
	propsLocal2.hvacColor7a = !propsLocal2.hvacColor7a;
	hvac7a();
}
function tog8a()	{
	propsLocal2.hvacColor8a = !propsLocal2.hvacColor8a;
	hvac8a();
}
function tog9a()	{
	propsLocal2.hvacColor9a = !propsLocal2.hvacColor9a;
	hvac9a();
}
function tog10a()	{
	propsLocal2.hvacColor10a = !propsLocal2.hvacColor10a;
	hvac10a();
}

function tog1b()	{
	propsLocal3.hvacColor1b = !propsLocal3.hvacColor1b;
	hvac1b();
}
function tog2b()	{
	propsLocal3.hvacColor2b = !propsLocal3.hvacColor2b;
	hvac2b();
}

function tog1c()	{
	propsLocal4.hvacColor1c = !propsLocal4.hvacColor1c;
	hvac1c();
}
function tog2c()	{
	propsLocal4.hvacColor2c = !propsLocal4.hvacColor2c;
	hvac2c();
}
function tog3c()	{
	propsLocal4.hvacColor3c = !propsLocal4.hvacColor3c;
	hvac3c();
}
function tog4c()	{
	propsLocal4.hvacColor4c = !propsLocal4.hvacColor4c;
	hvac4c();
}
function tog5c()	{
	propsLocal4.hvacColor5c = !propsLocal4.hvacColor5c;
	hvac5c();
}
function tog6c()	{
	propsLocal4.hvacColor6c = !propsLocal4.hvacColor6c;
	hvac6c();
}

function addCube2()  {

	if ( cube2 !== undefined ) {

		cube2.geometry.dispose();
		scene.remove( cube2 );

	}
	//-1.11,0,0.27
	var geometry = new THREE.BoxGeometry( 0.47, 0.15, 0.3 );
	var material = new THREE.MeshBasicMaterial( { color: 0x003077, opacity: 0.0, transparent: true } );
	cube2 = new THREE.Mesh( geometry, material );
	cube2.position.set(0.25,0,-0.02);
	scene.add( cube2 );
	takeObject(cube2);
	takeObject3(cube2);
	/*
	if (propsLocal.trans == true)  {
		scene.add( cube1 );
	}*/
}

function addCube3()  {

	if ( cube3 !== undefined ) {

		cube3.geometry.dispose();
		scene.remove( cube3 );

	}
	//-1.11,0,0.27
	var geometry = new THREE.BoxGeometry( 0.47, 0.15, 0.3 );
	var material = new THREE.MeshBasicMaterial( { color: 0x003077, opacity: 0.0, transparent: true } );
	cube3 = new THREE.Mesh( geometry, material );
	cube3.position.set(-0.24,0,-0.02);
	scene.add( cube3 );
	takeObject(cube3);
	takeObject4(cube3);
	/*
	if (propsLocal.trans == true)  {
		scene.add( cube1 );
	}*/
}

function addCube4()  {

	if ( cube4 !== undefined ) {

		cube4.geometry.dispose();
		scene.remove( cube4 );

	}
	//-1.11,0,0.27
	var geometry = new THREE.BoxGeometry( 0.47, 0.15, 0.3 );
	var material = new THREE.MeshBasicMaterial( { color: 0x003077, opacity: 0.0, transparent: true } );
	cube4 = new THREE.Mesh( geometry, material );
	cube4.position.set(-0.73,0,-0.02);
	scene.add( cube4 );
	takeObject(cube4);
	takeObject5(cube4);
	/*
	if (propsLocal.trans == true)  {
		scene.add( cube1 );
	}*/
}

function onDocumentMouseMove(event) {
	// the following line would stop any other event handler from firing
	// (such as the mouse's TrackballControls)
	// event.preventDefault();

	// update the mouse variable
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}


function onDocumentMouseDown(event) {
	//console.log(camStat);
	event.preventDefault();
	mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

	raycaster.setFromCamera(mouse, camera);
	//var raycaster = projector.pickingRay( mouseVector.clone(), camera );
	var intersects2 = raycaster.intersectObject( object2 );
	var intersects3 = raycaster.intersectObject( object3 );
	var intersects4 = raycaster.intersectObject( object4 );
	var intersects5 = raycaster.intersectObject( object5 );

	if (intersects2.length > 0) {
			intersect = intersects2[0];
			//alert(selectedObject);
			if ( isShiftDown ) {
				if ( intersect.object != plane ) {
					scene.remove( intersect.object );
					object2.splice( object2.indexOf( intersect.object ), 1 );
				}

			} else {
				//addCube();
				//scene.add(cube1);
				//console.log(camStat);
				if (camStat == 0)	{
					clickStat = 1;
					camera.position.set( 0.7, 1.1, 0.4 );
					xCam = 0.7, zCam = 0, yCam = 0;
					//dat.GUI.toggleHide();

					//setupGui();
					hvac1();
					hvac2();
					hvac3();
					hvac4();
					hvac5();
					hvac6();
					hvac7();
					hvac8();
					hvac9();

					//shapes and ac details

					//console.log('kanan 1'); //paling kanan
					loops = 27;
					//addDetails(loops,' ');
					for(let i=0;i<9;i++)
						addDetail(i+1+(i*2),i+1,ACStr[i]);
					document.getElementById('square').style.visibility = 'visible';

					//end of shapes and ac details

					document.getElementById('1').style.visibility = 'visible';
					document.getElementById('2').style.visibility = 'visible';
					document.getElementById('3').style.visibility = 'visible';
					document.getElementById('4').style.visibility = 'visible';
					document.getElementById('5').style.visibility = 'visible';
					document.getElementById('6').style.visibility = 'visible';
					document.getElementById('7').style.visibility = 'visible';
					document.getElementById('8').style.visibility = 'visible';
					document.getElementById('9').style.visibility = 'visible';

					document.getElementById('title1').style.visibility = 'visible';

					camStat = 1;
					//clickStat = 0;
					//console.log(camStat);
				}
				//object1.push(cube1);
			}
			render();
	}

	if (intersects3.length > 0) {
			intersect = intersects3[0];
			//alert(selectedObject);
			if ( isShiftDown ) {
				if ( intersect.object != plane ) {
					scene.remove( intersect.object );
					object3.splice( object3.indexOf( intersect.object ), 1 );
				}

			} else {
				//addCube();
				//scene.add(cube1);
				if (camStat == 0)	{
					clickStat = 1;
					camera.position.set( 0.25, 1.1, 0.4 );
					xCam = 0.25, zCam = 0, yCam = 0;
					//dat.GUI.toggleHide();
					//setupGui2();
					hvac1a();
					hvac2a();
					hvac3a();
					hvac4a();
					hvac5a();
					hvac6a();
					hvac7a();
					hvac8a();
					hvac9a();
					hvac10a();

					document.getElementById('1a').style.visibility = 'visible';
					document.getElementById('2a').style.visibility = 'visible';
					document.getElementById('3a').style.visibility = 'visible';
					document.getElementById('4a').style.visibility = 'visible';
					document.getElementById('5a').style.visibility = 'visible';
					document.getElementById('6a').style.visibility = 'visible';
					document.getElementById('7a').style.visibility = 'visible';
					document.getElementById('8a').style.visibility = 'visible';
					document.getElementById('9a').style.visibility = 'visible';
					document.getElementById('10a').style.visibility = 'visible';

					document.getElementById('title2').style.visibility = 'visible';

					camStat = 1;
					//clickStat = 0;

					//shapes and ac details

					//console.log('kanan 2'); //kanan 2
					loops = 30;
					//addDetails(loops,'a');
					for(let i=0;i<10;i++)
						addDetail(i+1+(i*2),i+10,ACStr[i+9]);
					document.getElementById('square').style.visibility = 'visible';

					//end of shapes and ac details
				}

				//object1.push(cube1);
			}
			render();
	}

	if (intersects4.length > 0) {
			intersect = intersects4[0];
			//alert(selectedObject);
			if ( isShiftDown ) {
				if ( intersect.object != plane ) {
					scene.remove( intersect.object );
					object4.splice( object4.indexOf( intersect.object ), 1 );
				}

			} else {
				//addCube();
				//scene.add(cube1);
				if (camStat == 0)	{
					clickStat = 1;
					camera.position.set( -0.25, 1.1, 0.4 );
					xCam = -0.25, zCam = 0, yCam = 0;
					//dat.GUI.toggleHide();
					//setupGui3();
					hvac1b();
					hvac2b();

					document.getElementById('1b').style.visibility = 'visible';
					document.getElementById('2b').style.visibility = 'visible';

					document.getElementById('title3').style.visibility = 'visible';

					camStat = 1;
					//clickStat = 0;

					//shapes and ac details

					//console.log('kiri 2'); //kiri 2
					loops = 6;
					//addDetails(loops,'b');
					for(let i=0;i<2;i++)
						addDetail(i+1+(i*2),i+20,ACStr[i+19]);
					document.getElementById('square').style.visibility = 'visible';

					//end of shapes and ac details
				}

				//object1.push(cube1);
			}
			//render();
	}

	if (intersects5.length > 0) {
			intersect = intersects5[0];
			//alert(selectedObject);
			if ( isShiftDown ) {
				if ( intersect.object != plane ) {
					scene.remove( intersect.object );
					object5.splice( object5.indexOf( intersect.object ), 1 );
				}

			} else {
				//addCube();
				//scene.add(cube1);
				if (camStat == 0)	{
					clickStat = 1;
					camera.position.set( -0.7, 1.1, 0.4 );
					xCam = -0.7, zCam = 0, yCam = 0;
					//dat.GUI.toggleHide();
					//setupGui4();
					hvac1c();
					hvac2c();
					hvac3c();
					hvac4c();
					hvac5c();
					hvac6c();

					document.getElementById('1c').style.visibility = 'visible';
					document.getElementById('2c').style.visibility = 'visible';
					document.getElementById('3c').style.visibility = 'visible';
					document.getElementById('4c').style.visibility = 'visible';
					document.getElementById('5c').style.visibility = 'visible';
					document.getElementById('6c').style.visibility = 'visible';

					document.getElementById('title4').style.visibility = 'visible';

					camStat = 1;
					//clickStat = 0;

					//shapes and ac details

					//console.log('kiri 1'); //paling kiri
					loops = 18;
					//addDetails(loops,'c');
					for(let i=0;i<6;i++)
						addDetail(i+1+(i*2),i+22,ACStr[i+21]);
					document.getElementById('square').style.visibility = 'visible';

					//end of shapes and ac details
				}

				//object1.push(cube1);
			}
			//render();
	}

}



function init() {


		var info = document.createElement('div');
		info.style.position = 'absolute';
		info.style.top = '30px';
		info.style.width = '100%';
		info.style.textAlign = 'center';
		info.style.color = '#fff';
		info.style.fontWeight = 'bold';
		info.style.backgroundColor = 'transparent';
		info.style.zIndex = '1';
		info.style.fontFamily = 'Monospace';
		info.innerHTML = "three.js - intersect updated to latest release (based on http://stemkoski.github.io/Three.js/Mouse-Over.html)";

		//var loader = new THREE.STLLoader();
		//var material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		//document.body.appendChild( renderer.domElement );

		camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.001, 80000 );

		//camera.position.set( 1, 0.8, 1.2 );
		camera.position.set( xPos, zPos, yPos );

		cameraTarget = new THREE.Vector3( 0, -0.7, 0 );

		scene = new THREE.Scene();
		//scene.background = new THREE.Color( 0x72645b );
		scene.background = new THREE.Color( 0x72645b );
		scene.fog = new THREE.Fog( 0x72645b, 2, 15 );

		var SCREEN_WIDTH = window.innerWidth,
				SCREEN_HEIGHT = window.innerHeight;
		var VIEW_ANGLE = 45,
				ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
				NEAR = 0.1,
				FAR = 20000;

					//shapes and ac details
						document.getElementById('square').style.visibility = 'hidden';
					//end of shapes and ac details

		rect();
		walls();
		glasswalls();
		pillars();
		stairs();
		addCube();
		addCube2();
		addCube3();
		addCube4();

		document.getElementById('1').style.visibility = 'hidden';
		document.getElementById('2').style.visibility = 'hidden';
		document.getElementById('3').style.visibility = 'hidden';
		document.getElementById('4').style.visibility = 'hidden';
		document.getElementById('5').style.visibility = 'hidden';
		document.getElementById('6').style.visibility = 'hidden';
		document.getElementById('7').style.visibility = 'hidden';
		document.getElementById('8').style.visibility = 'hidden';
		document.getElementById('9').style.visibility = 'hidden';

		document.getElementById('1a').style.visibility = 'hidden';
		document.getElementById('2a').style.visibility = 'hidden';
		document.getElementById('3a').style.visibility = 'hidden';
		document.getElementById('4a').style.visibility = 'hidden';
		document.getElementById('5a').style.visibility = 'hidden';
		document.getElementById('6a').style.visibility = 'hidden';
		document.getElementById('7a').style.visibility = 'hidden';
		document.getElementById('8a').style.visibility = 'hidden';
		document.getElementById('9a').style.visibility = 'hidden';
		document.getElementById('10a').style.visibility = 'hidden';

		document.getElementById('1b').style.visibility = 'hidden';
		document.getElementById('2b').style.visibility = 'hidden';

		document.getElementById('1c').style.visibility = 'hidden';
		document.getElementById('2c').style.visibility = 'hidden';
		document.getElementById('3c').style.visibility = 'hidden';
		document.getElementById('4c').style.visibility = 'hidden';
		document.getElementById('5c').style.visibility = 'hidden';
		document.getElementById('6c').style.visibility = 'hidden';

		document.getElementById('title1').style.visibility = 'hidden';
		document.getElementById('title2').style.visibility = 'hidden';
		document.getElementById('title3').style.visibility = 'hidden';
		document.getElementById('title4').style.visibility = 'hidden';

		var plane = new THREE.Mesh(
			new THREE.PlaneBufferGeometry( 80, 80 ),
			new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
		);
		plane.rotation.x = -Math.PI/2;
		plane.position.y = 0;
		scene.add( plane );

		plane.receiveShadow = true;

		////////////////////// LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING //////////////////////////
		////////////////////// LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING //////////////////////////
		////////////////////// LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING LIGHTING //////////////////////////

		//var axesHelper = new THREE.AxesHelper( 5 );
		//scene.add( axesHelper );
		// Lights

		scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

		addShadowedLight( 1, 1, 1, 0xffffff, 1.0 );
		//addShadowedLight( 0.5, 1, -1, 0xffaa00, 1 );

		// Renderer

		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );

		renderer.gammaInput = true;
		renderer.gammaOutput = true;
		renderer.shadowMapType = THREE.PCFSoftShadowMap;
		renderer.shadowMap.enabled = true;

		stats = new Stats();
		//container.appendChild( stats.dom );
		// renderer.setSize($(container).width(), $(container).height());
		container.appendChild( renderer.domElement );

		// stats

		//stats = new Stats();
		//container.appendChild( stats.dom );

		//
		//setupGui();
		window.addEventListener( 'resize', onWindowResize, false );
		controls = new THREE.OrbitControls(camera, renderer.domElement);
			//controls.enableDamping = true;
				//controls.dampingFactor = 0.25;
				//controls.enableZoom = true;

		projector = new THREE.Projector();
		//camera.position.x == 0 && camera.position.y == 1.7 && camera.position.z == 1
		// when the mouse moves, call the given function

		if (camStat == 0)	{
			document.addEventListener('mousemove', onDocumentMouseMove, false);
			document.addEventListener('mousedown', onDocumentMouseDown, false);
			console.log(camera.position);

		}


	}


	// ######################## END OF INIT

	//SHAPES AND AC DETAILS//

	function addDetail(index, sId, str){
		document.getElementById('text'.concat(index)).innerHTML = str;

		document.getElementById('text'.concat(index+1)).innerHTML= (ACPower[sId-1] / 1000).toFixed(6) + " kwh";

		//put telemetry kwh value * 1400 here
		document.getElementById('text'.concat(index+2)).innerHTML="Rp " + (ACPower[sId-1] * 1400 / 1000).toFixed(0);
	}


	function addDetails(loops, str){
		var d = 0;
		for(let i=1;i<=loops;i++){
			var HVAC = "HVAC ";
			if(i==1){
				HVAC = HVAC.concat(i);
			}else{
				HVAC = HVAC.concat(i-d);
			}
			HVAC = HVAC.concat(str);
			document.getElementById('text'.concat(i)).innerHTML = HVAC;
			i++;

			//put telemetry kwh value here
			document.getElementById('text'.concat(i)).innerHTML=onglobal["data"]["kwhTotal"][0][1] / 1000 + " kwh";
			i++;

			//put telemetry kwh value * 1400 here
			document.getElementById('text'.concat(i)).innerHTML="Rp " + (onglobal["data"]["kwhTotal"][0][1] * 1400 / 1000);
			d=d+2;
		}
	}

	function removeDetails(loops){
		for(let i=1;i<=loops;i++){
			document.getElementById('text'.concat(i)).innerHTML = '';
		}
	}


	//end of shapes and ac details//


	function rect()	{
		loader.load( './models/stl/tekno/rect.stl', function ( geometry ) {


			var meshMaterial = material;
			meshMaterial = new THREE.MeshPhongMaterial({ color: 0x212F39 });
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -1.11,0,0.27 );
			//mesh.position.set( 0,-0.55,0 );
			mesh.rotation.set( -Math.PI / 2, 0, 0 );
			mesh.scale.set( 0.2, 0.2, 0.2 );

			//mesh.castShadow = true;
			mesh.receiveShadow = true;

			scene.add( mesh );

		} );
	}

	function hvac1()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal.hvacColor1 == false)	{
				color1 = 0xFF0000;
			}
			else {
				color1 = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color1});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );
			//mesh.position.set( -0.15,0.05,-0.105 );
			mesh.position.set( 0.58,0.05,-0.135 );
			mesh.rotation.set( -Math.PI / 2, 0, -Math.PI / 2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);
			if (camStat == 1) {
				scene.add( mesh );
			}
			//propsLocal.hvacColor1 = !propsLocal.hvacColor1;


		} );
	}

	function hvac2()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal.hvacColor2 == false)	{
				color2 = 0xFF0000;
			}
			else {
				color2 = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color2});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			//mesh.position.set( 0.58,0.05,-0.065 ); OLD POSITION
			//mesh.rotation.set( -Math.PI / 2, 0, Math.PI / 2 ); OLD POSITION

			mesh.position.set( 0.718,0.05,-0.11 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}
			//propsLocal.hvacColor2 = !propsLocal.hvacColor2;

		} );
	}

	function hvac3()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal.hvacColor3 == false)	{
				color3 = 0xFF0000;
			}
			else {
				color3 = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color3});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.652,0.05,0.05 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}
			//propsLocal.hvacColor3 = !propsLocal.hvacColor3;

		} );
	}

	function hvac4()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal.hvacColor4 == false)	{
				color4 = 0xFF0000;
			}
			else {
				color4 = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color4});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.504,0.05,0.05 );
			mesh.rotation.set( -Math.PI / 2, 0, 0 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}
			//propsLocal.hvacColor4 = !propsLocal.hvacColor4;

		} );
	}

	function hvac5()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal.hvacColor5 == false)	{
				color5 = 0xFF0000;
			}
			else {
				color5 = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color5});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.684,0.05,0.05 );
			mesh.rotation.set( -Math.PI / 2, 0, 0 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}
			//propsLocal.hvacColor5 = !propsLocal.hvacColor5;

		} );
	}

	function hvac6()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal.hvacColor6 == false)	{
				color6 = 0xFF0000;
			}
			else {
				color6 = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color6});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.782,0.05,0.05 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);
			if (camStat == 1) {
				scene.add( mesh );
			}
			//propsLocal.hvacColor6 = !propsLocal.hvacColor6;


		} );
	}

	function hvac7()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal.hvacColor7 == false)	{
				color7 = 0xFF0000;
			}
			else {
				color7 = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color7});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.813,0.05,0.05 );
			mesh.rotation.set( -Math.PI / 2, 0, 0 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}
			//propsLocal.hvacColor7 = !propsLocal.hvacColor7;

		} );
	}

	function hvac8()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal.hvacColor8 == false)	{
				color8 = 0xFF0000;
			}
			else {
				color8 = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color8});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.958,0.05,0.07 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}
			//propsLocal.hvacColor8 = !propsLocal.hvacColor8;

		} );
	}

	function hvac9()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal.hvacColor9 == false)	{
				color9 = 0xFF0000;
			}
			else {
				color9 = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color9});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.958,0.05,0.01 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}
			//propsLocal.hvacColor9 = !propsLocal.hvacColor9;


		} );
	}

	/////////////////////////////////////// SECTION 2 ///////////////////////////////////////
	function hvac1a()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal2.hvacColor1a == false)	{
				color1a = 0xFF0000;
			}
			else {
				color1a = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color1a});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.05,0.05,0.095 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}


	function hvac2a()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal2.hvacColor2a == false)	{
				color2a = 0xFF0000;
			}
			else {
				color2a = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color2a});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.125,0.05,0.095 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}

		} );
	}

	function hvac3a()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal2.hvacColor3a == false)	{
				color3a = 0xFF0000;
			}
			else {
				color3a = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color3a});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.215,0.05,0.095 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac4a()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal2.hvacColor4a == false)	{
				color4a = 0xFF0000;
			}
			else {
				color4a = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color4a});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.285,0.05,0.095 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac5a()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal2.hvacColor5a == false)	{
				color5a = 0xFF0000;
			}
			else {
				color5a = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color5a});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.355,0.05,0.095 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac6a()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal2.hvacColor6a == false)	{
				color6a = 0xFF0000;
			}
			else {
				color6a = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color6a});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.425,0.05,0.095 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac7a()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal2.hvacColor7a == false)	{
				color7a = 0xFF0000;
			}
			else {
				color7a = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color7a});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.02,0.05,0.07 );
			mesh.rotation.set( -Math.PI / 2, 0, 0 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac8a()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal2.hvacColor8a == false)	{
				color8a = 0xFF0000;
			}
			else {
				color8a = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color8a});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.02,0.05,0.005 );
			mesh.rotation.set( -Math.PI / 2, 0, 0 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac9a()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal2.hvacColor9a == false)	{
				color9a = 0xFF0000;
			}
			else {
				color9a = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color9a});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.475,0.05,0.07 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac10a()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal2.hvacColor10a == false)	{
				color10a = 0xFF0000;
			}
			else {
				color10a = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color10a});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( 0.475,0.05,0.005 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}
	/////////////////////////////////////// END SECTION 2 ///////////////////////////////////////
	/////////////////////////////////////// SECTION 3 ///////////////////////////////////////
	function hvac1b()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal3.hvacColor1b == false)	{
				color1b = 0xFF0000;
			}
			else {
				color1b = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color1b});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -0.205,0.05,0.095 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac2b()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal3.hvacColor2b == false)	{
				color2b = 0xFF0000;
			}
			else {
				color2b = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color2b});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -0.27,0.05,0.095 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	/////////////////////////////////////// END SECTION 3 ///////////////////////////////////////

	/////////////////////////////////////// SECTION 4 ///////////////////////////////////////
	function hvac1c()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal4.hvacColor1c == false)	{
				color1c = 0xFF0000;
			}
			else {
				color1c = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color1c});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -0.55,0.05,0.095 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}
	function hvac2c()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal4.hvacColor2c == false)	{
				color2c = 0xFF0000;
			}
			else {
				color2c = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color2c});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -0.62,0.05,0.095 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac3c()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal4.hvacColor3c == false)	{
				color3c = 0xFF0000;
			}
			else {
				color3c = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color3c});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -0.55,0.05,-0.138 );
			mesh.rotation.set( -Math.PI / 2, 0, -Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac4c()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal4.hvacColor4c == false)	{
				color4c = 0xFF0000;
			}
			else {
				color4c = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color4c});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -0.62,0.05,-0.138 );
			mesh.rotation.set( -Math.PI / 2, 0, -Math.PI/2 );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac5c()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal4.hvacColor5c == false)	{
				color5c = 0xFF0000;
			}
			else {
				color5c = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color5c});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -0.5,0.05,0.03 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}

	function hvac6c()	{
		loader.load( './models/stl/tekno/teknopart1/hvac.stl', function ( geometry ) {
			if (propsLocal4.hvacColor6c == false)	{
				color6c = 0xFF0000;
			}
			else {
				color6c = 0x00FF00;
			}
			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: color6c});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -0.5,0.05,-0.07 );
			mesh.rotation.set( -Math.PI / 2, 0, Math.PI );
			mesh.scale.set( 0.004,0.004,0.004 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;
			removeHVAC(mesh);

			if (camStat == 1) {
				scene.add( mesh );
			}


		} );
	}
	/////////////////////////////////////// END SECTION 4 ///////////////////////////////////////

	function pillars()	{
		loader.load( './models/stl/tekno/pillars.stl', function ( geometry ) {

			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: 0x333333});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -1.11,0,0.27 );
			mesh.rotation.set( -Math.PI / 2, 0, 0 );
			mesh.scale.set( 0.2, 0.2, 0.2 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;

			scene.add( mesh );

		} );
	}

	function stairs()	{
		loader.load( './models/stl/tekno/stairs2.stl', function ( geometry ) {

			var meshMaterial = material;
			//if (geometry.hasColors) {
			var stairColor = 0xF4D942;
			meshMaterial = new THREE.MeshPhongMaterial({ color: stairColor});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -1.11,0,0.27 );
			mesh.rotation.set( -Math.PI / 2, 0, 0 );
			mesh.scale.set( 0.2, 0.2, 0.2 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;

			//takeObject(mesh);

			scene.add( mesh );

		} );
	}


	function walls()	{
		loader.load( './models/stl/tekno/newwalls2.stl', function ( geometry ) {

			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -1.11,0,0.27 );
			mesh.rotation.set( -Math.PI / 2, 0, 0 );
			//mesh.rotation.set( -Math.PI / 2, 0, 0 );
			mesh.scale.set( 0.2, 0.2, 0.2 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;



			scene.add( mesh );

		} );
	}

	function glasswalls()	{
		loader.load( './models/stl/tekno/glasswalls.stl', function ( geometry ) {

			var meshMaterial = material;
			//if (geometry.hasColors) {
			meshMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF});
			//}

			var mesh = new THREE.Mesh( geometry, meshMaterial );

			mesh.position.set( -1.11,0,0.27 );
			mesh.rotation.set( -Math.PI / 2, 0, 0 );
			//mesh.rotation.set( -Math.PI / 2, 0, 0 );
			mesh.scale.set( 0.2, 0.2, 0.2 );

			mesh.castShadow = true;
			mesh.receiveShadow = true;

			scene.add( mesh );

		} );
	}

	function takeObject(xx) {
		selected.push(xx);
		object1 = xx;
		//selected = xx;
	}

	function takeObject2(xx) {
		object2 = xx;
		objArray2.push(xx);
		//selected = xx;
	}

	function takeObject3(xx) {
		object3 = xx;
		objArray3.push(xx);
		//selected = xx;
	}

	function takeObject4(xx) {
		object4 = xx;
		objArray4.push(xx);
		//selected = xx;
	}

	function takeObject5(xx) {
		object5 = xx;
		objArray5.push(xx);
		//selected = xx;
	}

	function removeHVAC(xx) {
		allHVAC.push(xx);
		//selected = xx;
	}

	function updatex() {
		// find intersections
		// create a Ray with origin at the mouse position
		//   and direction into the scene (camera direction)
		var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
		vector.unproject(camera);
		var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

		// create an array containing all objects in the scene with which the ray intersects
		//var intersects = ray.intersectObjects(scene.children);
		//console.log(selected);
		var intersects = ray.intersectObjects(selected);
		var intersectsText1 = ray.intersectObjects(objArray2);
		var intersectsText2 = ray.intersectObjects(objArray3);
		var intersectsText3 = ray.intersectObjects(objArray4);
		var intersectsText4 = ray.intersectObjects(objArray5);
		//console.log(typeof(scene.children));

		// INTERSECTED = the object in the scene currently closest to the camera
		//		and intersected by the Ray projected from the mouse position

		// if there is one (or more) intersections
		// if (intersects.length > 0) {
		//   // if the closest object intersected is not the currently stored intersection object
		//   if (intersects[0].object != INTERSECTED) {
		//     // restore previous intersection object (if it exists) to its original color
		//     if (INTERSECTED)
		//       //INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
		// 			INTERSECTED.material.opacity = INTERSECTED.currentOpacity;
		//
		//     // store reference to closest object as current intersection object
		//     INTERSECTED = intersects[0].object;
		//     // store color of closest object (for later restoration)
		//     //INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
		// 		INTERSECTED.currentOpacity = INTERSECTED.material.opacity;
		//     // set a new color for closest object
		//     //INTERSECTED.material.color.setHex(0xffff00);
		// 		if (camStat == 0)	{
		// 			INTERSECTED.material.opacity = 0.5;
		// 			console.log("THE SELECTED OBJECT IS ::::::::::: " + selected[0]);
		// 			document.getElementById('title1').style.visibility = 'visible';
		// 		}
		// 		//addCube(0.5);
		//   }
		// }

		if (intersectsText1.length > 0) {
			// if the closest object intersected is not the currently stored intersection object
			if (intersectsText1[0].object != INTERSECTED) {
				// restore previous intersection object (if it exists) to its original color
				if (INTERSECTED)
					//INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
					INTERSECTED.material.opacity = INTERSECTED.currentOpacity;

				// store reference to closest object as current intersection object
				INTERSECTED = intersectsText1[0].object;
				// store color of closest object (for later restoration)
				//INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
				INTERSECTED.currentOpacity = INTERSECTED.material.opacity;
				// set a new color for closest object
				//INTERSECTED.material.color.setHex(0xffff00);
				if (camStat == 0)	{
					INTERSECTED.material.opacity = 0.5;
					document.getElementById('title1').style.visibility = 'visible';
					document.getElementById('title2').style.visibility = 'hidden';
					document.getElementById('title3').style.visibility = 'hidden';
					document.getElementById('title4').style.visibility = 'hidden';
				}
				//addCube(0.5);
			}
		}

		else if (intersectsText2.length > 0) {
			// if the closest object intersected is not the currently stored intersection object
			if (intersectsText2[0].object != INTERSECTED) {
				// restore previous intersection object (if it exists) to its original color
				if (INTERSECTED)
					//INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
					INTERSECTED.material.opacity = INTERSECTED.currentOpacity;

				// store reference to closest object as current intersection object
				INTERSECTED = intersectsText2[0].object;
				// store color of closest object (for later restoration)
				//INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
				INTERSECTED.currentOpacity = INTERSECTED.material.opacity;
				// set a new color for closest object
				//INTERSECTED.material.color.setHex(0xffff00);
				if (camStat == 0)	{
					INTERSECTED.material.opacity = 0.5;
					document.getElementById('title1').style.visibility = 'hidden';
					document.getElementById('title2').style.visibility = 'visible';
					document.getElementById('title3').style.visibility = 'hidden';
					document.getElementById('title4').style.visibility = 'hidden';
				}
				//addCube(0.5);
			}
		}

		else if (intersectsText3.length > 0) {
			// if the closest object intersected is not the currently stored intersection object
			if (intersectsText3[0].object != INTERSECTED) {
				// restore previous intersection object (if it exists) to its original color
				if (INTERSECTED)
					//INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
					INTERSECTED.material.opacity = INTERSECTED.currentOpacity;

				// store reference to closest object as current intersection object
				INTERSECTED = intersectsText3[0].object;
				// store color of closest object (for later restoration)
				//INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
				INTERSECTED.currentOpacity = INTERSECTED.material.opacity;
				// set a new color for closest object
				//INTERSECTED.material.color.setHex(0xffff00);
				if (camStat == 0)	{
					INTERSECTED.material.opacity = 0.5;
					document.getElementById('title1').style.visibility = 'hidden';
					document.getElementById('title2').style.visibility = 'hidden';
					document.getElementById('title3').style.visibility = 'visible';
					document.getElementById('title4').style.visibility = 'hidden';
				}
				//addCube(0.5);
			}
		}

		else if (intersectsText4.length > 0) {
			// if the closest object intersected is not the currently stored intersection object
			if (intersectsText4[0].object != INTERSECTED) {
				// restore previous intersection object (if it exists) to its original color
				if (INTERSECTED)
					//INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
					INTERSECTED.material.opacity = INTERSECTED.currentOpacity;

				// store reference to closest object as current intersection object
				INTERSECTED = intersectsText4[0].object;
				// store color of closest object (for later restoration)
				//INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
				INTERSECTED.currentOpacity = INTERSECTED.material.opacity;
				// set a new color for closest object
				//INTERSECTED.material.color.setHex(0xffff00);
				if (camStat == 0)	{
					INTERSECTED.material.opacity = 0.5;
					document.getElementById('title1').style.visibility = 'hidden';
					document.getElementById('title2').style.visibility = 'hidden';
					document.getElementById('title3').style.visibility = 'hidden';
					document.getElementById('title4').style.visibility = 'visible';
				}
				//addCube(0.5);
			}
		}

		else // there are no intersections
		{
			// restore previous intersection object (if it exists) to its original color
			if (INTERSECTED)
				//INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
				//INTERSECTED.material.opacity = INTERSECTED.currentOpacity;
				//addCube(0.0);
				INTERSECTED.material.opacity = 0.0;
				document.getElementById('title1').style.visibility = 'hidden';
				document.getElementById('title2').style.visibility = 'hidden';
				document.getElementById('title3').style.visibility = 'hidden';
				document.getElementById('title4').style.visibility = 'hidden';
			// remove previous intersection object reference
			//     by setting current intersection object to "nothing"
			INTERSECTED = null;
		}

		controls.update();
		//stats.update();
	}

	function addShadowedLight( x, y, z, color, intensity ) {

		var directionalLight = new THREE.DirectionalLight( color, intensity );
		directionalLight.position.set( x, y, z );
		scene.add( directionalLight );

		directionalLight.castShadow = true;

		var d = 1;
		directionalLight.shadow.camera.left = -d;
		directionalLight.shadow.camera.right = d;
		directionalLight.shadow.camera.top = d;
		directionalLight.shadow.camera.bottom = -d;

		directionalLight.shadow.camera.near = 0.5;
		directionalLight.shadow.camera.far = 2;

		//directionalLight.shadow.mapSize.width = 1024;
		//directionalLight.shadow.mapSize.height = 1024;

		directionalLight.shadowMapWidth = 1024; // default is 512
		directionalLight.shadowMapHeight = 1024; // default is 512

		directionalLight.shadow.bias = -0.002;

	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	function animate() {
		requestAnimationFrame( animate );
		render();
		//stats.update();
		updatex();

	}

	function render() {
		camera.lookAt( xCam,yCam,zCam );
		renderer.render( scene, camera );

	}

	function onOffReq(measurement, index){
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					console.log(this.responseText);
				}
			};

		xhttp.open("POST", "http://35.202.49.101:8080/api/v1/"+measurement+"/attributes", true);
		xhttp.setRequestHeader("Content-type", "application/json");
		var str = JSON.stringify({'stat': !ACStat[index] , 'token': ((new Date()).getTime())});
		console.log(str);
		xhttp.send(str);
	}
