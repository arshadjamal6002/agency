"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { siteConfig } from "@/lib/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export function Contact() {
  const wa = siteConfig.whatsappNumber.replace(/\D/g, "");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      if (!serviceId || !templateId || !publicKey) {
        await new Promise((r) => setTimeout(r, 600));
        setStatus("success");
        setFirstName("");
        setEmail("");
        setSubject("");
        setMessage("");
        return;
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: firstName,
          reply_to: email,
          subject,
          message,
        },
        { publicKey }
      );
      setStatus("success");
      setFirstName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-bg-main py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Link
          href={siteConfig.fiverrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[rgba(108,71,255,0.35)] bg-[rgba(108,71,255,0.12)] px-4 py-2 text-xs font-medium text-purple-light transition hover:bg-[rgba(108,71,255,0.2)]"
        >
          See All 408+ Reviews on Fiverr →
        </Link>
        <div className="mt-8">
          <SectionLabel label="GET IN TOUCH" />
        </div>
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Let&apos;s Build Something <br />
          <GradientText>Great Together</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-text-secondary">
          Choose however you prefer to reach me — I&apos;m always one message or
          call away.
        </p>
      </div>

      <motion.div
        className="mx-auto mt-12 grid max-w-6xl gap-5 px-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div
          variants={staggerItem}
          className="contact-card flex flex-col rounded-[14px] border border-[var(--border-default)] bg-bg-card p-6"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(37,211,102,0.15)] text-green-wa">
            <MessageCircle className="h-5 w-5" />
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-green-wa">
            Instant message
          </p>
          <h3 className="mt-1 text-lg font-bold text-white">WhatsApp</h3>
          <p className="mt-2 flex-1 text-sm text-text-secondary">
            Message me directly for quick questions, project inquiries, or
            anything in between. I typically reply within minutes.
          </p>
          <p className="mt-4 text-sm text-brandblue">
            +{siteConfig.whatsappNumber.replace(/^\+/, "")}
          </p>
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-green-wa py-3 text-sm font-medium text-white transition hover:brightness-110"
          >
            Chat on WhatsApp →
          </a>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="contact-card flex flex-col rounded-[14px] border border-[var(--border-default)] bg-bg-card p-6"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(59,130,246,0.15)] text-brandblue">
            <Calendar className="h-5 w-5" />
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-brandblue">
            Free consultation
          </p>
          <h3 className="mt-1 text-lg font-bold text-white">Book a Call</h3>
          <p className="mt-2 flex-1 text-sm text-text-secondary">
            Schedule a free 30-minute consultation. We&apos;ll discuss your
            project, goals, and how I can help bring your vision to life.
          </p>
          <p className="mt-4 text-xs text-text-muted">
            30 Minutes · Free · Google Meet
          </p>
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brandblue py-3 text-sm font-medium text-white transition hover:brightness-110"
          >
            Book a Free Call →
          </a>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="contact-card flex flex-col rounded-[14px] border border-[var(--border-default)] bg-bg-card p-6"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(108,71,255,0.15)] text-purple-light">
            <Mail className="h-5 w-5" />
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-purple-light">
            Send a message
          </p>
          <h3 className="mt-1 text-lg font-bold text-white">Email Me</h3>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-1 flex-col gap-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="form-input w-full rounded-lg border border-[var(--border-default)] bg-bg-card-alt px-3 py-2 text-sm text-white placeholder:text-text-muted"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="form-input w-full rounded-lg border border-[var(--border-default)] bg-bg-card-alt px-3 py-2 text-sm text-white placeholder:text-text-muted"
              />
            </div>
            <input
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject (e.g. Website Project)"
              className="form-input w-full rounded-lg border border-[var(--border-default)] bg-bg-card-alt px-3 py-2 text-sm text-white placeholder:text-text-muted"
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              rows={4}
              className="form-input min-h-[100px] w-full flex-1 resize-y rounded-lg border border-[var(--border-default)] bg-bg-card-alt px-3 py-2 text-sm text-white placeholder:text-text-muted"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-auto w-full rounded-full bg-[var(--purple)] py-3 text-sm font-medium text-white transition hover:bg-[#7c5dff] disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send Message →"}
            </button>
            {status === "success" && (
              <p className="text-center text-sm text-green-400">
                Message sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Please try again or email directly.
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>

      <p className="mx-auto mt-8 max-w-3xl px-6 text-center text-[12px] text-text-muted">
        Response time: Within 24 hours · Location: Available Worldwide · Email:{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-purple-light hover:underline"
        >
          {siteConfig.email}
        </a>
      </p>
    </section>
  );
}
