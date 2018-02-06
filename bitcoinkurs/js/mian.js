$( document ).ready(function() {
    var interval = null;
    function getChange(){
        var buyArrow = $('#buy-arrow')
        var currentBuyPrice= parseFloat($('#buy').html());
        var currentSellPrice= parseFloat($('#sell').html());
        console.log(currentBuyPrice);
        
        $.getJSON( "https://blockchain.info/pl/ticker", function( data )
           {
     
//     console.log(data.PLN.buy);
//     console.log(data.PLN.sell);
     $('#buy').html(data.PLN.buy);
     $('#sell').html(data.PLN.sell);
            
            if(currentBuyPrice<parseFloat(data.PLN.buy)){
                console.log('wzrostło')
                buyArrow.css('color','green').removeClass().addClass("fa fa-arrow-up");
            }else if(currentSellPrice>parseFloat(data.PLN.sell)){
                 buyArrow.css('color','red').removeClass().addClass("fa fa-arrow-down");
            }else{
               buyArrow.css('color','white').removeClass().addClass("fa fa-minus-square-o");
            }

 });    }

    getChange();    
     interval = setInterval(getChange, 5000);
    $('.control-btn').click('on', function(){
        clearInterval(interval);
        interval = setInterval(getChange, $(this).val());
        $('#refresh-fre').html($(this).text());
    })
});
