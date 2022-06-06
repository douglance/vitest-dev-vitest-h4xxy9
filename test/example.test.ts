import fetch from "node-fetch"
import { question } from 'readline-sync';
import { test, describe, expect, beforeAll, } from 'vitest';

describe('example', () => {
  beforeAll(async ()=>{
    await fetch('https://github.com')
  })
  test('Ask for user input', async () => {
    await question('Please press enter');
    expect(true).toBeTruthy();
  });
});
