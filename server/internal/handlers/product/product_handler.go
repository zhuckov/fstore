package product

import (
	"database/sql"
	"log"
	"restwebserver/models"

	"github.com/gin-gonic/gin"
)

func GetProducts(c *gin.Context, db *sql.DB) {
	var products []models.Product
	rows, err := db.Query("SELECT id, product_name, product_price, product_card_photo FROM products")
	if err != nil {
		log.Fatal("Ошибка при выполнении запроса к базе данных:", err)
	}

	defer rows.Close()

	for rows.Next() {
		var product models.Product
		err := rows.Scan(&product.ID, &product.ProductName, &product.ProductPrice, &product.ProductCardPhoto)

		if err != nil {
			log.Fatal("Ошибка при сканировании строки:", err)
		}

		products = append(products, product)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
	c.JSON(200, products)
}

func CreateUser()
