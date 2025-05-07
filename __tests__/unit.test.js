// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber(...) tests
test('Uses phone number (123) 456-7890', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('Uses phone number 098-765-4321', () => {
  expect(isPhoneNumber("098-765-4321")).toBe(true);
});

test('Uses phone number 1-22-333', () => {
  expect(isPhoneNumber("1-22-333")).toBe(false);
});

test('Uses phone number 101-101-101', () => {
  expect(isPhoneNumber("101-101-101")).toBe(false);
});

// isEmail(...) tests
test('Uses email johndoe@email.com', () => {
  expect(isEmail("johndoe@email.com")).toBe(true);
});

test('Uses email MoUnTaInS_CaSe@WeIrD.dO', () => {
  expect(isEmail("MoUnTaInS_CaSe@WeIrD.dO")).toBe(true);
});

test('Uses email !nvalid-character$@hm!m.com', () => {
  expect(isEmail("1-22-333")).toBe(false);
});

test('Uses email too_short@a.b', () => {
  expect(isEmail("too_short@a.b")).toBe(false);
});

// isStrongPassword(...) tests
test('Uses password short_word1234', () => {
  expect(isStrongPassword("short_word1234")).toBe(true);
});

test('Uses password Al1_Ch4r5', () => {
  expect(isStrongPassword("Al1_Ch4r5")).toBe(true);
});

test('Uses password !nv4l1d-Ch4R$_too_L00nG', () => {
  expect(isStrongPassword("!nv4l1d-Ch4R$_too_L00nG")).toBe(false);
});

test('Uses password 12', () => {
  expect(isStrongPassword("12")).toBe(false);
});

// isDate(...) tests
test('Uses date 1/1/2025', () => {
  expect(isDate("1/1/2025")).toBe(true);
});

test('Uses date 12/25/2025', () => {
  expect(isDate("12/25/2025")).toBe(true);
});

test('Uses date 111/222/3333', () => {
  expect(isDate("111/222/3333")).toBe(false);
});

test('Uses date 12/30/45', () => {
  expect(isDate("12/30/45")).toBe(false);
});

// isHexColor(...) tests
test('Uses hex color #FfF', () => {
  expect(isHexColor("#FfF")).toBe(true);
});

test('Uses hex color #010101', () => {
  expect(isHexColor("#010101")).toBe(true);
});

test('Uses hex color #EFGHIJ', () => {
  expect(isHexColor("#EFGHIJ")).toBe(false);
});

test('Uses hex color #1', () => {
  expect(isHexColor("#1")).toBe(false);
});