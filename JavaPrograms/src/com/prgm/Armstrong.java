package com.prgm;

import java.util.Scanner;

public class Armstrong {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
int n=159;
int temp=n;
int r,sum=0;
while(n>0) {
	r=n%10;
	n=n/10;
	sum=sum+r*r*r;
}
if(temp==sum) {
	System.out.println("a");}
else {
	
	System.out.println("Na");}
}
	}


