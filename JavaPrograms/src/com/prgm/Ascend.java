package com.prgm;

public class Ascend {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
int a[]= {5,65,1,2};
int temp=0;
for(int i=0;i<a.length-1;i++) {
	for(int j=i+1;j<a.length-1;j++) {
		if (a[i]>a[j]) {
		temp=a[i];
		a[i]=a[j];
		a[j]=temp;
	}}
		System.out.println("ascn values"+a[i]);
		}
	}

}
