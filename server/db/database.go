package db

import (
	"database/sql"
	"fmt"
	"restwebserver/configs"

	_ "github.com/lib/pq"
)

func InitDatabase() (*sql.DB, error) {
	config, err := configs.LoadConfig()

	if err != nil {
		return nil, err
	}

	connectionString := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", config.Database.Host, config.Database.Port, config.Database.User, config.Database.Password, config.Database.Name)

	fmt.Println(connectionString)
	db, err := sql.Open("postgres", connectionString)

	if err != nil {
		return nil, err
	}

	return db, err
}
