package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Привет! Это мой первый веб-сервер на Go!")
}

func main() {
    http.HandleFunc("/", handler)
    fmt.Println("Сервер запущен на http://localhost:80")
    http.ListenAndServe(":80", nil)
}