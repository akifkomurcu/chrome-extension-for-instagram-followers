const button = document.createElement('button');
button.innerText = 'Taramaya Başla';
document.querySelector('header').appendChild(button);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var namesTakipci = [];

async function takipciFunction() {
    document.querySelector('div > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > section > main > div > header > section > ul > li:nth-child(2) > a').click();
    button.remove();
    ht=1;
    last_ht=0;
    while(ht!=last_ht){
        last_ht=ht;
        await sleep(1000);
        document.querySelector('div._aano').scrollTo(0,document.querySelector('div._aano').scrollHeight);
        ht = document.querySelector('div._aano').scrollHeight;
        linksTakipci = document.querySelectorAll('a.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.notranslate._a6hd');
    }

}
var namesTakipEdilen = [];

async function takipEdilen() {
    h1 = 1;
    last_ht = 0;
    while (h1 != last_ht) {
        last_ht = h1;
        await sleep(1000);
        document.querySelector('div._aano').scrollTo(0, document.querySelector('div._aano').scrollHeight);
        h1 = document.querySelector('div._aano').scrollHeight;
        linksTakipEdilen = document.querySelectorAll('a.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.notranslate._a6hd');
    }
}

var finalList = [];

button.addEventListener('click', async() => {
    // This will be executed in the background page
    await takipciFunction();
    linksTakipci.forEach(element => {
        namesTakipci.push(element.innerText);
    });
    document.querySelector("div > div > div > div:nth-child(4) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div.x1qjc9v5.x78zum5.xdt5ytf > div > div._ac7b._ac7d > div > button").click();
    await sleep(1000);
    document.querySelector("div > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > section > main > div > header > section > ul > li:nth-child(3) > a").click();
    await sleep(1000);
    await takipEdilen();
    linksTakipEdilen.forEach(element => {
        namesTakipEdilen.push(element.innerText);
    }
    );
    namesTakipEdilen.forEach(element => {
        if (!namesTakipci.includes(element)) {
            finalList.push(element);
        }
    });
    // takip edilen listesi kapat
    document.querySelector("div > div > div > div:nth-child(4) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div.x1qjc9v5.x78zum5.xdt5ytf > div > div._ac7b._ac7d > div > button").click();

    const container = document.createElement('div');
    container.class= "container";
    container.id = "div";
    const h1 = document.createElement('h1');
    h1.innerText = "Beni Takip Etmeyenler";
    container.appendChild(h1);
    const list = document.createElement('ul');
    list.id = "ul";
    container.appendChild(list);
    
    finalList.forEach(element => {
        const p = document.createElement('p');
        p.innerText = element;
        container.appendChild(p);
    });
    document.querySelector('header').appendChild(container);
});
