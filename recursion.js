//一个递归函数
function factorial(num){
	if(num<=1){
		return 1;
	}else{
		return num*factorial(num-1);
	}
}
var anFac=factorial;
factorial=null;
//console.log(anFac(4));执行这一步会报错；因为factorial被赋值为空，anFac调用进入else的时候回报错

/*
	第一种解决办法是使用arguments.callee
	return num*factorial(num-1)

	第二种是如果处于ES5的严格模式中，arguments.callee被禁用
	var factorial=(function f(){
		if(num<=1){
			return 1;
		}else{
			return num*f(num-1);
		}
	});
*/
