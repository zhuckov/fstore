package main

import (
	"fmt"
	"log"
	"restwebserver/configs"
	"restwebserver/db"
	"restwebserver/internal/handlers/product"

	"github.com/gin-gonic/gin"
)

func main() {
	config, err := configs.LoadConfig()

	if err != nil {
		log.Fatal("Ошибка при получении данных конфига:", err)
		return
	}

	serverHost := config.Host
	database, err := db.InitDatabase()
	if err != nil {
		log.Fatal("Ошибка при инициализации базы данных:", err)
		return
	}
	defer database.Close()

	rows, err := database.Query("SELECT id, product_name, product_price, product_card_photo FROM products")
	if err != nil {
		log.Fatal("Ошибка при выполнении запроса к базе данных:", err)
	}

	defer rows.Close()

	for rows.Next() {
		var id int
		var name string
		var price float64
		var photoURL string

		err := rows.Scan(&id, &name, &price, &photoURL)

		if err != nil {
			log.Fatal("Ошибка при сканировании строки:", err)
		}

		fmt.Printf("ID: %d, Название: %s, Цена: %.2f, Фото: %s\n", id, name, price, photoURL)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

	r := gin.Default()
	r.GET("/", product.GetProducts)

	r.Run(serverHost)
}
