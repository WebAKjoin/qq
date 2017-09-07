var vm=new Vue({
	el:".content",
	data:{
		arr2:[]
	},
	created:function(){
		var that=this;
		fetch("/data/path").then(function(res){
			return res.json();
		}).then(function(data){
			that.arr2=data.data;
		})
	}
});