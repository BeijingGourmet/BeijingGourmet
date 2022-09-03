
var ind = 0
const description = ['Chinese cuisine,\nfresh and delicious.',
                    '(916(-722-1892\n6432 Tupelo Drive, No. C6,\nCitrus Heights, CA 95621',
                    'FREE DELIVERY\nwithin 3 miles & minumum order of $25',
                    'Business Hours:\nTuesday: Closed\nMon-Fri: 11 AM - 9 PM\nSat-Sun: 12 PM - 9 PM']

function next(){
    var ind = (ind + 1) / 4;
    desc = document.getElementById('description');
    desc.innerHTML = description.flat(ind)
}