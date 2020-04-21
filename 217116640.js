var upperCase = require('upper-case');
var lowerCase = require('lower-case');

var http = require('http');
var url = require('url');
var modul = require('./addtwonumber');

//query string
var query = require('querystring');

var server = http.createServer(function(req,res){
    //www.google.com?token=
    //params['token']
    var params = query.parse(url.parse(req.url).query);
    var path = url.parse(req.url).pathname;
    console.log(path);
    res.writeHead(200,{"Content-Type":"text/plain"});
    if(path == "/post"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<div>ini div miliknya post</div>");
        let kata = params['kata'];
        if(kata){
            res.write("<div> Inputan user : </div>");
            res.write("<div>"+upperCase.upperCase(kata)+"</div>");
        }
        else{
            res.write("<b>Kata wajib diberikan</b>");
        }
    }
    else if(path=="/checkPrime"){
        res.writeHead(200,{"Content-Type":"text/html"});
        let angka = parseInt(params['angka']);
        res.write("<div>"+modul.addTwoNumber(angka)+"</div>");
    }
    else if(path == "/cetak"){
        res.writeHead(200,{"Content-Type":"text/html"});
        let angka1 = parseInt(params['angka1']);
        let angka2 = parseInt(params['angka2']);
        res.write("<div>"+modul.addTwoNumber(angka1,angka2)+"</div>");
    }
    else if(path == "/drawTriangle"){
        res.writeHead(200,{"Content-Type":"text/html"});
        let baris = parseInt(params['baris']);
        let angka = 1;
        for(var i=0; i<=baris; i++){
            for(var j=0; j<i; j++){
                res.write(angka.toString()+" ");
                angka++;
            }
            res.write("<br>");
        }
    }
    else if(path == "/printFibo"){
        res.writeHead(200,{"Content-Type":"text/html"});
        let jumlah = parseInt(params['jumlah']);
        let a=0;
        let b=1;
        let c=a+b;
        res.write("0, 1, ");
        for(var i=0; i<=jumlah; i++){
            res.write(c.toString()+", ");
            a=b;
            b=c;
            c=a+b;
        }
    }
    else if(path == "/formatString"){
        res.writeHead(200,{"Content-Type":"text/html"});
        let kata = params['kata'];
        let format = params['format'];
        if(format=="upper"){
            res.write("<div>"+upperCase.upperCase(kata)+"</div>");
        }
        else if(format=="lower"){
            res.write("<div>"+lowerCase.lowerCase(kata)+"</div>");
        }
        
    }
    else if(path == "/reverseString"){
        res.writeHead(200,{"Content-Type":"text/html"});
        let kata = params['kata'];
        for(var i=kata.length; i>=0; i--){
            res.write(kata.substr(i,1));
        }
    }
    else{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<center><h1>Praktikum SOA Minggu 1</h1>");
        res.write("Berikut ini adalah list endpoint yang dapat diakses oleh user:<br><br>");
        res.write("<div style='text-align:left;padding-left:35%;'>");
        res.write("1. /checkPrime?angka={angka}<br>");
        res.write("2. /drawTriangle?baris={baris} <br>");
        res.write("3. /reverseString?kata={kata} <br>");
        res.write("4. /printFibo?jumlah={jumlah} <br>");
        res.write('5. /formatString?kata={kata}&format={"upper" or  "lower"} <br>');
        res.write("</div>");
    }

    res.end();
});

server.listen(8080);
console.log("server listen to port 8080");