var host='http://tea.api.test.sygcsoft.com/api/';
function ajaxGetList(url,callback){
	$.ajax({
		type:"GET",
		url:host+url,
		async:false,
		success:function(data){
			data=JSON.parse(data);
			console.log(data);
			callback(data)
		},
		error:function(xhr,type){
			console.log(xhr);
			console.log(type);
		}
	});
};