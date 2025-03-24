package handlers

import (
	"context"
	"fmt"
	"log"

	apiv1 "github.com/itsrobel/spacetime/internal/services/apiv1"

	"connectrpc.com/connect"
)

type MessageServer struct{}

func NewMessageServer() *MessageServer {
	return &MessageServer{}
}

func (s *MessageServer) Message(
	ctx context.Context,
	req *connect.Request[apiv1.MessageData],
) (*connect.Response[apiv1.MessageData], error) {
	log.Println("recv: ", req.Msg)
	res := connect.NewResponse(&apiv1.MessageData{
		Content: fmt.Sprintf("Hello, %s!", req.Msg.Content),
	})
	res.Header().Set("Greet-Version", "v1")
	return res, nil
}
