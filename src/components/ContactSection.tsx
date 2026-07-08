import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "1ce79e2e-fbb8-49ce-8ff0-ac6fc43977c2",
          subject: `New project enquiry from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          from_name: "A. HEBRIDES Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full bg-card border border-border px-4 py-4 text-foreground font-light placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";
  const selectClasses =
    "w-full bg-card border border-border px-4 py-4 text-foreground font-light focus:outline-none focus:border-accent transition-colors appearance-none";

  return (
    <section id="contact" className="bg-background px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-4">
          START A PROJECT.
        </h2>
        <p className="text-muted-foreground text-sm font-light mb-12">
          Tell us what you're building. We'll tell you how we can help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" required className={inputClasses} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input type="email" placeholder="Email" required className={inputClasses} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <input type="text" placeholder="Company / Brand" className={inputClasses} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
          <div className="grid md:grid-cols-2 gap-6">
            <select required className={selectClasses} value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}>
              <option value="" disabled>Project Type</option>
              <option value="Campaign">Campaign</option>
              <option value="Brand Identity">Brand Identity</option>
              <option value="Content">Content</option>
              <option value="Other">Other</option>
            </select>
            <select required className={selectClasses} value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
              <option value="" disabled>Budget Range</option>
              <option value="Under £500">Under £500</option>
              <option value="£500-£2k">£500–£2k</option>
              <option value="£2k-£5k">£2k–£5k</option>
              <option value="£5k+">£5k+</option>
              <option value="Let's discuss">Let's discuss</option>
            </select>
          </div>
          <textarea placeholder="Tell us about your project" rows={5} required className={`${inputClasses} resize-none`} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground px-10 py-4 text-sm tracking-widest font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "SENDING..." : "SEND IT OVER"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
