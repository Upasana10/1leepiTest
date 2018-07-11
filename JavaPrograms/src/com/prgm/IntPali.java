package com.prgm;

import java.util.Scanner;

public class IntPali {
public static void main (String[]Args) {
	System.out.println("enter value");
Scanner sc= new Scanner (System.in);
	int n= sc.nextInt();
	int temp=n,rev=0;
	while(temp!=0)
	{
		rev=rev*10;
		rev=rev+temp%10;
		temp=temp/10;
	}
	if(n==rev) {
		System.out.println("pall");
	}
	else {
		System.out.println(" not pall");
	}
	}
}
