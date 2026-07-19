# Petplanet Dog Clinic & Animal Diagnostics Website

A modern, highly interactive, single-page website for Petplanet Dog Clinic, built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

## Supabase Setup (Appointments)

The appointment booking form is wired to Supabase. To set this up for your own project:

1. Create a new project on [Supabase](https://supabase.com/).
2. In the SQL Editor, run the following to create the `appointments` table and enable RLS (Row Level Security):

   ```sql
   create table appointments (
     id uuid default uuid_generate_v4() primary key,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     name text not null,
     phone text not null,
     pet_name text,
     pet_type text not null,
     preferred_date date not null,
     preferred_time time,
     message text,
     status text default 'pending'::text
   );

   -- Enable Row Level Security
   alter table appointments enable row level security;

   -- Create policy to allow anonymous inserts only
   create policy "Allow anonymous inserts" on appointments
     for insert
     with check (true);
   ```

3. Copy your Project URL and anon key from Project Settings > API.
4. Rename `.env.example` to `.env` and fill in your keys:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## Configuration

- To update the WhatsApp number, edit `src/config.ts`.
- Theme colors (Orange, Black, White) are strictly configured in `tailwind.config.js`.
