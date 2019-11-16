#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clear_1 = __importDefault(require("clear"));
var index_1 = require("./sass-mixins/index");
function run() {
    clear_1.default();
    getUserArgs(process.argv).forEach(function (arg) {
        if (arg.includes('sass')) {
            index_1.sass();
        }
    });
}
function getUserArgs(args) {
    return args.splice(2);
}
run();
