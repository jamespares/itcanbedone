/**
 * This file contains type definitions for the Supabase database tables.
 * It serves as both documentation and type safety for the application.
 */

export interface Report {
  // Auto-generated fields
  id: string // UUID, auto-generated
  created_at: string // Timestamp, auto-generated

  // User input fields
  organization: string
  department: string | null
  description: string
  is_anonymous: boolean
  contact_email: string | null
}

export interface NetworkMember {
  // Auto-generated fields
  id: string // UUID, auto-generated
  created_at: string // Timestamp, auto-generated

  // User input fields
  name: string
  email: string | null
  twitter_handle: string | null
}

/**
 * Database Schema (SQL):
 *
 * -- Reports table
 * create table reports (
 *   id uuid default uuid_generate_v4() primary key,
 *   created_at timestamp with time zone default timezone('utc'::text, now()) not null,
 *   organization text not null,
 *   department text,
 *   description text not null,
 *   is_anonymous boolean not null default false,
 *   contact_email text
 * );
 *
 * -- Network Members table
 * create table network_members (
 *   id uuid default uuid_generate_v4() primary key,
 *   created_at timestamp with time zone default timezone('utc'::text, now()) not null,
 *   name text not null,
 *   email text,
 *   twitter_handle text
 * );
 */
