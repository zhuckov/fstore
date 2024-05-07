package main

import (
	"fmt"
	"restwebserver/configs"
)

func main() {
	config, err := configs.LoadConfig()
	if err != nil {
		panic(err)
	}
	fmt.Println(config.Database.Name)
}
