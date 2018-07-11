package com.prgm;

import java.util.Scanner;

public class StrPal {

	public static void main(String[] args) {
	String reverse ="";
System.out.println("enter input");
Scanner sc = new Scanner(System.in);
String original=sc.nextLine();
for(int i=original.length()-1;i>=0;i--) {
reverse=reverse+original.charAt(i);
}
if(original.equals(reverse)) {
System.out.println("Pallindrome");
}else {
System.out.println(" Not a Pallindrome");
}}}
