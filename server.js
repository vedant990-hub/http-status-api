const express = require('express');
const app = express();

// A map of status codes and their descriptions
const statusDescriptions = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has succeeded and a new resource has been created as a result.",
    204: "No Content: The server has successfully processed the request but is not returning any content.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: The client must authenticate itself to get the requested response.",
    403: "Forbidden: The client does not have access rights to the content.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The request method is known by the server but is not supported by the target resource.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time (rate limiting).",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is not ready to handle the request (e.g., maintenance or overload).",
    504: "Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server."
};

// Define the GET endpoint
app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code);

    // Validate if the status code exists in the map
    if (!code || !statusDescriptions[code]) {
        return res.status(400).json({
            error: "Invalid or unsupported status code. Please provide a valid status code from the supported list."
        });
    }

    // Respond with the status code and its description
    res.json({
        status: code,
        message: statusDescriptions[code]
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
