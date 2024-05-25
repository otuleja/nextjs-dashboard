
export default function Invoices() {
  const payload = process.env.KINDE_POST_LOGOUT_REDIRECT_URL + " " + process.env.BASE_URL;
  return <p>Invoices Page {payload}</p>;
}