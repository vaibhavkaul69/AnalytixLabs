try{

     
    var dropDown=document.getElementsByClassName('dropdown-toggle');
    var dropDownList=document.getElementById('drop-menu');

      dropDown[0].addEventListener('click',function(){
        dropDownList.style.display='block';
      });
    }
    catch(error)
    {
      console.log(error.message);
    }