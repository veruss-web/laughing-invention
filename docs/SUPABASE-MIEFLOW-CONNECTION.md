# Supabase MIE FLOW

Project ini tetap menggunakan Supabase sebagai database utama. Konfigurasi lokal yang diberikan untuk project MIE FLOW berada di `.env.local` (file ini sengaja di-ignore Git).

## Project
- URL: `https://xlgpsfkantfmvvvcsihb.supabase.co`
- Variable URL: `NEXT_PUBLIC_SUPABASE_URL`
- Variable key: `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

## Vercel
Tambahkan dua environment variable tersebut di **Project Settings → Environment Variables**, lalu redeploy. `.env.local` tidak dikirim Git karena masuk `.gitignore`.

## Database existing
Jangan menjalankan schema dari nol pada project yang sudah berisi data. Untuk perbaikan final, gunakan `supabase/APPLY-FINAL-FIX.sql` di SQL Editor project Supabase yang sama setelah backup. Script tersebut memperbaiki overload `create_sale`, mempertahankan data, dan me-reload schema PostgREST.

## Storage
Aplikasi menggunakan bucket `product-images` yang sudah menjadi bagian dari setup Supabase MIE FLOW.
