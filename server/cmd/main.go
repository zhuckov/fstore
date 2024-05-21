package main

import (
	"log"
	"restwebserver/configs"
	"restwebserver/db"
	"restwebserver/internal/handlers/product"

	"github.com/gin-contrib/cors"
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

	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"}, // Разрешенные домены
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	r.GET("/", func(ctx *gin.Context) {
		product.GetProducts(ctx, database)
	})

	r.Run(serverHost)
}
