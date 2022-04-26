#!/usr/bin/env node

console.log("selamat pagi")
const args = process.argv.slice(2);
const dir = args[0];
const name = args[1].split('--name=')[1];

console.log({ dir, name })
