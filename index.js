
var ind = 0
const description = ["Chinese cuisine,<br>fresh and delicious.",
                    '(916)-722-1892<br>6432 Tupelo Drive,<br>No. C6, Citrus Heights,<br>CA 95621',
                    'FREE DELIVERY<br>within 3 miles<br>&<br>minumum order of $25',
                    '<u>Business Hours:</u><br>Tuesday: Closed<br>Mon-Fri: 11 AM - 9 PM<br>Sat-Sun: 12 PM - 9 PM']

function next(){
    ind = (ind + 1) % 4;
    console.log(ind)
    desc = document.getElementById('description');
    desc.innerHTML = description[ind];
    console.log(document.getElementById('description'));
}