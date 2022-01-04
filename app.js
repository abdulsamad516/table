var table=prompt("enter which table you want");
document.write("table of:" +table+ "</br>");
for(var num=1; num<=1000; num++)
{
	result=table*num;
	document.write(table + "*" +num+ "=" +result+ "</br>");
}