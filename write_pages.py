import os
base = r'C:\Users\Admin\pachatopia-revamp\src\pages'

def w(slug, title, sub, body):
    t = f'''---
import Layout from "../layouts/Layout.astro";
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
import CallToAction from "../components/CallToAction.astro";
import LucideIcon from "../components/LucideIcon.astro";
const lang = "fr";
---
<Layout title="{title} — Pachatopia" description="{sub}" lang={{lang}}>
  <Header lang={{lang}} />
  <main>
    <section class="relative text-white py-24 md:py-32 bg-primary overflow-hidden">
      <div...[truncated]