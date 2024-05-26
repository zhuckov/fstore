package product

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
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

func CreateProduct(c *gin.Context, db *sql.DB) (p models.CreateProductInput) {
	var product models.CreateProductInput
	/*
		ShouldBindBodyWithJSON по ссылке на переменную product помещает внуть json из c.Request.Body
		если возникает ошибка то создаем map с ключом "error" и значением err.Error() и возращаем 400 статус
	*/
	if err := c.ShouldBindBodyWithJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	queryString := fmt.Sprintf("INSERT INTO products (product_name, product_price, product_card_photo) VALUES ('%s',%d,'%s');", product.ProductName, product.ProductPrice, product.ProductCardPhoto)
	_, err := db.Exec(queryString)
	if err != nil {
		log.Fatal("Ошибка при создании продукта:", err)
	}
	return product
}

func DeleteProduct(c *gin.Context, db *sql.DB) error {
	id := c.Param("id")
	queryString := "DELETE FROM products WHERE id = " + string(id)
	_, err := db.Exec(queryString)
	if err != nil {
		log.Fatal("Ошибка при выполнении удалении продукта:", err)
	}
	return nil
}
func UpdateMethod(c *gin.Context, db *sql.DB) error {
	id := c.Param("id")
	var product models.CreateProductInput
	if err := c.ShouldBindBodyWithJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	queryString := `
	UPDATE products 
	SET product_name = $1, product_price = $2, product_card_photo = $3
	WHERE id = $4`
	_, err := db.Exec(queryString, product.ProductName, product.ProductPrice, product.ProductCardPhoto, id)
	if err != nil {
		log.Fatal("Ошибка при выполнении обновления продукта:", err)
	}
	return nil
}
