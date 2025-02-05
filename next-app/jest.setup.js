import "@testing-library/jest-dom"; // Adds custom matchers for DOM assertions
import "whatwg-fetch"; // Ensures fetch is available in Jest
import { TextDecoder, TextEncoder } from "util";
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' }); // Change to the correct environment file if needed


// Polyfill TextEncoder/TextDecoder (used in some Next.js internal APIs)
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
