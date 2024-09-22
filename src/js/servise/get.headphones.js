export  default async function getHeadphones(){
        let data = []
    

    try{
        let response = await fetch ('http://localhost:8000/headphones/get-list')
        if (response.ok){
            console.log(`Загруженно со статусом ${response.status}`)
            let data = await response. json()
            return data

       }
    }catch{
        throw new Error('Возникла ошибка')
        
    }

}


