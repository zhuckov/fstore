package models

type Product struct {
	ID               int    `json:"id"`
	ProductName      string `json:"productName"`
	ProductPrice     int    `json:"productPrice"`
	ProductCardPhoto string `json:"productPhoto"`
}

type CreateProductInput struct {
	ProductName      string `json:"productName" binding:"required"`
	ProductPrice     int    `json:"productPrice" binding:"required"`
	ProductCardPhoto string `json:"productPhoto" binding:"required"`
}

type DeleteUserRequest struct {
	ID int `json:"id" binding:"required"`
}
