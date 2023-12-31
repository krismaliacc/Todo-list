const date = new Date;

const kegiatanku = [
    {
        task:"maen PB",
        time:"0-2-0"
    },
    {
        task:"sinau DEA",
        time:"0-3-0"
    },
    {
        task:"Bakar - Bakar",
        time:"0-0-2040"
    },
    {
        task:"Jurit malm",
        time:"0-0-2040"
    }
]
kegiatanku.forEach(function(datas){

    document.querySelector('.kotak-kegiatan').innerHTML += `
    <div class="kegiatan">
            <p>${datas.task}</p>
            <span>${datas.time}</span>
        </div>
    `
})
const tanggal  = `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()}`

const form=document.querySelector('form')
form.addEventListener("submit",function (event){
    event.preventDefault()
    const isian= document.querySelector('input')
    // document.querySelector('p').innerHTML=isian.value
    document.querySelector('.kotak-kegiatan').innerHTML += `
    <div class="kegiatan">
            <p>${isian.value}</p>
            <span>${tanggal}</span>
        </div>
    `
    isian.value = ""
})

/*

<div class="kegiatan">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, cum!</p>
            <span>1/2/2023</span>
        </div>
        
*/