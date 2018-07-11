package com.prgm;

public class Swap {
	public static void main(String[] args) {
		int x=3;
		int y=2;
		System.out.println("Before Swap");
		System.out.println("x value"+x);
		System.out.println("y value"+y);
		x=x+y;//5
		y=x-y;
		x=x-y;
		
		System.out.println("After Swap");
		System.out.println("x value"+x);
		System.out.println("y value"+y);
		
	}
}
