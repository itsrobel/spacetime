package main

import (
	"log"
	"net/http"
	"github.com/itsrobel/spacetime/internal/handlers"
	"github.com/itsrobel/spacetime/internal/services/apiv1/apiv1connect"

	"github.com/rs/cors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

func main() {
	mux := http.NewServeMux()

	messageServer := handlers.NewMessageServer()
	path, handler := apiv1connect.NewMessageServiceHandler(messageServer)
	mux.Handle(path, handler)

	// Configure CORS
	corsHandler := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders: []string{"Accept", "Content-Type", "Connect-Protocol-Version"},
	})

	wrappedHandler := corsHandler.Handler(mux)
	server := &http.Server{
		Addr:    ":8080",
		Handler: h2c.NewHandler(wrappedHandler, &http2.Server{}),
	}

	log.Println("Server starting on :8080")
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("Server error: %v", err)
	}
}
