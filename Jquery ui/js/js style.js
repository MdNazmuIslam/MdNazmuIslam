$(document).ready (function(){
     $("#dateinput").datepicker({
     numberOfMonths:2,
     changeYear:true,
     changeMonth:true,
    weekHeader:"wk no",
    showOtherMonths: true,
    minDate: new Date(2016,0,1),
    maxDate: new Date(2026,4,1)
     });

    $(".mypragraph").accordion({
        collapsible:true,
        event:"click",
        animate:1000,
        active:0,
        heightStyle:true,
        icons:{header:"ui-icon-plusthick",activeHeader:"ui-icon-minusthick"}
    });
    
   $(".mesageb").click(function(){
        $(".myimg").dialog({
            title:" My and My borther photo",
            draggable:true,
            resizeble:true,
            height:300,
            width:300,
            modal:true,
            buttons:[
                {
                    text:"close",
                    icon:" ui-icon-close",
                    click: function(){
                        $(this).dialog("close");
                    }
                },
                {
                    text:"ok",
                    icon:" ui-icon-check",
                    click: function(){
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });
    
    $( "#draggable" ).draggable();
    $(".resize").resizable({
        maxWidth:500,
        maxHeight:600,
        autoMide:true,
//        distance:200,
        ghost:true,
        asopectRatio:true
        
    });
    
});











