package main

import "fnt"

func soma(a int, b int) int {
	return a + b;
}

func main(){
	total:= soma(1, 1)
	fnt.Println("O total é: ", total)
}