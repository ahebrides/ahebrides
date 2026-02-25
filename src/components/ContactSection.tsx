import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:laurent@ahebrides.co.uk?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border py-3 text-foreground font-light placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";
  const selectClasses =
    "w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors appearance-none";

  return (
    <section id="contact" className="bg-background px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-display text-foreground text-3xl md:text-5xl mb-16">
          START A PROJECT.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <input
            type="text"
            placeholder="Name"
            required
            className={inputClasses}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className={inputClasses}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Company / Brand"
            className={inputClasses}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />

          <select
            required
            className={selectClasses}
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          >
            <option value="" disabled>Project type</option>
            <option value="Campaign">Campaign</option>
            <option value="Brand Identity">Brand Identity</option>
            <option value="Content">Content</option>
            <option value="Other">Other</option>
          </select>

          <select
            required
            className={selectClasses}
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          >
            <option value="" disabled>Budget range</option>
            <option value="Under £500">Under £500</option>
            <option value="£500-£2k">£500–£2k</option>
            <option value="£2k-£5k">£2k–£5k</option>
            <option value="£5k+">£5k+</option>
          </select>

          <textarea
            placeholder="Tell us about your project"
            rows={4}
            required
            className={`${inputClasses} resize-none`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest font-medium hover:bg-primary/90 transition-colors w-full md:w-auto"
          >
            SEND IT OVER
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
