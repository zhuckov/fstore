package product

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetProducts(c *gin.Context) {
	c.String(http.StatusOK, "Привет! Это обработчик GET запроса для маршрута /")
}
