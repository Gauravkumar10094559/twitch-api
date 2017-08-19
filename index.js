	// client id aeyg3e2sro1g5vrzpj7qky2fz5dzur
	// https://api.twitch.tv/kraken/users
	// client secret  mom35y6nfjp0eujh5jidqrrf0cks24
	$(document).ready(function(){

	var users=["ESL_SC2", "medryBW", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var endpoint="https://api.twitch.tv/kraken/channels/";
	var stream="https://api.twitch.tv/kraken/streams/";
	var api="?client_id=aeyg3e2sro1g5vrzpj7qky2fz5dzur";
	var id;
	var preUrl;
	var preStream;
	var count1=0;
	var count2=0;
 
	function channel1(url)
	{
		console.log("channel1 info");

		$.getJSON(url,function(data){
		console.log("----------");
			console.log(data.url);
			console.log(data.display_name);
			console.log(data.status);
		$(id).append('<h3>Link:</h3><a target="blank" href="'+data.url+'">'+data.display_name+'</a><p>Status:'+data.status+'</p>');
		});
	}

	function stream1(url)
	{
		console.log("stream1 info");
		$.getJSON(url,function(data)
			{
				console.log("xxxxxxxxxxxxxx");
			if(data.stream!==null)
			{
				console.log("stream-data-"+data.stream.game);
				$(id).append('<p>Stream:'+data.stream.game+'</p>');
			}
			else
			{
				console.log("stream-data-Not available");
				$(id).append('<p>Stream:'+'Not available'+'</p>');
			}
		});
	}

	users.forEach(function(user){
		console.log("the user is-"+user);
		preUrl=endpoint+user+api;
		
		//console.log("the stream is-"+preStream);		
		id="#predefined";
		// console.log("calling the channel1-"+preUrl);
		//channel1(preUrl);
		// console.log("calling the stream1-"+preStream);
		//stream1(preStream);
		$.getJSON(preUrl,function(data){
			 
			$("#predefined").append('<div class="inside"><span>Link:</span><a target="blank" href="'+data.url+'">'+data.display_name+'</a><p>Status:'+data.status+'</p></div>');
			
			count1++;
			console.log("con1=="+count1);
			console.log("con2=="+count2);
			if(count1==8)
			{
				if(count1==8 && count2==8)
				{
				var p=$("#predefined");
				var s=$("#streamData");
				var i=0;
				var j=1;
				while(i<$(".inside").length && j<=$(".streamPara").length)
				{
					console.log("before"+p[0].childNodes[j].innerHTML);
					p[0].childNodes[j].innerHTML+='<p>'+s[0].childNodes[i].innerHTML+'</p>';
					console.log("after"+p[0].childNodes[j].innerHTML);
					i++;
					j++;

				}
				if(j>$(".streamPara").length)
				{
					$("#streamData").html("");
				}
				// var a=s[0].childNodes[1].innerHTML;//0-7
				// console.log(a);
				// console.log(typeof(a));
				// console.log(p[0].childNodes[1].innerHTML);//1-8
				// var u=p[0].childNodes[1].innerHTML;
				// u+='<p>'+a+'</p>'
				// console.log(u);

				}
			}
		});

		
	});



	users.forEach(function(user){
		preStream=stream+user+api;
		id="";
		$.getJSON(preStream,function(data){
			if(data.stream!==null)
				{
					$("#streamData").prepend('<p class="streamPara">Stream:'+data.stream.game+'</p>');
				}
			else
				{
					$("#streamData").prepend('<p class="streamPara">Stream:'+'Not available'+'</p>');
				}
				 
				count2++;
		});

	});





// data.display_name

document.getElementById("channel").addEventListener("keydown",function(e){
	if(e.which==13)
	{
			var channel=$("#channel").val();  	
			var url=endpoint+channel+api;
			var streamUrl=stream+channel+api;
			id="#url";
			// channel1(url);
			// stream1(streamUrl);
			$.getJSON(url,function(data){
			 console.log("datadata");
			 
						$("#url").append('<span>Link:</span><a target="blank" href="'+data.url+'">'+data.display_name+'</a><p>Status:'+data.status+'</p>');
			});
			$.getJSON(streamUrl,function(data){
				console.log("datadata");
				if(data.stream!==null)
				{
					$("#url").append('Stream:<span>'+data.stream.game+'</span>');

				}
				else{
					$("#url").append('Stream:<span>'+'Not available'+'</span>');
				}

			});
	}
});
		$("#button").on("click",function()
			{		

			var channel=$("#channel").val();  	
			var url=endpoint+channel+api;
			var streamUrl=stream+channel+api;
			id="#url";
			channel1(url);
			stream1(streamUrl);
			// $.getJSON(url,function(data){
			//  console.log("datadata");
			 
			// 			$("#url").append('<span>Link:</span><a target="blank" href="'+data.url+'">'+data.display_name+'</a><p>Status:'+data.status+'</p>');
			// });
			// $.getJSON(streamUrl,function(data){
			// 	console.log("datadata");
			// 	if(data.stream!==null)
			// 	{
			// 		$("#url").append('Stream:<span>'+data.stream.game+'</span>');

			// 	}
			// 	else{
			// 		$("#url").append('Stream:<span>'+'Not available'+'</span>');
			// 	}

			// });

			});
	});