const bookSchemaUpdate = {
    type: "object",
    properties: {
        amazon_url: { type: "string", format: "uri" },
        author: { type: "string" },
        language: { type: "string" },
        pages: { type: "integer", minimum: 1 },
        publisher: { type: "string" },
        title: { type: "string" },
        year: { type: "integer", minimum: 1000, maximum: 9999 }
    },
    additionalProperties: false
};

module.exports = bookSchemaUpdate;