$(document).ready(function()
			{
			   $(function()
  	           {
  		          $("#accordion").accordion();
  	           });
				$("#btn1").click(function()
				{
					name=$("#titl").val();
					cont=$("#content").val();
					if(name.length==0 || cont.length==0)
					{
					alert("please enter the deatils ");
				    }
				    else
				    {
				    	var data="";
				    	$(".post").remove();
				    	$("#titl").val("");
					   $("#content").val("");
				    
				      data="<h3> Title:"+name+"</h3><p> content is : "+cont+"</p>";
				      $("#accordion").append(data);

				    }
				});
				 $("#btn1").click(function a() 
  				{
    	      $("#accordion").accordion("refresh");
             });
			});