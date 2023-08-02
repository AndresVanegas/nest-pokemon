"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinValidationSchema = void 0;
const Joi = require("joi");
exports.JoinValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3005),
    DEFAULT_LIMIT: Joi.number().default(6),
});
//# sourceMappingURL=joi.schema.validation.js.map