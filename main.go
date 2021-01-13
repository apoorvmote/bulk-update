package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"os"
)

func main() {

	old := "1.83.0"

	new := "1.84.0"

	paths := []string{
		"./project1/package.json",
		"./project2/package.json",
		"./project3/package.json",
	}

	for _, path := range paths {

		input, err := ioutil.ReadFile(path)

		if err != nil {

			fmt.Println(err)

			os.Exit(1)
		}

		output := bytes.Replace(input, []byte(old), []byte(new), -1)

		err = ioutil.WriteFile(path, output, 0644)

		if err != nil {

			fmt.Println(err)

			os.Exit(1)
		}
	}
}
