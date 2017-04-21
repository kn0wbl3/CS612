function listSleepers()
{
	var sleeperJson = JSON.parse(sleepers);
	alert(sleeperJson[0].name);
	//document.getElementById("demo").innerHTML = sleeperJson[0].name;
} 

