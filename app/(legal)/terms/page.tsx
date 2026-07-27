import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | AISCHMIRA",
  description: "Terms and conditions for AISCHMIRA.",
};

export default function TermsPage() {
  return (
    <div className="pt-[104px] pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24">
          <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-text mb-6">Terms & Conditions</h1>
          <p className="font-body text-xs tracking-editorial uppercase text-text/50">Last Updated: October 2026</p>
        </div>

        <div className="prose prose-sm md:prose-base prose-neutral max-w-none font-body font-light text-text/80 leading-loose prose-headings:font-heading prose-headings:not-italic prose-headings:font-normal prose-headings:text-text prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <p>
            This website is operated by AISCHMIRA. Throughout the site, the terms "we", "us" and "our" refer to AISCHMIRA. AISCHMIRA offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
          </p>
          
          <h3>1. Online Store Terms</h3>
          <p>
            By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
          </p>

          <h3>2. General Conditions</h3>
          <p>
            We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
          </p>

          <h3>3. Products or Services</h3>
          <p>
            Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store.
          </p>

          <h3>4. Modifications to the Service and Prices</h3>
          <p>
            Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
          </p>
        </div>

      </div>
    </div>
  );
}
