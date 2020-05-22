function contar(){
    let inicio = document.querySelector('input.ini')
    let fim = document.querySelector('input.fim')
    let passo = document.querySelector('input.pas')
    let resposta = document.querySelector('p#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length==0){
            alert('[ERRO] Contem espaços vazios, favor preencher com um valor!')
        } else {
                let n_inicio = Number(inicio.value)
                let n_fim = Number(fim.value)
                let n_passo = Number(passo.value)

                if(n_passo<=0){
                        alert('[ERRO] O campo passo não pode ficar em branco, seu valor sera iniciado em "1"')
                        n_passo=1
                }
                    if(n_inicio < n_fim){
                        for(var i=n_inicio; i<=n_fim; i+=n_passo){
                            resposta.innerHTML+=`${i} \u{1F449}`
                        }

                    resposta.innerHTML+=`\u{1F44D}`

                    }else{
                        for(var i=n_inicio; i<=n_fim; i-=n_passo){
                            resposta.innerHTML+=`${i} \u{1F449}`
                        }

                    resposta.innerHTML+=`\u{1F44D}`
                }
            }
}