var ind = 0
const revs = [
    `<span class="yelp-review" data-review-id="tdF6sV3t423HwzXKzVWwiQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=6B_yHmDBf5TyC3RMLJqMbA" rel="nofollow noopener">J T.</a>'s <a href="https://www.yelp.com/biz/beijing-gourmet-citrus-heights?hrid=tdF6sV3t423HwzXKzVWwiQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/RQlssTmAXGX1IvOAAkmWGA" rel="nofollow noopener">Beijing Gourmet</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="nnLawgWcaB_q08MrwMqwyA" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=kPUI3arxuIdNiesOVws7mA" rel="nofollow noopener">Dana H.</a>'s <a href="https://www.yelp.com/biz/beijing-gourmet-citrus-heights?hrid=nnLawgWcaB_q08MrwMqwyA" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/RQlssTmAXGX1IvOAAkmWGA" rel="nofollow noopener">Beijing Gourmet</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="JfqCOY_deg0o0S0PCrHmDA" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=MFMRz4SW6fF6nEHXKc1BCQ" rel="nofollow noopener">Danny R.</a>'s <a href="https://www.yelp.com/biz/beijing-gourmet-citrus-heights?hrid=JfqCOY_deg0o0S0PCrHmDA" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/RQlssTmAXGX1IvOAAkmWGA" rel="nofollow noopener">Beijing Gourmet</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="9Du74AC6jt6778vvz8R0sQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=m-gXH0rfYaIPVqv9Pl494w" rel="nofollow noopener">Alicia L.</a>'s <a href="https://www.yelp.com/biz/beijing-gourmet-citrus-heights?hrid=9Du74AC6jt6778vvz8R0sQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/RQlssTmAXGX1IvOAAkmWGA" rel="nofollow noopener">Beijing Gourmet</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="w-34jyHDTUEocV0_uW1zmg" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=ESvvlpgmNgv_1JEHdzX0Vw" rel="nofollow noopener">Tish L.</a>'s <a href="https://www.yelp.com/biz/beijing-gourmet-citrus-heights?hrid=w-34jyHDTUEocV0_uW1zmg" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/RQlssTmAXGX1IvOAAkmWGA" rel="nofollow noopener">Beijing Gourmet</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`,
    `<span class="yelp-review" data-review-id="SE_FeHXaSlLpxlOilY2Zhg" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=yEC36AMF-_dCm5jE2Y_WtQ" rel="nofollow noopener">Tami D.</a>'s <a href="https://www.yelp.com/biz/beijing-gourmet-citrus-heights?hrid=SE_FeHXaSlLpxlOilY2Zhg" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/RQlssTmAXGX1IvOAAkmWGA" rel="nofollow noopener">Beijing Gourmet</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`

]


function next(){
    ind = (ind + 1) % 4;
    console.log(ind)
    rev = document.getElementById('reviews');
    console.log(rev)
    rev.innerHTML = revs[ind];
}