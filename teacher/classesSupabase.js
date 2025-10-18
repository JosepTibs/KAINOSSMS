// /teacher/classesSupabase.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 🧩 Initialize Supabase
const SUPABASE_URL = "https://nwhmnfsvljarntdqysuu.supabase.co"; // ⬅️ Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53aG1uZnN2bGphcm50ZHF5c3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3OTQ4MjgsImV4cCI6MjA3NjM3MDgyOH0.bTkXPzJWwu3ExvhaGC_jykkM1eXavJaUkcw4_u3cD3E"; // ⬅️ Replace with your public anon key
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 🧠 Add new class
export async function addClass({ subject, grade_level, description, teacher_id }) {
  const { data, error } = await supabase
    .from("classes")
    .insert([{ subject, grade_level, description, teacher_id }])
    .select();

  if (error) throw error;
  return data;
}

// 📦 Get all classes for teacher
export async function getClasses(teacher_id) {
  const { data, error } = await supabase
    .from("classes")
    .select("*")
    .eq("teacher_id", teacher_id)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

// 🗑️ Delete class
export async function deleteClass(classId) {
  const { error } = await supabase.from("classes").delete().eq("id", classId);
  if (error) throw error;
}
