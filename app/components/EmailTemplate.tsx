import * as React from "react";

interface EmailTemplateProps {
  name?: string;
  email: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name = "",
  email,
  message,
}) => (
  <div style={{ maxWidth: "500px", margin: "1rem auto", padding: "0.5rem" }}>
    <p>Hello there,</p>

    <p>
      Thank you for joining the waitlist! We&apos;re thrilled to have you on
      board and appreciate your interest in
      <em>
        <strong> GreenspaceDAO </strong>
      </em>
      .
    </p>

    <p>
      Our team is hard at work ensuring that we deliver an exceptional
      experience to each and every one of our users. While you&apos;re on the
      waitlist, we&apos;ll keep you updated on our progress and notify you as
      soon as we go live.
    </p>

    <p>
      In the meantime, if you have any questions or need assistance, feel free
      to reach out to us at{" "}
      <a href="mailto:support@greenspacedao.xyz">support@greenspacedao.xyz</a>.
    </p>

    <p>
      Thank you once again for your patience and support. We&apos;re excited to
      have you as part of our community!
    </p>

    <p>
      Best regards,
      <br />
      Victory Lucky
      <br />
      Co-Founder
      <br />
      <strong>GreenspaceDAO</strong>
    </p>
  </div>
);
