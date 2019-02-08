let http=require('http');
let formidable=require('formidable');
let fs=require('fs');
http.createServer(function (req,res) {
    if (req.url=='/fileupload'){
        let form=new formidable.IncomingForm();
    }
    
})