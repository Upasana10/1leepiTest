package com.prgm;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Iterator;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;

public class ReadData {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
FileInputStream fis = new FileInputStream(" C:\\Users\\user\\Desktop\\ReadData.xlsx");
HSSFWorkbook wb = new HSSFWorkbook(fis);
HSSFSheet s =wb.getSheet("ReadData");
Iterator<Row>rowit=s.iterator();
rowit.next();
while(rowit.hasNext()) {
	System.out.println(rowit.next().getCell(0).getStringCellValue());
}


	}

}
