function clear(b,d){
	var l=b.childNodes
	for (var ci=l.length-1;ci>=0;ci--){
		if (!l[ci].classList){
			b.removeChild(l[ci])
		}
		else if (d!=false){
			l[ci]=clear(l[ci],false)
		}
	}
	return b
}
function update(){
	if (ld==new Date().getDate()){return}
	ld=new Date().getDate()
	while (ca.firstChild){
		ca.removeChild(ca.firstChild)
	}
	var dt=new Date(),a="Mon Tue Wed Thu Fri Sat Sun".split(" ")
	for (var k of a){
		var d=document.createElement("div")
		d.classList.add("day")
		if ((dt.getDay()-1)%7==a.indexOf(k)){d.classList.add("s")}
		d.innerHTML=k
		ca.appendChild(d)
	}
	var dn=[31,new Date(dt.getFullYear(),1,29).getMonth()==2?28:29,31,30,31,30,30,31,30,31,30,31][dt.getMonth()],of=new Date()
	of.setDate(1)
	of=(of.getDay()-1)%7
	for (var i=0;i<dn+of;i++){
		var d=document.createElement("div")
		d.classList.add("day")
		d.classList.add("num")
		d.innerHTML=i-of<0?"":i-of+1
		if (parseInt(d.innerText)%7>=5){
			d.classList.add("r")
		}
		if (parseInt(d.innerText)%7==(dt.getDay()-1)%7){
			d.classList.add("s")
		}
		if (parseInt(d.innerText)==dt.getDate()){
			d.classList.add("sel")
		}
		ca.appendChild(d)
	}
}
window.onload=function(){
	document.body=clear(document.body)
	cl=document.getElementsByClassName("calendar")[0].childNodes[0]
	ca=document.getElementsByClassName("calendar")[0].childNodes[1]
	update()
	setInterval(update,1)
}
var ca,cl,ld=null
