
	function test(val){
		alert(val)
	}
	function chk(){
		let pwd1 = document.getElementById('pwd1')
		let pwd2 = document.getElementById('pwd2')
		console.log(pwd1.value)
		console.log(pwd2.value)
		if(pwd1.value == pwd2.value){
			alert('비밀번호가 일치 합니다')
			var msg ='<b>안</b><i>녕하</i><sub>세요</sub>'
			document.getElementById('h3').innerHTML = msg
			document.getElementById('pwdchk').innerHTML = 
					'<b style="color:red;">일치합니다</b>'
		}else{
			alert('비밀번호 확인하세요')
			pwd1.value="안녕하세요"
			pwd2.value="비밀번호입니다"
			pwd1.focus()
		}
	}