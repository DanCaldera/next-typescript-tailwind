import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_KEY } from '../lib/constants'

// Set your subabase Url in '../lib/constants'
const supabaseUrl: string = SUPABASE_URL
// Set you supabase Key in your environment variables
//TODO Fix this validation
const supabaseKey = process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
