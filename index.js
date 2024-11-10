
function daysQouts(){
    
var qoutOfDay = [

    {
        qoute :"“Be yourself; everyone else is already taken.”",
        auther : "- Oscar Wilde -",
    }, 
    {
        qoute :"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        auther : "- Marilyn Monroe -",
    }, 
    {
        qoute :"“So many books, so little time.”",
        auther : "- Frank Zappa -",
    }, 
    {
        qoute :"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        auther : "- Albert Einstein -",
    }, 
    {
        qoute :"“A room without books is like a body without a soul.”",
        auther : "- Marcus Tullius Cicero -",
    }, 
    {
        qoute :"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        auther : "- Bernard M. Baruch -",
    }, 
    {
        qoute :"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        auther : "- Dr. Seuss -",
    }, 
    
    ];


    var random = Math.trunc(Math.random() *  qoutOfDay.length);

    document.getElementById("qoute-text").innerHTML= (qoutOfDay[random].qoute);
    document.getElementById("qoute-auther").innerHTML= ( qoutOfDay[random].auther);
    


};

