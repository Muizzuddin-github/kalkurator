const items = document.querySelectorAll('.item')
let tampil = ''
items.forEach(item =>{
    const hasil = document.getElementsByClassName('tampil')[0]
    item.addEventListener('click', function(){
        if(this.textContent === 'delete'){
            tampil = tampil.split('')
            tampil.pop()
            tampil = tampil.join('')
            hasil.innerHTML = tampil
        }else if((this.textContent === '-' && tampil === '') || (this.textContent === '+' && tampil === '') || (this.textContent === 'x' && tampil === '') || (this.textContent === '/' && tampil === '')){
            tampil = ''
        }else if(this.textContent === '+/-'){
            tampil += '-'
            hasil.innerHTML = tampil
        }else if(this.textContent === 'C'){
            tampil = ''
            hasil.innerHTML = tampil

            document.querySelector('.akhir').innerHTML = ''
        }else{
            tampil += this.textContent
            hasil.innerHTML = tampil
        }
    })
})


const samaDengan = document.querySelector('.samaDengan')
samaDengan.addEventListener('click', function(){
    const akhir = document.querySelector('.hasil .akhir')
    let nilai = []
    let value = ''
    for(const n of tampil){
        if(n === 'x' || n === '+' || n === '-' || n === '/'){
            nilai.push(value)
            nilai.push(n)
            value = ''
        }else{
            value += n
        }
    }
    if(value != ''){
        nilai.push(value)
    }
    while(nilai.includes('x')){
        let kali = 1
        for(const [i,n] of nilai.entries()){
            if(n === 'x'){
                kali = nilai[i-1] * nilai[i + 1]
                nilai.splice(i-1, 3,kali)
            }

        }
    }

    while(nilai.includes('/')){
        let bagi = 1
        for(const [i,n] of nilai.entries()){
            if(n === '/'){
                bagi = nilai[i-1] / nilai[i + 1]
                nilai.splice(i-1, 3,bagi)
            }
        }
    }

    if(nilai[1] === '+'){
        while(nilai.includes('+')){
            let tambah = 0
            for(const [i,n] of nilai.entries()){
                if(n === '+'){
                    tambah = +nilai[i-1] + +nilai[i + 1]
                    nilai.splice(i-1, 3,tambah)
                }
            }
        }

        while(nilai.includes('-')){
            let kurang = 0
            for(const [i,n] of nilai.entries()){
                if(n === '-'){
                    kurang = nilai[i-1] - nilai[i + 1]
                    nilai.splice(i-1, 3,kurang)
                }
            }
        }
    }else if(nilai[1] === '-'){
        while(nilai.includes('-')){
            let tambah = 0
            for(const [i,n] of nilai.entries()){
                if(n === '-'){
                    tambah = nilai[i-1] - nilai[i + 1]
                    nilai.splice(i-1, 3,tambah)
                }
            }
        }

        while(nilai.includes('+')){
            let kurang = 0
            for(const [i,n] of nilai.entries()){
                if(n === '+'){
                    kurang = +nilai[i-1] + +nilai[i + 1]
                    nilai.splice(i-1, 3,kurang)
                }
            }
        }
    }

    if(nilai.length != ''){
        akhir.innerHTML = `= ${nilai.join('')}`
    }



})