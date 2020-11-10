const data = fetch(`https://www.24h.com.vn/`)
data
    .then(function(data) {
        let dataDetsil = data.json()
        dataDetsil.then(function(dataDetali) {
            console.log(dataDetsil)
        })
    })
    .catch(function(err) {
        console.log(err)
    })