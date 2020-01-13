module.exports.home=(req,res)=>{
    var fs=require('fs')
    fs.readFile('./final_valid_headers_for_chart.txt','utf-8',(err,data)=>{
        data=JSON.parse(data)
        
        var keys= Object.keys(data)
        var values=[]
        for(var i=0;i<keys.length;i++){
            oldKey=keys[i]
            newKey=keys[i].replace("'"," ")
            if(oldKey!=newKey){    delete Object.assign(data, {[newKey]: data[oldKey] })[oldKey];}
            
        }
        res.render('index.ejs',{data})

    })

}