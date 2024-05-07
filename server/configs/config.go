package configs

import (
	"fmt"

	"github.com/spf13/viper"
)

type Config struct {
	Host     string
	Database DatabaseConfig
}

type DatabaseConfig struct {
	Host     string
	Port     int
	User     string
	Password string
	Name     string
}

func LoadConfig() (Config, error) {
	var config Config
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("./configs")

	err := viper.ReadInConfig()
	if err != nil {
		return config, fmt.Errorf("could not read config file: %v", err)
	}

	if err := viper.Unmarshal(&config); err != nil {
		return config, fmt.Errorf("cannot unmarshal config: %v", err)
	}
	return config, err
}
