/*
# Create quote_requests table

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — customer name
  - `phone` (text, not null) — customer phone
  - `email` (text, not null) — customer email
  - `service_type` (text, not null) — type of service requested (e.g. "Akut hjälp", "Badrumsrenovering", etc.)
  - `address` (text) — optional address for the job
  - `message` (text, not null) — description of the request
  - `status` (text, default 'new') — processing status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `quote_requests`.
- This is a no-auth public form: anyone can submit a quote request. Allow anon + authenticated INSERT only.
- No SELECT/UPDATE/DELETE from the frontend — only inserts.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service_type text NOT NULL,
  address text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests"
ON quote_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);
