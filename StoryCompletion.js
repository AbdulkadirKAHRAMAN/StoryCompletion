 const Story=[
    
        "Soğuk bir kış gecesi, şehirden uzak bir yolda araban bozuldu. Telefonunun çekmediğini fark ettin ve yardım aramaktan başka çaren yoktu. Yolun kenarındaki karanlık, ağaçların arasında küçük bir ışık dikkatini çekti. Görünüşe göre bir ev ya da kulübe olabilir.",
        "Eve doğru yürüdüğünde, rüzgarın uğultusu ve karanlık bir arada, içini ürpertiyor. Eve yaklaştığında, kapının aralık olduğunu fark ettin. İçeriden ince bir müzik sesi geliyor.",
        "Arabada beklerken dışarıdan bir tıkırtı sesi duydun. Farların arasından bir silüet geçti. Görünüşe göre seni izliyordu.",
        "Kapıyı hafifçe iterek içeri girdin. İçerisi eski, tozlu bir eve benziyordu. Salondaki şömine yanıyor, ancak kimse görünmüyordu. Masanın üstünde eski bir günlük ve bir anahtar vardı.",
        "Beklerken içeriden bir çığlık sesi duydun. Çığlık öyle bir yankılandı ki tüm cesaretini kaybetmek üzeresin. Ancak birkaç saniye sonra bir fısıltı seni tekrar harekete geçirdi.",
        "Farları kapattığında, arabanın camına bir şeyin tıklandığını fark ettin. Cesaretini toplayıp camdan dışarı bakınca bir yüzün sana dik dik baktığını gördün. Hemen arabanın kapılarını kilitlemek istedin.",
        "Arabanın farını açık bırakıp dışarı çıktın. El fenerinle ormana doğru ilerlerken ayak izleri gördün. Ayak izleri ya kulübeye ya da daha derinlere gidiyordu."
    
 ]
function isAccepted(msg, ...keys){
    const value=prompt(msg);
    if(keys.includes(value)){
        return value;
    }else{
        alert("hatalı tuşlama yaptınız");
        return isAccepted(msg, ...keys);
    }
}
function optionOne(){
    alert(Story[1]);
    const value=isAccepted("Seçenekler:\n1.İçeri girmeye karar ver.\n2. Kapıda bekleyip içeriden bir ses duyana kadar bekle.","1","2");
    localStorage.setItem("option1", JSON.stringify(value));
    if(value==1){
        return optionOneToOne();

    }else if(value==2){
        return optionOneToTwo
    }
    

}
function optionOneToOne(){
    alert(Story[3]);
    const value=isAccepted("seçenekler:\n1.Günlüğü alıp okumaya başla.\n2.Anahtarı alıp kapının arkasındaki kilitli odayı açmayı dene.","1","2");
    localStorage.setItem("option1.1", JSON.stringify(value));
    if(value==1){
        return
    }else if(value==2){
        return
    }

}
function optionOneToTwo(){
    alert(Story[4]);
    const value=isAccepted("seçenekler:\n1.Çığlığı görmezden gelerek kaçmaya karar ver.\n2.Çığlığın geldiği yere doğru git ve ne olduğunu öğren.","1","2");
    localStorage.setItem("option1.2", JSON.stringify(value));
    if(value==1){
        return
    }else if(value==2){
        return
    }

}
function optionTwo(){
    alert(Story[2]);
    const value=isAccepted("seçenekler:\n1.Farları kapat ve saklanmaya çalış.\n2. Arabadan inip sesin geldiği yöne bakmaya karar ver.","1","2");
    localStorage.setItem("option2", JSON.stringify(value));
    if(value==1){
        return optionTwoToOne();
    }else if(value==2){
        return optionTwoToTwo();
    }

}
function optionTwoToOne(){
    alert(Story[5]);
    const value=isAccepted("seçenekler:\n1.Kapıları kilitle ve hareketsiz bekle.\n2.Arabayı çalıştırmaya çalış ve hızla uzaklaşmaya karar ver.","1","2");
    localStorage.setItem("option2.1", JSON.stringify(value));
    if(value==1){
        return
    }else if(value==2){
        return
    }

}
function optionTwoToTwo(){
    alert(Story[6]);
    const value=isAccepted("Seçenekler:\n1.Ayak izlerini takip ederek kulübeye git.\n2.Ormanın derinliklerine dal ve sesin kaynağını bulmaya çalış.","1","2");
    localStorage.setItem("option2.2", JSON.stringify(value));
    if(value==1){
        return
    }else if(value==2){
        return
    }


}

function mainMenu(){
    alert(`${Story[0]}`);
    const value=isAccepted("bir seçenegi seciniz:\n1.Işığın olduğu yere doğru yürümeye karar ver.\n2.Arabada kalıp sabaha kadar beklemeyi seç.","1","2");
    localStorage.setItem("option", JSON.stringify(value));
    if(value==1){
        return optionOne();
    }else if(value==2){
        return optionTwo();
    }

}
mainMenu();