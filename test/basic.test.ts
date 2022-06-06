import { question } from 'readline-sync';
import { test, describe, expect, } from 'vitest';

describe('suite name', () => {
  test('Ask for user input', async () => {
    const value = await question('Please press enter');
    expect(value).toBeTruthy();
  });
});
