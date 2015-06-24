.PHONY: build run

SERVICE=react-playground
SERVICE_PORT=3000

build:
	docker build --tag $(SERVICE) .

run: build
	docker run -p $(SERVICE_PORT):3000 --name $(SERVICE) --rm --memory=1gb $(SERVICE)
