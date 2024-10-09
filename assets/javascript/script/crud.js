let dataGambar = gambar;
// console.log(dataGambar)

dataGambar.push({
    id: 2,
    url: "ssss",
    jwb: 'ssjsj'
})

// console.log(dataGambar)
let result = [];
for(let x of dataGambar){
    // console.log(x)
    if(x.id !== 1){
        result.push(x);
    }
}
console.log(result)