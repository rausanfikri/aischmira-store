import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AISCHMIRA",
  description: "Privacy policy for AISCHMIRA.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24">
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">Privacy Policy</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/50">Last Updated: October 2026</p>
        </div>

        <div className="prose prose-sm md:prose-base prose-neutral max-w-none font-body font-light text-text/80 leading-loose prose-headings:font-heading prose-headings:not-italic prose-headings:font-normal prose-headings:text-text prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <p>
            AISCHMIRA (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by AISCHMIRA when you visit or make a purchase from our website.
          </p>
          
          <h3>1. Information We Collect</h3>
          <p>
            When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
          </p>
          <p>
            When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as &quot;Order Information&quot;.
          </p>

          <h3>2. How We Use Your Personal Information</h3>
          <p>
            We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
          </p>
          <ul>
            <li>Communicate with you;</li>
            <li>Screen our orders for potential risk or fraud; and</li>
            <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
          </ul>

          <h3>3. Sharing Your Personal Information</h3>
          <p>
            We share your Personal Information with third parties to help us use your Personal Information, as described above. We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
          </p>

          <h3>4. Contact Us</h3>
          <p>
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at privacy@aischmira.com.
          </p>
        </div>

      </div>
    </div>
  );
}
