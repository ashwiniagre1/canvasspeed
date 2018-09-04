/**
 * 
 * Date: 03/09/2018	
 */
export class Canvasdemo
{
	
	private _loginid: string;
	private _password: string;
	
	constructor() { 
	}
	
	set loginid(value: string) {
		this._loginid = value;
	}
	get loginid() : string {
		return this._loginid;
	}
	set password(value: string) {
		this._password = value;
	}
	get password() : string {
		return this._password;
	}
	
}
