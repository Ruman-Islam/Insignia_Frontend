import { Helmet } from "react-helmet";

const AboutUsScreen = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Insignia - About Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section className="py-5 md:py-10">
        <div className="max-w-screen-xl w-full mx-auto p-content__padding ">
          <div className="w-full h-[350px] flex justify-center items-center bg-about__us__background bg-center bg-cover rounded-tl-md rounded-tr-md relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 "></div>
            <h6 className="text-brand__font__size__xl font-brand__font__bold text-white relative">
              About Us
            </h6>
          </div>
          <div className="bg-white text-brand__font__size__sm text-gray-500 leading-relaxed p-5 md:p-10">
            <p>
              We respect your privacy and recognize the need to protect the
              personally identifiable information (any information by which you
              can be identified, such as name, address, and telephone number)
              you share with us. We would like to assure you that we follow
              appropriate standards when it comes to protecting your privacy on
              our website.
            </p>
            <br />
            <p>
              Some of our web pages use &rsquo;cookies&rsquo; so that we can
              better serve you with customized information when you return to
              our site. Cookies are identifiers which websites send to the
              browser on your computer to facilitate your next visit to our
              site. You can set your browser to notify you when you are sent a
              cookie, giving you the option to decide whether or not to accept
              it. The information we collect and analyze is used to improve our
              service to you.
            </p>
            <br />
            <p>
              With specific reference to third party advertising, we use
              third-party service providers to serve ads on our behalf across
              the Internet and sometimes on this site. They may collect
              anonymous information about your visits to our website, and your
              interaction with our products and services. They may also use
              information about your visits to this and other websites to target
              advertisements for goods and services. This anonymous information
              is collected through the use of a &rsquo;pixel tag&rsquo;, which
              is industry standard technology used by most major websites. No
              personally identifiable information is collected or used in this
              process. Such third parties do not know your name, phone number,
              address, email address, or any personally identifying information.
              If you would like more information about this practice and to know
              your choices about not having this anonymous information used by
              our third party service provider, with specific reference to
              booking/e-commerce transactions, GoZayaan collects the following
              personal sensitive information from you while transacting through
              GoZayaan, this includes your Name and Sex, Phone Number, Billing
              Address, Credit Card details and Date of birth in case of a child.
            </p>
            <br />
            <p>
              GoZayaan does not sell or trade upon any of the above foregoing
              information without the consent of the user or customer.
            </p>

            <br />
            <p>
              The foregoing information collected from the
              users/customers/travelers is put to the following use:
            </p>
            <p>
              Customer name, address, phone number, traveler&rsquo;s name, age
              and image of Passport are shared with applicable service providers
              like the airlines, hotels, etc., for the purpose of reservation
              and booking the services for the customer/traveler. Information
              like Credit Card Details and Net Banking Details are usually
              collected directly by the payment gateways and banks and not by
              GoZayaan, but if ever stored or retained by us, the data will be
              stored internally, secured and is never shared, except that they
              may be shared with third party private/government security
              agencies to screen for fraudulent activities. These details are
              also shared with certain third parties only for the purpose of
              processing &rsquo;Cash Back & Discounts&rsquo;. Information like
              Phone number, E-mail address and billing address may be used for
              promotional purposes, unless the customer/user has unsubscribed
              from such services. Uploading a profile photo is optional and
              GoZayaan doesn’t use or share it for any purpose.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsScreen;
