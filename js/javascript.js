// JavaScript Document
function time(){
    var  now=new Date();
	var hour=now.getHours();
	var minutes=now.getMinutes();
	var second=now.getSeconds();
	if (minutes<10)
		minutes="0"+minutes;
	if (second<10)
		second="0"+second;
	a1.innerHTML=hr+":"+minutes+":"+second;//innerHTML 属性设置或返回表格行的开始和结束标签之间的HTML。
    setTimeout("time()",1000);       
}
function myMain(){
	 time();
	}