# Ticketing
A platform for users selling tickets to other users, compose of:
- auth service: everything related to user signup/signin/signout
- ticket service: ticket creation/editing. Knows whether a ticket can be updated
- order service: order creation/editing
- payment service: watches for orders to be created, cancels them after 15 minutes
- expiration service: handles credit card payments. Cancels orders if payments fails, completes if payment succeeds

## Tech Stack
- TypeScript
- Express
- Docker
- kubernetes

## Features
- Microservices
