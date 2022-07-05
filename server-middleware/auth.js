import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { createClient } from '@supabase/supabase-js';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_BASE_URL = process.env.SUPABASE_BASE_URL;

const supabase = createClient(SUPABASE_BASE_URL, SUPABASE_ANON_KEY);

console.log(supabase);
