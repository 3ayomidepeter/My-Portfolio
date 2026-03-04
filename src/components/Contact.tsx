import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface ToastState {
  visible: boolean;
  type: "success" | "error";
  message: string;
}

function validate(form: FormState): Partial<FormState> {
  const errors: Partial<FormState> = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>({ visible: false, type: "success", message: "" });
  const toastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (type: "success" | "error", message: string) => {
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    setToast({ visible: true, type, message });
    toastTimeout.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setForm({ name: "", email: "", message: "" });
    showToast("success", "Message sent! I'll get back to you soon. 🎉");
  };

  return (
    <section id="contact" className="mt-20 pb-12 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold"
      >
        Contact
      </motion.h2>

      <div className="mt-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            If you'd like to work together or have a question, send a message
            below or email me at{" "}
            <a
              href="mailto:peterolowooje360@gmail.com"
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              peterolowooje360@gmail.com
            </a>
            .
          </p>
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/3ayomidepeter"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Visit GitHub profile (opens in new tab)"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/olowooje/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Visit LinkedIn profile (opens in new tab)"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          name="contact"
          className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-1">
                Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`block w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-800 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  errors.name
                    ? "border-red-400 dark:border-red-600"
                    : "border-gray-300 dark:border-gray-700"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" role="alert" className="mt-1 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-1">
                Email <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`block w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-800 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  errors.email
                    ? "border-red-400 dark:border-red-600"
                    : "border-gray-300 dark:border-gray-700"
                }`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium mb-1">
                Message <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`block w-full rounded-lg border px-3 py-2 bg-white dark:bg-gray-800 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none ${
                  errors.message
                    ? "border-red-400 dark:border-red-600"
                    : "border-gray-300 dark:border-gray-700"
                }`}
                placeholder="Your message…"
              />
              {errors.message && (
                <p id="message-error" role="alert" className="mt-1 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
            aria-busy={loading}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              "Send message"
            )}
          </button>
        </motion.form>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            role="status"
            aria-live="polite"
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl text-sm font-medium ${
              toast.type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {toast.type === "success" ? "✅" : "❌"} {toast.message}
            <button
              onClick={() => setToast((t) => ({ ...t, visible: false }))}
              aria-label="Dismiss notification"
              className="ml-2 hover:opacity-70 transition-opacity"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
