Class1 Lab1
====

## 說明：

透過nodemailer寄信給自己

## 參考範例：

```
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "gmail.user@gmail.com",
        pass: "userpass"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 
      "Fred Foo <foo@blurdybloop.com>", 
    to: 
      "bar@blurdybloop.com, baz@blurdybloop.com", 
    subject: "Hello ", 
    text: "Hello world ",
    html: "<b>Hello world </b>"
}


smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});


```
