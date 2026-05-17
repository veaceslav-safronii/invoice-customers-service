# invoice-customers-service

Customers management microservice for the Invoice System

## Endpoints

| Method | Path | Description | Auth required |
|--------|------|-------------|---------------|
| GET | /customers | List all customers | Yes |
| GET | /customers/:id | Get customer by ID | Yes |
| POST | /customers | Create customer | Yes |
| PUT | /customers/:id | Update customer | Yes |
| DELETE | /customers/:id | Delete customer | Yes |

All endpoints require a valid JWT token in the `Authorization: Bearer <token>` header. Token validation is done via the Auth Service.

## Example requests

```bash
# List customers
curl http://localhost:3002/customers \
  -H "Authorization: Bearer YOUR_TOKEN"

# Create customer
curl -X POST http://localhost:3002/customers \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name":"Acme SRL","email":"contact@acme.ro","phone":"0721000000","address":"Str. Exemplu 1, Bucuresti"}'

# Update customer
curl -X PUT http://localhost:3002/customers/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"phone":"0722111111"}'

# Delete customer
curl -X DELETE http://localhost:3002/customers/1 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Environment variables

```
PORT=3002
DB_HOST=postgres
DB_NAME=invoices_db
DB_USER=invoice_user
DB_PASSWORD=invoice_pass
AUTH_SERVICE_URL=http://auth:3001
```


## Tech stack

- Node.js + Express.js
- PostgreSQL (schema: `customers_schema`)
- JWT validation via Auth Service (HTTP call)
