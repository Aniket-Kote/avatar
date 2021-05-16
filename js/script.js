

$(document).ready(function(){

    $('#click_me').click(function(){
        const a=$('#nameid').val();
        if(a=="")
        {
            $('#err').html('Enter Name');
           
        }
        else if(a!=""){
            $('#err').html('');
           

        $('.imgchange').attr('src','https://joeschmoe.io/api/v1/'+a.toLowerCase());
       
        }
        
    });




});

