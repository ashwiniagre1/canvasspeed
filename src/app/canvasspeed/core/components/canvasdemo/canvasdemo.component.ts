/**
 * Created by: 
 * Date: 03/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Canvasdemo } from './../../models/canvasdemo.model'
@Component(
{
	selector: 'canvasdemo',
	templateUrl: 'canvasdemo.component.html'
})
export class CanvasdemoComponent implements OnInit
{
	
	canvasdemo: Canvasdemo;
	
	
	constructor( private router: Router)
	{
		this.canvasdemo = new Canvasdemo();
		
	}
	ngOnInit()
	{
	}
	
	
	
}

