export const FEEDBACK_FORM_NAME = "exam-feedback";

export function NetlifyFeedbackForm() {
  return (
    <form
      name={FEEDBACK_FORM_NAME}
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
      aria-hidden="true"
    >
      <input type="hidden" name="form-name" value={FEEDBACK_FORM_NAME} />
      <input type="text" name="name" />
      <textarea name="message" />
      <input type="text" name="bot-field" />
    </form>
  );
}
