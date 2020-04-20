function konuAc(evt, konuId) {
    // Declare all variables
    var i, menuicerik, btnMenu;

    // Get all elements with class="menuicerik" and hide them
    menuicerik = document.getElementsByClassName("menuicerik");
    for (i = 0; i < menuicerik.length; i++) {
      menuicerik[i].style.display = "none";
    }

    // Get all elements with class="btnMenu" and remove the class "active"
    btnMenu = document.getElementsByClassName("btnMenu");
    for (i = 0; i < btnMenu.length; i++) {
      btnMenu[i].className = btnMenu[i].className.replace(" active", "");
    }

  // butona tıklanınca parametre olarak gelen konuId ile id'si konuId olan
  // elemanı gösterir 
    var ele = document.getElementById(konuId);
    ele.style.display="block";
    
    // tıklanan elemanın konusunu gösterir ve class'ına " active" ekler
    evt.currentTarget.className += " active";
   
  
    //daha önce tıklanmış button varsa bunların position sitilinini "initial" yapar
    var ele = document.getElementsByClassName("btnMenu");
    for (let i = 0; i < ele.length; i++) {
      ele[i].setAttribute("style", "position: initial;");
    }
    // tıklanan elemanın sitilini "top:0" ve "position:sticky" yapar
    evt.currentTarget.setAttribute("style", "position: sticky; top: 0px;");
  }

   // id="varsayilanAc" olan elemanı alıp click olayı gerçekleştirir.
  document.getElementById("varsayilanAc").click();
 
  
//----------------------------------------------------------------------------


  //HTML elemanlarını seçme, yeni ekleme, özelliklerini değiştirme
  //ve eklenen elemanlara olay bağlama

  //<h2>Section 4</h2> oluşturma accordion div'i içinde
  var para = document.createElement("h2");
  var node = document.createTextNode("Bu Section Sonradan Oluşturuldu");
  para.appendChild(node);
  var element = document.getElementById("accordion");
  //element.appendChild(para);

  //<div id="section4"></div> tag'i oluşturma
  var div = document.createElement("div");
  div.setAttribute("id", "section4");
  //element.appendChild(div);

  //p oluştur içine metin ekle bu p'yi de yukarıda oluşturulan div'e ekle
  var p = document.createElement("p");
  var metin = "4 - Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.";
  metin += " Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,";
  metin += " porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.";
  var txt = document.createTextNode(metin);
  p.appendChild(txt);
  div.appendChild(p);


  /*
  //div'e display özelliği ekle
  var ele = document.getElementById("section4");
  //ele.setAttribute("style", "display: none;");

  var accordion = document.querySelector('#accordion');
  var titles = accordion.getElementsByTagName('h2');

  //h2 tag'larına click olayı ekler
  for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', displayAccordion);
  }

  //h2 tag'larından sonra gelen dizleri görünür/görünmez yapar
  function displayAccordion() {
    content = this.nextElementSibling;
    if (content.style.display != 'block') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }

  function sectionSil() {
    var element = document.getElementById("section2");
    element.previousElementSibling.remove();
    element.remove();
  }

  window.onload = function () {
    setTimeout(function () { sectionSil(); }, 5000);
  }
*/