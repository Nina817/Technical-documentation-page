console.log("this works")

function showPage(id){
    var totalNumberOfPages = 7;
    for(i=1; i<=totalNumberOfPages; i++) //creating a for loop that continuously checks if i=1 or i=2
{
if(document.getElementById(i))
    document.getElementById(i).style.display='none';//when i doesn't equal id don't block display setting css
}
if(document.getElementById(id))
    document.getElementById(id).style.display='block';// when i = id block the display setting in css (show the page)
}

window.onload = showPage(1);