# 24G Backend Test Project

`npm test http://localhost:3000`

The `test` script will execute a series of requests to valid inputs and outputs from the provided API.

1. `POST /users`
2. `GET /users/:id`
3. `PATCH /users/:id`
4. `GET /users/:id`
5. `DELETE /users/:id`
6. `GET /users/:id`

All data should be saved in the provided MySQL database.

### `POST: /users`

Create a user from the provided payload.

```json
{ "firstName": "Test", "lastName": "User" }
```

The response should include the `id` of the record created in the database.

```json
// HTTP/1.1 200 OK
{ "id": "EXAMPLE-UUID" }
```

### `GET: /users/:id`

Return the entire user object for the provided `id`.

The response should include the `id`, `firstName`, and `lastName` of the user record.

```json
// HTTP/1.1 200 OK
{ "id": "EXAMPLE-UUID", "firstName": "Test", "lastName": "User" }
```

If no record is found, the HTTP status code should be a `404`.

```json
// HTTP/1.1 404 Not Found
```

### `PATCH: /users/:id`

Update the user object for the provided `id` and payload.

```json
{ "firstName": "24G", "lastName": "Backend" }
```

The response HTTP status code should be a `204`.

```json
// HTTP/1.1 204 No Content
```

If no record is found, the HTTP status code should be a `404`.

```json
// HTTP/1.1 404 Not Found
```

### `DELETE: /users/:id`

Delete the user object for the provided `id`.

The response HTTP status code should be a `204`.

```json
// HTTP/1.1 204 No Content
```

If no record is found, the HTTP status code should be a `404`.

```json
// HTTP/1.1 404 Not Found
```
