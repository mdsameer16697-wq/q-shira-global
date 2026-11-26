import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/blocks";
import { CONTACT_EMAIL, seo } from "@/lib/site";

export const Route = createFileRoute("/contact-us")({
  head: () => seo("Contact Us", "Get in touch with Q Shira Creation for garment manufacturing and export enquiries."),
  component: Page,
});

function Page() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Enquiry from ${form.name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHero title="Contact Us" />
      <section className="container-site grid gap-14 pb-10 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="display text-5xl lg:text-7xl">Q Shira</p>
          <p className="outline-word text-5xl lg:text-7xl">Creation</p>
          <h2 className="mt-10 text-2xl font-medium leading-snug lg:text-3xl">
            We are here to listen. Tell us what you need and we will be glad to advise you.
          </h2>
          <div className="mt-12 border-t border-border pt-8">
            <h3 className="eyebrow">Office</h3>
            <p className="mt-4 text-lg text-muted-foreground">India</p>
            <p className="mt-2 text-lg">
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-plum">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
        <form onSubmit={submit} className="space-y-5 bg-surface p-8 shadow-soft lg:p-12">
          <h3 className="text-2xl font-semibold">Enquire Now</h3>
          <Input required maxLength={100} placeholder="Your name" value={form.name} onChange={set("name")} />
          <Input required type="email" maxLength={255} placeholder="Email" value={form.email} onChange={set("email")} />
          <Input type="tel" maxLength={20} placeholder="Phone" value={form.phone} onChange={set("phone")} />
          <Textarea required maxLength={1000} rows={5} placeholder="Your requirement" value={form.message} onChange={set("message")} />
          <Button type="submit" size="lg" className="w-full">
            Send Enquiry
          </Button>
          <p className="text-sm text-muted-foreground">This opens your email app with the enquiry ready to send.</p>
        </form>
      </section>
    </>
  );
}
